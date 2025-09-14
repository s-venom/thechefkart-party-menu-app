import React from "react";
import DishCard from "./DishCard";

const DishList = ({ dishes, onToggleSelect, selectedDishes, onDishClick, onViewIngredients, collapsedCategories, toggleCategoryCollapse }) => {
  const dishesByCategory = dishes.reduce((acc, dish) => {
    const categoryName = dish.category.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(dish);
    return acc;
  }, {});

  if (Object.keys(dishesByCategory).length === 0) {
    return <div className="text-center py-8"><p className="text-gray-500">No dishes found matching your filters</p></div>;
  }

  return (
    <div className="space-y-6 px-4">
      {Object.entries(dishesByCategory).map(([categoryName, categoryDishes]) => (
        <div key={categoryName}>
          <div
            className="mb-4 cursor-pointer flex items-center justify-between"
            onClick={() => toggleCategoryCollapse(categoryName)}
          >
            <h3 className="text-lg font-semibold text-gray-800">{categoryName}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">({categoryDishes.length})</span>
              <svg
                className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
                  collapsedCategories.has(categoryName) ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 15l-7-7-7 7" />
              </svg>
            </div>
          </div>
          {!collapsedCategories.has(categoryName) && (
            <div className="space-y-4 overflow-y-auto">
              {categoryDishes.map((dish) => (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  isSelected={selectedDishes.includes(dish.id)}
                  onToggleSelect={onToggleSelect}
                  onDishClick={onDishClick}
                  onViewIngredients={onViewIngredients}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DishList;