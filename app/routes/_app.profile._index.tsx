import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import {
  IconEdit,
  IconLogout,
  IconCheck,
  IconX,
  IconAlertCircle
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { gql, useMutation } from "urql";
import { Block, List, ListItem, ListInput, Dialog, DialogButton, Toast } from "konsta/react";
import { useMainLayoutProps } from "~/layout/MainLayout";
import { dirAtom, userAtom } from "~/store/store";
import { nanoid } from "nanoid";

// GraphQL mutation for updating user
const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        oidcId
        firstName
        lastName
        email
      }
      clientMutationId
    }
  }
`;

// Validation constants
const MIN_NAME_LENGTH = 2;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

interface ProfileCardProps {
  label: string;
  value: string;
  field: "firstName" | "lastName" | "email";
  isEditing: boolean;
  formData: { firstName: string; lastName: string; email: string };
  formErrors: { firstName: string; lastName: string; email: string; api: string };
  onChange: (field: "firstName" | "lastName" | "email", value: string) => void;
  toggleEdit: (field: "firstName" | "lastName" | "email") => void;
  saveField: (field: "firstName" | "lastName" | "email") => void;
  cancelEdit: (field: "firstName" | "lastName" | "email") => void;
  rules?: {
    minLength?: number;
    pattern?: RegExp;
    patternMessage?: string;
  };
}

function ProfileCard({
  label,
  value,
  field,
  isEditing,
  formData,
  formErrors,
  onChange,
  toggleEdit,
  saveField,
  cancelEdit,
  rules,
}: ProfileCardProps) {
  return (
    <div className={`bg-gray-50 border ${formErrors[field] ? 'border-red-300' : 'border-gray-300'} rounded-md p-4 shadow-sm hover:bg-gray-100 transition-all`}>
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-700">{label}</p>
            <div className="flex gap-2">
              <button
                onClick={() => cancelEdit(field)}
                className="p-1 text-gray-500 hover:text-gray-700 transition-colors bg-gray-200 rounded-full"
                aria-label="Cancel"
              >
                <IconX size={16} />
              </button>
              <button
                onClick={() => saveField(field)}
                className="p-1 text-white hover:bg-green-600 transition-colors bg-green-500 rounded-full"
                aria-label="Save"
              >
                <IconCheck size={16} />
              </button>
            </div>
          </div>
          {/* Custom input field instead of ListInput to fix visibility issues */}
          <div className="relative">
            <input
              type={field === "email" ? "email" : "text"}
              placeholder={label}
              value={formData[field]}
              onChange={(e) => onChange(field, e.target.value)}
              className={`w-full p-3 border ${formErrors[field] ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black`}
            />
            {formData[field] && (
              <button
                type="button"
                onClick={() => onChange(field, "")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear input"
              >
                <IconX size={16} />
              </button>
            )}
          </div>
          {formErrors[field] && (
            <p className="text-sm text-red-500 mt-1">{formErrors[field]}</p>
          )}
          
          {/* Field Guidance */}
          {rules && !formErrors[field] && (
            <div className="text-xs text-gray-500 mt-1">
              {rules.minLength && (
                <p>Must be at least {rules.minLength} characters</p>
              )}
              {rules.patternMessage && (
                <p>{rules.patternMessage}</p>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-base text-gray-800">{value || "Not set"}</p>
          </div>
          <button
            onClick={() => toggleEdit(field)}
            className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            aria-label={`Edit ${label}`}
          >
            <IconEdit size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const [dir] = useAtom(dirAtom);
  const [auth, setAuth] = useAtom(userAtom);
  useMainLayoutProps({ navbarTitle: "My Profile" });

  const navigate = useNavigate();
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [formData, setFormData] = useState({
    firstName: auth?.firstName || "",
    lastName: auth?.lastName || "",
    email: auth?.email || "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    api: "",
  });
  const [isEditing, setIsEditing] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });

  const [{ error: mutationError, data: mutationData }, executeMutation] = useMutation(UPDATE_USER);

  useEffect(() => {
    // Sync form data when auth changes
    setFormData({
      firstName: auth?.firstName || "",
      lastName: auth?.lastName || "",
      email: auth?.email || "",
    });
    setIsEditing({ firstName: false, lastName: false, email: false });
    setFormErrors({ firstName: "", lastName: "", email: "", api: "" });
  }, [auth]);

  const logout = async () => {
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) throw new Error(`Logout failed: ${response.statusText}`);

      localStorage.removeItem("connected_user");
      localStorage.removeItem("validOtp");
      showToast("Logging out...", "success");
      
      // Small delay for better UX
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (error) {
      console.error("Logout error:", error);
      showToast("Failed to logout. Please try again.", "error");
    }
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  const validateField = (field: "firstName" | "lastName" | "email") => {
    const errors = { ...formErrors };
    let isValid = true;

    if (field === "firstName") {
      if (!formData.firstName.trim()) {
        errors.firstName = "First name is required";
        isValid = false;
      } else if (formData.firstName.trim().length < MIN_NAME_LENGTH) {
        errors.firstName = `First name must be at least ${MIN_NAME_LENGTH} characters`;
        isValid = false;
      } else {
        errors.firstName = "";
      }
    }

    if (field === "lastName") {
      if (!formData.lastName.trim()) {
        errors.lastName = "Last name is required";
        isValid = false;
      } else if (formData.lastName.trim().length < MIN_NAME_LENGTH) {
        errors.lastName = `Last name must be at least ${MIN_NAME_LENGTH} characters`;
        isValid = false;
      } else {
        errors.lastName = "";
      }
    }

    if (field === "email") {
      if (!formData.email.trim()) {
        errors.email = "Email is required";
        isValid = false;
      } else if (!EMAIL_REGEX.test(formData.email)) {
        errors.email = "Only Gmail addresses are allowed";
        isValid = false;
      } else {
        errors.email = "";
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const updateProfile = async (updatedData: typeof formData) => {
    if (!auth?.oidcId) {
      setFormErrors((prev) => ({
        ...prev,
        api: "User ID not found. Please log in again.",
      }));
      return false;
    }

    const input = {
      patch: {
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        email: updatedData.email,
      },
      oidcId: auth.oidcId,
      clientMutationId: nanoid(),
    };

    try {
      const result = await executeMutation({ input });

      if (result.error) {
        throw new Error(result.error.message || "Failed to update profile");
      }

      const updatedUser = result.data?.updateUser?.user || {
        ...auth,
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        email: updatedData.email,
      };

      // Update userAtom
      setAuth(updatedUser);

      // Update localStorage
      localStorage.setItem("connected_user", JSON.stringify(updatedUser));
      
      setFormErrors({ firstName: "", lastName: "", email: "", api: "" });
      showToast("Profile updated successfully!", "success");
      return true;
    } catch (error) {
      console.error("Error updating profile:", error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Failed to update profile. Please try again.";
      
      setFormErrors((prev) => ({
        ...prev,
        api: errorMessage,
      }));
      showToast(errorMessage, "error");
      return false;
    }
  };

  const handleInputChange = (field: "firstName" | "lastName" | "email", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field] || formErrors.api) {
      setFormErrors((prev) => ({ ...prev, [field]: "", api: "" }));
    }
  };

  const toggleEdit = (field: "firstName" | "lastName" | "email") => {
    // Close any other open edit fields
    setIsEditing({
      firstName: field === "firstName" ? true : false,
      lastName: field === "lastName" ? true : false,
      email: field === "email" ? true : false,
    });
    
    // Reset the field to original value
    setFormData((prev) => ({
      ...prev,
      [field]: auth?.[field] || "",
    }));
    
    // Clear errors
    setFormErrors((prev) => ({ ...prev, [field]: "", api: "" }));
  };

  const saveField = async (field: "firstName" | "lastName" | "email") => {
    if (!validateField(field)) return;
    
    // Create a copy of the current form data that includes both edited and unedited fields
    const updatedData = {
      ...formData,
    };
    
    const success = await updateProfile(updatedData);
    if (success) {
      setIsEditing((prev) => ({ ...prev, [field]: false }));
    }
  };

  const cancelEdit = (field: "firstName" | "lastName" | "email") => {
    setFormData((prev) => ({
      ...prev,
      [field]: auth?.[field] || "",
    }));
    setIsEditing((prev) => ({ ...prev, [field]: false }));
    setFormErrors((prev) => ({ ...prev, [field]: "", api: "" }));
  };

  return (
    <Block className="max-w-2xl mx-auto my-6 p-6 bg-white rounded-xl shadow-lg">
      {/* Profile Section */}
      <div className="mb-6">
        <div className="text-center mb-8 mt-10">
          <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-3">
            <span className="text-2xl font-semibold">
              {auth?.firstName?.[0]?.toUpperCase() || ""}
              {auth?.lastName?.[0]?.toUpperCase() || ""}
            </span>
          </div>
          <h1 className="text-xl font-semibold">
            {auth?.firstName || ""} {auth?.lastName || ""}
          </h1>
          <p className="text-gray-600 text-sm">{auth?.email || ""}</p>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
        {formErrors.api && (
          <div className="mb-4 text-sm text-red-500 break-words bg-red-50 p-3 rounded-md border border-red-200 flex items-start">
            <IconAlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={16} />
            <span>{formErrors.api}</span>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <ProfileCard
            label="First Name"
            value={auth?.firstName || ""}
            field="firstName"
            isEditing={isEditing.firstName}
            formData={formData}
            formErrors={formErrors}
            onChange={handleInputChange}
            toggleEdit={toggleEdit}
            saveField={saveField}
            cancelEdit={cancelEdit}
            rules={{ minLength: MIN_NAME_LENGTH }}
          />
          <ProfileCard
            label="Last Name"
            value={auth?.lastName || ""}
            field="lastName"
            isEditing={isEditing.lastName}
            formData={formData}
            formErrors={formErrors}
            onChange={handleInputChange}
            toggleEdit={toggleEdit}
            saveField={saveField}
            cancelEdit={cancelEdit}
            rules={{ minLength: MIN_NAME_LENGTH }}
          />
          <ProfileCard
            label="Email"
            value={auth?.email || ""}
            field="email"
            isEditing={isEditing.email}
            formData={formData}
            formErrors={formErrors}
            onChange={handleInputChange}
            toggleEdit={toggleEdit}
            saveField={saveField}
            cancelEdit={cancelEdit}
            rules={{ 
              pattern: EMAIL_REGEX, 
              patternMessage: "Only Gmail addresses are accepted (example@gmail.com)" 
            }}
          />
        </div>
      </div>

      {/* Logout Option */}
      <List strong inset className="rounded-lg overflow-hidden">
        <ListItem
          title="Logout"
          titleFontSizeIos="text-base"
          media={
            <IconLogout
              className={`${dir === "ltr" ? "-scale-x-100" : ""} text-red-500`}
              size={20}
            />
          }
          link
          chevronIos={false}
          chevronMaterial={false}
          onClick={() => setLogoutDialog(true)}
          className="hover:bg-gray-50 transition-colors"
        />
      </List>

      {/* Logout Dialog */}
     
{logoutDialog && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div 
      className="fixed inset-0 bg-black bg-opacity-50" 
      onClick={() => setLogoutDialog(false)}
    ></div>
    
    <div className="bg-white rounded-lg shadow-xl z-10 w-full max-w-md mx-4">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Confirm Logout
        </h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to logout from your account?
        </p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => setLogoutDialog(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Toast Notifications */}
      <Toast
        position="center"
        opened={toast.show}
        className={`${toast.type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}
      >
        {toast.message}
      </Toast>
    </Block>
  );
}