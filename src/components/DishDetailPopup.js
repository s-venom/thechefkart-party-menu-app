import React, { useState } from "react";
import { ReactComponent as Ingredient } from "../assets/icons/ingredient_2.svg"


const DishDetailPopup = ({ dish, isSelected, onToggleSelect, onViewIngredients, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for closing animation to complete
  };

  return (
    <div className="w-full max-w-md mx-auto fixed inset-0 z-10 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" onClick={handleClose} />

      {/* Popup */}
      <div
        className={`relative w-full bg-white rounded-t-3xl transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        <div className="p-6 pb-8">
          {/* Dish Image */}
          <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-4">
            <img src={dish.image || "/images/placeholder.svg"} alt={dish.name} className="w-full h-full object-cover" />
          </div>

          {/* Dish Info */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-gray-900">{dish.name}</h2>
                {dish.type === "VEG" ? (
                <div className="w-6 h-6 border-2 border-green-600 rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                ) : (
                <div className="w-6 h-6 border-2 border-red-600 rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                </div>
                )}
            </div>
            {/* Action Buttons */}
            <button
              onClick={() => onToggleSelect(dish.id)}
              className={` w-[84px] h-[36px] p2 bg-white rounded-lg shadow-[0px_4px_12px_4px_rgba(28,28,28,0.15)] text-sm font-bold transition-colors ${
                isSelected
                  ? "bg-white text-orange-600"
                : "bg-white text-green-600"
              }`}
            >
              {isSelected ? "Remove" : "Add +"}
            </button>
          </div>

          {/* Category */}
          <p className="text-gray-600 text-sm font-bold capitalize mb-2">
            {dish.mealType
                .toLowerCase()
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            }
        </p>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4">{dish.description}</p>

          {/* Ingredients Button */}
          <button
            onClick={() => onViewIngredients(dish)}
            className="flex items-center gap-2 text-orange-600 text-sm font-medium" //"flex items-center gap-2 px-4 py-2 text-orange-600 text-sm font-medium border border-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
          >
            <Ingredient className="w-5 h-5" /> <span>Ingredient</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishDetailPopup;