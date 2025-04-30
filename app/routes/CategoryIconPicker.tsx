import { useState } from "react";
import {
  IconBook,
  IconBriefcase,
  IconBus,
  IconCamera,
  IconCar,
  IconGift,
  IconHealthRecognition,
  IconHeart,
  IconHome,
  IconMusic,
  IconPigMoney,
  IconPlane,
  IconSchool,
  IconShoppingCart,
  IconSoup,
  IconSportBillard,
  IconCoffee,
  IconDevicesPc,
  IconBuildingBank,
  IconCoin,
  IconMoneybag,
  IconCreditCard,
  IconReceiptTax,
  IconCalculator,
  IconShirt,
  IconDeviceMobile,
  IconBuildingCommunity,
  IconPaw,
  IconBuildingHospital,
  IconMovie,
  IconBabyBottle,
  IconBuildingWarehouse,
  IconGardenCart,
  IconBike,
  IconFileInvoice,
  IconCurrencyDollar,
  IconBuildingStore,
  IconBuildingArch,
  IconTools,
  IconAffiliate,
  IconSubscript,
  IconGasStation,
  IconCashBanknote,
  IconReceipt,
  IconWallet,
} from "@tabler/icons-react";

// Define icons with colors
export const icons = [
  { name: "Home", component: IconHome, color: "#DE3163", value: "home" },
  { name: "Car", component: IconCar, color: "#EF4444", value: "car" },
  { name: "Shopping", component: IconShoppingCart, color: "#3B82F6", value: "shopping" },
  { name: "Food", component: IconSoup, color: "#F59E0B", value: "food" },
  { name: "Health", component: IconHeart, color: "#22C55E", value: "health" },
  { name: "Work", component: IconBriefcase, color: "#8B5CF6", value: "work" },
  { name: "Travel", component: IconPlane, color: "#EC4899", value: "travel" },
  { name: "Gifts", component: IconGift, color: "#FF7F50", value: "gifts" },
  { name: "Medical", component: IconHealthRecognition, color: "#A855F7", value: "medical" },
  { name: "Sports", component: IconSportBillard, color: "#16A34A", value: "sports" },
  { name: "Music", component: IconMusic, color: "#FCD34D", value: "music" },
  { name: "Photography", component: IconCamera, color: "#EA580C", value: "photography" },
  { name: "Education", component: IconBook, color: "#38B2AC", value: "education" },
  { name: "School", component: IconSchool, color: "#4F46E5", value: "school" },
  { name: "Transport", component: IconBus, color: "#805AD5", value: "transport" },
  { name: "Savings", component: IconPigMoney, color: "#EAB308", value: "savings" },
  { name: "Coffee", component: IconCoffee, color: "#7C3AED", value: "coffee" },
  { name: "Electronics", component: IconDevicesPc, color: "#0369A1", value: "electronics" },
  { name: "Banking", component: IconBuildingBank, color: "#064E3B", value: "banking" },
  { name: "Investments", component: IconCoin, color: "#65A30D", value: "investments" },
  { name: "Salary", component: IconMoneybag, color: "#047857", value: "salary" },
  { name: "Credit Card", component: IconCreditCard, color: "#4338CA", value: "credit_card" },
  { name: "Taxes", component: IconReceiptTax, color: "#BE123C", value: "taxes" },
  { name: "Budget", component: IconCalculator, color: "#7E22CE", value: "budget" },
  { name: "Clothing", component: IconShirt, color: "#F472B6", value: "clothing" },
  { name: "Phone", component: IconDeviceMobile, color: "#15803D", value: "phone" },
  { name: "Rent", component: IconBuildingCommunity, color: "#B45309", value: "rent" },
  { name: "Pets", component: IconPaw, color: "#854D0E", value: "pets" },
  { name: "Hospital", component: IconBuildingHospital, color: "#DC2626", value: "hospital" },
  { name: "Entertainment", component: IconMovie, color: "#4F46E5", value: "entertainment" },
  { name: "Children", component: IconBabyBottle, color: "#DB2777", value: "children" },
  { name: "Storage", component: IconBuildingWarehouse, color: "#78350F", value: "storage" },
  { name: "Gardening", component: IconGardenCart, color: "#15803D", value: "gardening" },
  { name: "Fitness", component: IconBike, color: "#0D9488", value: "fitness" },
  { name: "Bills", component: IconFileInvoice, color: "#9D174D", value: "bills" },
  { name: "Income", component: IconCurrencyDollar, color: "#059669", value: "income" },
  { name: "Groceries", component: IconBuildingStore, color: "#92400E", value: "groceries" },
  { name: "Property", component: IconBuildingArch, color: "#374151", value: "property" },
  { name: "Repairs", component: IconTools, color: "#701A75", value: "repairs" },
  { name: "Commission", component: IconAffiliate, color: "#0E7490", value: "commission" },
  { name: "Subscriptions", component: IconSubscript, color: "#4B5563", value: "subscriptions" },
  { name: "Cash", component: IconCashBanknote, color: "#15803D", value: "cash" },
  { name: "Receipt", component: IconReceipt, color: "#0F766E", value: "receipt" },
  { name: "Wallet", component: IconWallet, color: "#6D28D9", value: "wallet" },
];

interface CategoryIconPickerProps {
  selectedIcon: string | null;
  setSelectedIcon: (icon: string) => void;
  selectedColor?: string | null;
  setSelectedColor?: (color: string) => void;
  onSelect?: (iconValue: string) => void;
}

const CategoryIconPicker = ({
  selectedIcon,
  setSelectedIcon,
  selectedColor,
  setSelectedColor,
  onSelect,
}: CategoryIconPickerProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleIconSelect = (iconValue: string) => {
    setSelectedIcon(iconValue);
    const iconColor = icons.find((icon) => icon.value === iconValue)?.color || "";
    if (setSelectedColor) setSelectedColor(iconColor);
    if (onSelect) onSelect(iconValue);
    setIsPickerOpen(false);
  };

  const currentIconData = icons.find((icon) => icon.value === selectedIcon);
  const getLighterColor = (color: string) => `${color}20`; // Hex with 20% opacity
  const filteredIcons = searchTerm
    ? icons.filter((icon) => icon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : icons;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-gray-800">Select Icon</p>
        <button
          onClick={() => setIsPickerOpen(!isPickerOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full shadow-md transition duration-200"
          style={{
            backgroundColor: selectedIcon
              ? getLighterColor(currentIconData?.color || "#f3f4f6")
              : "white",
          }}
        >
          {selectedIcon && currentIconData ? (
            <currentIconData.component size={24} style={{ color: currentIconData.color }} />
          ) : (
            <span className="text-xl text-gray-500">+</span>
          )}
        </button>
      </div>

      {isPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 mt-10">
          <div className="w-full max-w-lg rounded-lg bg-white p-4 shadow-lg mt-5 ">
            <h3 className="mb-3 text-lg font-semibold">Choose an Icon</h3>
            <input
              type="text"
              placeholder="Search icons..."
              className="mb-3 w-full rounded-lg border border-gray-300 p-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="max-h-80 overflow-y-auto">
              <div className="grid grid-cols-5 gap-2">
                {filteredIcons.map((icon) => (
                  <button
                    key={icon.value}
                    onClick={() => handleIconSelect(icon.value)}
                    className="flex flex-col items-center rounded-lg p-2 hover:bg-gray-100"
                    title={icon.name}
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: getLighterColor(icon.color) }}
                    >
                      <icon.component size={20} style={{ color: icon.color }} />
                    </div>
                    <span className="mt-1 text-xs text-gray-700 truncate">{icon.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setIsPickerOpen(false)}
              className="mt-3 w-full rounded-lg bg-gray-300 py-2 hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryIconPicker;