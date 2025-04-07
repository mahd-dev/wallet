import { useState } from "react";
import {
  IconHome, IconCar, IconShoppingCart, IconSoup, IconHeart, IconBriefcase, IconPlane,
  IconGift, IconHealthRecognition, IconSportBillard, IconMusic, IconCamera, IconBook,
  IconSchool, IconBus, IconPigMoney
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
  { name: "Gifts", component: IconGift, color: "#FBBF24", value: "gifts" },
  { name: "Medical", component: IconHealthRecognition, color: "#A855F7", value: "medical" },
  { name: "Sports", component: IconSportBillard, color: "#16A34A", value: "sports" },
  { name: "Music", component: IconMusic, color: "#FCD34D", value: "music" },
  { name: "Photography", component: IconCamera, color: "#EA580C", value: "photography" },
  { name: "Education", component: IconBook, color: "#38B2AC", value: "education" },
  { name: "School", component: IconSchool, color: "#4F46E5", value: "school" },
  { name: "Transport", component: IconBus, color: "#805AD5", value: "transport" },
  { name: "Savings", component: IconPigMoney, color: "#EAB308", value: "savings" },
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
  onSelect 
}: CategoryIconPickerProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleIconSelect = (iconValue: string) => {
    setSelectedIcon(iconValue);
    
    const iconColor = icons.find(icon => icon.value === iconValue)?.color || "";
    
    if (setSelectedColor) {
      setSelectedColor(iconColor);
    }
    
    if (onSelect) {
      onSelect(iconValue);
    }
    
    setIsPickerOpen(false);
  };

  const currentIconData = icons.find(icon => icon.value === selectedIcon);

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
          className="w-14 h-14 rounded-full shadow-md flex items-center justify-center transition duration-200"
          style={{
            backgroundColor: selectedIcon ? getLighterColor(currentIconData?.color || "#f3f4f6") : "white",
          }}
        >
          {selectedIcon && currentIconData ? (
            <currentIconData.component size={24} style={{ color: currentIconData.color }} />
          ) : (
            <span className="text-gray-500 text-xl">+</span>
          )}
        </button>
      </div>

      {isPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h3 className="text-lg font-semibold mb-4">Choose an Icon</h3>
            <div className="grid grid-cols-4 gap-4">
              {icons.map((icon) => (
                <button
                  key={icon.value}
                  onClick={() => handleIconSelect(icon.value)}
                  className="w-14 h-14 rounded-full flex items-center justify-center transition duration-200"
                  style={{
                    backgroundColor: getLighterColor(icon.color),
                  }}
                >
                  <icon.component size={24} style={{ color: icon.color }} />
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsPickerOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
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
