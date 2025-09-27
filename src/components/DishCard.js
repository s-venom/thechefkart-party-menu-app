import React from "react";
import { ReactComponent as Ingredient } from "../assets/icons/ingredient_1.svg"

const DishCard = ({ dish, isSelected, onToggleSelect, onDishClick, onViewIngredients }) => {
  return (
    <>
      <div
        className="bg-white py-4 cursor-pointer"// hover:shadow-sm transition-shadow border-b-3 border-gray-100 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
        onClick={() => onDishClick?.(dish)}
      >
        <div className="flex gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-start mb-2 gap-2">
              <h3 className="font-semibold text-base text-gray-900 truncate pr-2">{dish.name}</h3>
              {dish.type === "VEG" ? (
                <div className="w-5 h-5 border-2 border-green-600 rounded-sm flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                </div>
              ) : (
                <div className="w-5 h-5 border-2 border-red-600 rounded-sm flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                </div>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {dish.description.length > 50 ? `${dish.description.substring(0, 50)}... ` : dish.description}
              <span className="font-medium cursor-pointer">Read more</span>
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewIngredients(dish);
              }}
              className="flex items-center gap-2 text-orange-600 text-sm font-medium"
            >
              <Ingredient className="w-5 h-5" /><span>Ingredient</span>
            </button>
          </div>
          <div className="relative inline-flex flex-col justify-center items-center">
            <div className="w-26 h-26 rounded-xl overflow-hidden">
              <img src={dish.image || "/images/placeholder.svg"} alt={dish.name} className="w-full h-full object-cover" />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSelect(dish.id);
              }}
              className={`absolute -bottom-3 right-3 w-[74px] h-[30px] p2 bg-white rounded-lg shadow-[0px_1px_8px_0px_rgba(28,28,28,0.15)] text-sm font-bold transition-colors ${
                isSelected
                  ? "bg-white text-orange-600"
                  : "bg-white text-green-600"
              }`}
            >
              {isSelected ? "Remove" : "Add +"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
          <div className="w-90 h-[2.5px] bg-gray-100 rounded-full" />
        </div>
    </>
    
  );
};

export default DishCard;