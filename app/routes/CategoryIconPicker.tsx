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
} from "@tabler/icons-react";
import { useState } from "react";

// Define icons with colors
export const icons = [
  { name: "Home", component: IconHome, color: "#DE3163", value: "home" },
  { name: "Car", component: IconCar, color: "#EF4444", value: "car" },
  {
    name: "Shopping",
    component: IconShoppingCart,
    color: "#3B82F6",
    value: "shopping",
  },
  { name: "Food", component: IconSoup, color: "#F59E0B", value: "food" },
  { name: "Health", component: IconHeart, color: "#22C55E", value: "health" },
  { name: "Work", component: IconBriefcase, color: "#8B5CF6", value: "work" },
  { name: "Travel", component: IconPlane, color: "#EC4899", value: "travel" },
  { name: "Gifts", component: IconGift, color: "#FF7F50", value: "gifts" },
  {
    name: "Medical",
    component: IconHealthRecognition,
    color: "#A855F7",
    value: "medical",
  },
  {
    name: "Sports",
    component: IconSportBillard,
    color: "#16A34A",
    value: "sports",
  },
  { name: "Music", component: IconMusic, color: "#FCD34D", value: "music" },
  {
    name: "Photography",
    component: IconCamera,
    color: "#EA580C",
    value: "photography",
  },
  {
    name: "Education",
    component: IconBook,
    color: "#38B2AC",
    value: "education",
  },
  { name: "School", component: IconSchool, color: "#4F46E5", value: "school" },
  {
    name: "Transport",
    component: IconBus,
    color: "#805AD5",
    value: "transport",
  },
  {
    name: "Savings",
    component: IconPigMoney,
    color: "#EAB308",
    value: "savings",
  },
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

  const handleIconSelect = (iconValue: string) => {
    setSelectedIcon(iconValue);

    const iconColor =
      icons.find((icon) => icon.value === iconValue)?.color || "";

    if (setSelectedColor) {
      setSelectedColor(iconColor);
    }

    if (onSelect) {
      onSelect(iconValue);
    }

    setIsPickerOpen(false);
  };

  const currentIconData = icons.find((icon) => icon.value === selectedIcon);

  // Function to create a lighter background color (low opacity)
  const getLighterColor = (color: string) => {
    return `${color}20`; // Hex with 20% opacity
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-gray-800">Select Icon</p>
        <button
          onClick={() => setIsPickerOpen(!isPickerOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full shadow-md transition duration-200"
          style={{
            backgroundColor: selectedIcon
              ? getLighterColor(currentIconData?.color || "#f3f4f6")
              : "white",
          }}
        >
          {selectedIcon && currentIconData ? (
            <currentIconData.component
              size={24}
              style={{ color: currentIconData.color }}
            />
          ) : (
            <span className="text-xl text-gray-500">+</span>
          )}
        </button>
      </div>

      {isPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Choose an Icon</h3>
            <div className="grid grid-cols-4 gap-4">
              {icons.map((icon) => (
                <button
                  key={icon.value}
                  onClick={() => handleIconSelect(icon.value)}
                  className="flex h-14 w-14 items-center justify-center rounded-full transition duration-200"
                  style={{
                    backgroundColor: getLighterColor(icon.color),
                  }}
                >
                  <icon.component size={24} style={{ color: icon.color }} />
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsPickerOpen(false)}
                className="rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryIconPicker;
