import {
  IconFilter,
  IconPencil,
  IconPigMoney,
  IconPlus,
  IconSearch,
  IconShoppingCart,
  IconSortAscending,
  IconTrash,
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { Typetransaction } from "gql/graphql";
import { useAtom } from "jotai";
import { Fab } from "konsta/react";
import { nanoid } from "nanoid";
import { useEffect, useMemo, useState, useRef } from "react";
import { gql, useMutation, useQuery } from "urql";
import TransactionModal from "~/components/TransactionModal";
import { userAtom } from "~/store/store";
import { icons } from "./CategoryIconPicker";
import "dayjs/locale/en";

// Define the Transaction type interface
interface Transaction {
  transactionId: string;
  type: string;
  userId: string;
  categoryId: string;
  date: string;
  description: string;
  amount: number;
  category: {
    id: string;
    name: string;
    icon: string;
    iconColor: string;
    type: string;
  };
}

// Define the Category interface
interface Category {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  type: string;
}

// Define the query result type
interface TransactionsData {
  transactions: {
    nodes: Transaction[];
  };
  categories: {
    nodes: Category[];
  };
}

// Helper function to get the appropriate icon component
const DynamicIcon = ({
  iconName,
  color,
  size = 20,
}: {
  iconName: string;
  color: string;
  size?: number;
}) => {
  const iconObj = icons.find((icon) => icon.value === iconName);
  if (iconObj) {
    const IconComponent = iconObj.component;
    return <IconComponent size={size} style={{ color }} />;
  }
  return <IconShoppingCart size={size} color={color} />;
};

const GET_TRANSACTIONS = gql`
  query GET_TRANSACTIONS4($userId: String!) {
    transactions(orderBy: DATE_DESC, condition: { userId: $userId }) {
      nodes {
        transactionId
        type
        userId
        categoryId
        date
        description
        amount
        category {
          id
          name
          icon
          iconColor
          type
        }
      }
    }
    
    categories (condition: { userId: $userId }) {
      nodes {
        id
        name
        icon
        iconColor
        type
      }
    }
  }
`;

const DELETE_TRANSACTION = gql`
  mutation DELETE_TRANSACTION($id: String!) {
    deleteTransaction(input: { transactionId: $id }) {
      clientMutationId
    }
  }
`;

const EDIT_TRANSACTION = gql`
  mutation EDIT_TRANSACTION2(
    $id: String!
    $amount: Float!
    $categoryId: String!
    $date: Datetime!
    $description: String!
    $type: Typetransaction!
    $clientMutationId: String!
  ) {
    updateTransaction(
      input: {
        patch: {
          amount: $amount
          categoryId: $categoryId
          date: $date
          description: $description
          type: $type
        }
        transactionId: $id
        clientMutationId: $clientMutationId
      }
    ) {
      transaction {
        transactionId
        type
        categoryId
        date
        description
        amount
      }
    }
  }
`;

// Import and configure dayjs locale and UTC plugin
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

const TransactionsList = () => {
  // Get the current user from atom store
  const [user] = useAtom(userAtom);

  // Ref to track the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // Month selection state
  const [selectedMonth, setSelectedMonth] = useState(dayjs());

  // Query hook with refetch function
  const [{ data, fetching, error }, refetch] = useQuery<TransactionsData>({
    query: GET_TRANSACTIONS,
    variables: user ? { userId: user.oidcId } : undefined,
    pause: !user,
    requestPolicy: "cache-and-network",
  });

  const [, deleteTransaction] = useMutation(DELETE_TRANSACTION);
  const [, editTransaction] = useMutation(EDIT_TRANSACTION);

  const [editData, setEditData] = useState({
    id: "",
    type: Typetransaction.Expense,
    categoryId: "",
    date: "",
    description: "",
    amount: 0,
  });

  const [basicOpened, setBasicOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [transactionToDelete, setTransactionToDelete] =
    useState<Transaction | null>(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [summaryData, setSummaryData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  });

  // Navigate to previous month
  const previousMonth = () => {
    setSelectedMonth(selectedMonth.subtract(1, "month"));
  };

  // Navigate to next month
  const nextMonth = () => {
    setSelectedMonth(selectedMonth.add(1, "month"));
  };

  // Calculate summary data when transactions and selectedMonth change
  useEffect(() => {
    if (data?.transactions?.nodes) {
      // Filter transactions by selected month
      const monthTransactions = data.transactions.nodes.filter((tx) => {
        const txDate = dayjs(tx.date);
        return (
          txDate.month() === selectedMonth.month() &&
          txDate.year() === selectedMonth.year()
        );
      });

      const totals = monthTransactions.reduce(
        (acc, tx) => {
          if (tx.type === "INCOME") {
            acc.totalIncome += tx.amount;
          } else {
            acc.totalExpense += tx.amount;
          }
          return acc;
        },
        { totalIncome: 0, totalExpense: 0 },
      );

      setSummaryData({
        totalIncome: totals.totalIncome,
        totalExpense: totals.totalExpense,
        balance: totals.totalIncome - totals.totalExpense,
      });
    }
  }, [data, selectedMonth]);

  // Preserve scroll position during refetch
  useEffect(() => {
    if (fetching && containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      // Store scroll position before refetch
      return () => {
        if (containerRef.current) {
          containerRef.current.scrollTop = scrollTop;
        }
      };
    }
  }, [fetching]);

  // Filter categories based on active tab
  const filteredCategories = useMemo(() => {
    if (!data?.categories?.nodes) return [];

    if (activeTab === "all") {
      return data.categories.nodes;
    }

    const categoryType = activeTab === "income" ? "INCOME" : "EXPENSE";
    return data.categories.nodes.filter((cat) => cat.type === categoryType);
  }, [data, activeTab]);

  const handleDelete = async (id: string) => {
    setShowDeleteConfirm(false);
    console.log("Deleting transaction with ID:", id);

    const result = await deleteTransaction({ id });

    console.log("Delete result:", result);

    if (result.data?.deleteTransaction) {
      console.log("Transaction deleted successfully.");
      // Refetch data
      refetch({ requestPolicy: "network-only" });
    } else {
      console.error("Failed to delete transaction:", result.error?.message);
    }
  };

  const handleEdit = async () => {
    console.log("Editing transaction:", editData);

    const result = await editTransaction({
      id: editData.id,
      amount: editData.amount,
      categoryId: editData.categoryId,
      date: editData.date,
      description: editData.description,
      type: editData.type,
      clientMutationId: nanoid(),
    });

    console.log("Edit result:", result);

    if (result.data?.updateTransaction?.transaction) {
      console.log(
        "Transaction updated successfully:",
        result.data.updateTransaction.transaction,
      );

      setIsEditing(false);
      setBasicOpened(false);

      // Refetch data
      refetch({ requestPolicy: "network-only" });
    } else {
      console.error("Failed to update transaction:", result.error?.message);
    }
  };

  const confirmDelete = (tx: Transaction) => {
    setTransactionToDelete(tx);
    setShowDeleteConfirm(true);
  };

  const toggleSort = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setActiveTab("all");
    setSearchQuery("");
    setSelectedCategory("");
  };

  if (fetching && !data)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
          <p className="text-lg font-medium text-gray-600">
            Loading transactions...
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <div className="max-w-md rounded-lg bg-red-50 p-6 text-center shadow-lg">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <IconTrash size={28} className="text-red-600" />
          </div>
          <h3 className="mb-2 text-lg font-medium text-red-800">
            Loading Error
          </h3>
          <p className="text-red-700">{error.message}</p>
          <button
            onClick={() => refetch()}
            className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );

  // Filter and sort transactions
  let displayedTransactions = [...(data?.transactions?.nodes || [])];

  // Filter by selected month
  displayedTransactions = displayedTransactions.filter((tx) => {
    const txDate = dayjs(tx.date).locale("en");;
    return (
      txDate.month() === selectedMonth.month() &&
      txDate.year() === selectedMonth.year()
    );
  });

  if (activeTab === "income") {
    displayedTransactions = displayedTransactions.filter(
      (tx) => tx.type === "INCOME",
    );
  } else if (activeTab === "expenses") {
    displayedTransactions = displayedTransactions.filter(
      (tx) => tx.type === "EXPENSE",
    );
  }

  if (selectedCategory) {
    displayedTransactions = displayedTransactions.filter(
      (tx) => tx.category?.id === selectedCategory,
    );
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    displayedTransactions = displayedTransactions.filter(
      (tx) =>
        tx.description?.toLowerCase().includes(query) ||
        tx.category?.name.toLowerCase().includes(query),
    );
  }

  // Modified sorting to ensure more precise sorting by timestamp
  displayedTransactions.sort((a, b) => {
    // Use precise timestamp comparison to ensure correct ordering
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    // If timestamps are exactly equal (rare but possible), use transactionId as tiebreaker
    if (dateA === dateB) {
      return sortOrder === "desc"
        ? b.transactionId.localeCompare(a.transactionId)
        : a.transactionId.localeCompare(b.transactionId);
    }

    return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
  });

  interface TransactionGroup {
    date: string;
    formattedDate: string;
    transactions: Transaction[];
  }

  const formatTransactionTime = (dateString: string) => {
    return dayjs.utc(dateString).local().format("HH:mm");
  };

  // MODIFIED: Updated groupTransactionsByDate function to always display newest transactions first within each day
  const groupTransactionsByDate = (
    transactions: Transaction[],
  ): TransactionGroup[] => {
    const groups: Record<string, Transaction[]> = {};

    transactions.forEach((tx) => {
      // Use date only for grouping (ignoring time)
      const date = dayjs(tx.date).format("YYYY-MM-DD");
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(tx);
    });

    // Create groups array and sort by date
    const groupsArray = Object.entries(groups).map(([date, txs]) => ({
      date,
      formattedDate: dayjs(date).locale("en").format("dddd, D MMMM YYYY"),
      // Always sort transactions within each day group with newest first
      // This ensures new transactions appear at the top within their day
      transactions: txs.sort((a, b) => {
        // Extract the exact millisecond timestamp for precise sorting
        const timeA = new Date(a.date).getTime();
        const timeB = new Date(b.date).getTime();

        // Always sort newest first within each day group regardless of global sort order
        return timeB - timeA;
      }),
    }));

    // Sort groups by date according to sortOrder
    return groupsArray.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });
  };

  const groupedTransactions = groupTransactionsByDate(displayedTransactions);

  return (
    <div
      ref={containerRef}
      className="mx-auto mb-20 max-w-lg md:max-w-2xl lg:max-w-4xl min-h-screen bg-gray-50 p-4 overflow-auto"
    >
      {/* Enhanced Dashboard Header */}
      <div className="mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg mt-20">
        <div className="p-6">
          {/* Month Selection integrated in header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={previousMonth}
              className="rounded-full p-2 text-white/80 hover:bg-blue-500/30 transition-colors"
              aria-label="Previous month"
            >
              <IconChevronLeft size={20} />
            </button>

            <div className="flex items-center space-x-2">
              <IconCalendar size={20} className="text-white" />
              <h2 className="text-lg font-medium text-white">
                {selectedMonth.locale("en").format("MMMM YYYY")}
              </h2>
            </div>

            <button
              onClick={nextMonth}
              className="rounded-full p-2 text-white/80 hover:bg-blue-500/30 transition-colors"
              aria-label="Next month"
            >
              <IconChevronRight size={20} />
            </button>
          </div>

          <div className="mb-6 mt-4 flex flex-col items-center justify-center">
            <p className="mb-2 text-xs uppercase tracking-wider text-blue-200">
              BALANCE
            </p>
            <p
              className={`text-3xl font-bold ${summaryData.balance >= 0 ? "text-green-300" : "text-red-300"}`}
            >
              {summaryData.balance >= 0 ? "+" : ""}
              {summaryData.balance.toFixed(2)} TND
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="rounded-lg bg-blue-500/30 p-4">
              <div className="flex items-center justify-center mb-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400/20 mr-2">
                  <IconArrowUp size={18} className="text-green-300" />
                </div>
                <p className="text-xs uppercase tracking-wider text-blue-100">
                  INCOME
                </p>
              </div>
              <p className="text-xl font-bold text-green-300 text-center">
                +{summaryData.totalIncome.toFixed(2)} TND
              </p>
            </div>
            <div className="rounded-lg bg-blue-500/30 p-4">
              <div className="flex items-center justify-center mb-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-400/20 mr-2">
                  <IconArrowDown size={18} className="text-red-300" />
                </div>
                <p className="text-xs uppercase tracking-wider text-blue-100">
                  EXPENSES
                </p>
              </div>
              <p className="text-xl font-bold text-red-300 text-center">
                -{summaryData.totalExpense.toFixed(2)} TND
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <IconSearch size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transactions..."
            className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            >
              <span className="text-xl">×</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Controls */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-gray-800">Transactions</h2>
          {(activeTab !== "all" || selectedCategory || searchQuery) && (
            <span className="ml-3 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              {displayedTransactions.length}
            </span>
          )}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={toggleSort}
            className="flex items-center rounded-lg border border-gray-300 bg-white p-2 shadow-sm hover:bg-gray-50"
            aria-label={
              sortOrder === "desc"
                ? "Sort in ascending order"
                : "Sort in descending order"
            }
          >
            <IconSortAscending
              size={20}
              className={
                sortOrder === "asc" ? "text-blue-600" : "text-gray-500"
              }
            />
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center rounded-lg border p-2 shadow-sm hover:bg-gray-50 ${
              showFilters
                ? "border-blue-500 bg-blue-50 text-blue-600"
                : "border-gray-300 bg-white text-gray-500"
            }`}
            aria-label="Filter transactions"
            aria-expanded={showFilters}
          >
            <IconFilter size={20} />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        role="tablist"
        className={`mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white shadow transition-all duration-300 ease-in-out ${
          showFilters ? "max-h-96 opacity-100" : "max-h-0 border-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-3 border-b">
          <button
            role="tab"
            className={`p-4 text-center font-medium transition-colors ${
              activeTab === "all"
                ? "bg-blue-50 text-blue-600"
                : "text-gray-500 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("all")}
            aria-selected={activeTab === "all"}
          >
            All
          </button>
          <button
            role="tab"
            className={`p-4 text-center font-medium transition-colors ${
              activeTab === "income"
                ? "bg-green-50 text-green-600"
                : "text-gray-500 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("income")}
            aria-selected={activeTab === "income"}
          >
            Income
          </button>
          <button
            role="tab"
            className={`p-4 text-center font-medium transition-colors ${
              activeTab === "expenses"
                ? "bg-red-50 text-red-600"
                : "text-gray-500 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("expenses")}
            aria-selected={activeTab === "expenses"}
          >
            Expenses
          </button>
        </div>

        {/* Category Filters */}
        <div className="p-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
            Filter by category
          </p>
          <div className="flex flex-wrap gap-2">
            {filteredCategories.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.id ? "" : category.id,
                  )
                }
                className={`flex items-center rounded-full px-3 py-1.5 text-sm transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-1.5">
                  <DynamicIcon
                    iconName={category.icon}
                    color={category.iconColor}
                    size={16}
                  />
                </span>
                {category.name}
              </button>
            ))}
          </div>

          {(activeTab !== "all" || selectedCategory || searchQuery) && (
            <button
              onClick={resetFilters}
              className="mt-4 w-full rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* No Transactions Message */}
      {displayedTransactions.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white p-10 text-center shadow-sm">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
            <IconPigMoney size={32} className="text-blue-500" />
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-800">
            No transactions found
          </h3>
          <p className="mb-6 text-gray-500">
            {searchQuery
              ? "No transactions match your search."
              : activeTab === "all"
              ? `No transactions for ${selectedMonth.locale("en").format("MMMM YYYY")}.`
              : activeTab === "income"
              ? `No income for ${selectedMonth.locale("en").format("MMMM YYYY")}.`
              : `No expenses for ${selectedMonth.locale("en")
              .format("MMMM YYYY")}.`}
          </p>
          <button
            onClick={() => {
              setIsEditing(false);
              setBasicOpened(true);
            }}
            className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
          >
            Add a transaction
          </button>
        </div>
      )}

      {/* Transactions List */}
      {displayedTransactions.length > 0 && (
        <div className="space-y-8">
          {groupedTransactions.map((group) => (
            <div key={group.date} className="space-y-3">
              <div className="sticky top-0 z-10 -mx-4 bg-gray-50 px-4 py-2">
                <h3 className="font-medium text-gray-500">
                  {group.formattedDate}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* MODIFIED: Removed extra sort here, we're now using pre-sorted transactions */}
                {group.transactions.map((tx) => (
                  <div
                    key={tx.transactionId}
                    className="overflow-hidden rounded-xl bg-white shadow transition-all hover:shadow-md"
                  >
                    <div className="flex items-start p-4">
                      <div
                        className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: tx.category?.iconColor
                            ? `${tx.category.iconColor}20`
                            : "#f3f4f6",
                        }}
                      >
                        <DynamicIcon
                          iconName={tx.category?.icon || "shopping"}
                          color={tx.category?.iconColor}
                          size={24}
                        />
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">
                            {tx.description || tx.category?.name || "Transaction"}
                          </h4>
                          <p
                            className={`text-lg font-bold ${tx.type === "INCOME" ? "text-green-600" : "text-red-600"}`}
                          >
                            {tx.type === "INCOME" ? "+" : "-"}
                            {tx.amount.toFixed(2)} TND
                          </p>
                        </div>

                        <div className="mt-1 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500">
                              {tx.category?.name}
                            </span>
                            <span className="mx-2 text-xs text-gray-400">•</span>
                            <span className="text-sm text-gray-500">
                              {formatTransactionTime(tx.date)}
                            </span>
                          </div>

                          <div className="flex space-x-1">
                            <button
                              className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-blue-500"
                              onClick={() => {
                                setEditData({
                                  id: tx.transactionId,
                                  type: tx.type as Typetransaction,
                                  categoryId: tx.category.id,
                                  date: tx.date,
                                  description: tx.description || "",
                                  amount: tx.amount,
                                });
                                setIsEditing(true);
                                setBasicOpened(true);
                              }}
                              aria-label="Edit"
                            >
                              <IconPencil size={18} />
                            </button>
                            <button
                              className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-red-500"
                              onClick={() => confirmDelete(tx)}
                              aria-label="Delete"
                            >
                              <IconTrash size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && transactionToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-medium text-gray-900">
              Confirm Deletion
            </h3>
            <p className="mb-6 text-gray-600">
              Are you sure you want to delete this transaction? This action cannot
              be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(transactionToDelete.transactionId)}
                className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Transaction Modal */}
      {basicOpened && (
        <TransactionModal
          basicOpened={basicOpened}
          setBasicOpened={setBasicOpened}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editData={editData}
          setEditData={setEditData}
          handleEdit={handleEdit}
          selectedMonth={selectedMonth}
          onSuccess={() => {
            // Refetch data
            refetch({ requestPolicy: "network-only" });
          }}
        />
      )}

      {/* FAB Button */}
      <Fab
        onClick={() => {
          setIsEditing(false);
          setBasicOpened(true);
        }}
        className="fixed bottom-10 sm:bottom-6 right-4 sm:right-6 z-40 transform rounded-full bg-blue-500 p-4 sm:p-5 text-white shadow-xl hover:scale-110 hover:bg-blue-600 transition-transform"
        icon={<IconPlus size={24} />}
      />
    </div>
  );
};

export default TransactionsList;