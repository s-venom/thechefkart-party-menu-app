import React, { useState } from "react";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import DishDetailPopup from "./components/DishDetailPopup";
import IngredientModal from "./components/IngredientModal";
import { dishes } from "./data/mockDishes";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("MAIN COURSE");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState(["VEG", "NON-VEG"]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);
  const [showDishPopup, setShowDishPopup] = useState(null);
  const [collapsedCategories, setCollapsedCategories] = useState(new Set());

  const filteredDishes = dishes.filter((dish) => {
    const matchesTab = dish.mealType === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilters.includes(dish.type);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(dish.category.id);
    return matchesTab && matchesSearch && matchesFilter && matchesCategory;
  });

  const dishCounts = dishes.reduce((acc, dish) => {
    if (selectedDishes.includes(dish.id)) {
      acc[dish.mealType] = (acc[dish.mealType] || 0) + 1;
    }
    return acc;
  }, {});

  const completeDishCounts = {
    STARTER: dishCounts["STARTER"] || 0,
    "MAIN COURSE": dishCounts["MAIN COURSE"] || 0,
    DESSERT: dishCounts["DESSERT"] || 0,
    SIDES: dishCounts["SIDES"] || 0,
  };

  const handleToggleSelect = (dishId) => {
    if (selectedDishes.includes(dishId)) {
      setSelectedDishes(selectedDishes.filter((id) => id !== dishId));
    } else {
      setSelectedDishes([...selectedDishes, dishId]);
    }
  };

  const handleFilterToggle = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const handleDishClick = (dish) => {
    setShowDishPopup(dish);
  };

  const toggleCategoryCollapse = (categoryName) => {
    const newCollapsed = new Set(collapsedCategories);
    if (newCollapsed.has(categoryName)) {
      newCollapsed.delete(categoryName);
    } else {
      newCollapsed.add(categoryName);
    }
    setCollapsedCategories(newCollapsed);
  };

  return (
    <>
      {currentDish ? (
        <IngredientModal dish={currentDish} onClose={() => setCurrentDish(null)} />
      ) : (
      <div className="min-h-screen bg-gray-50">
        <div className="w-full max-w-md mx-auto bg-white min-h-screen shadow-lg relative">
          <div className="px-4 py-4 bg-white sticky top-0 z-10">
            <Filters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              activeFilters={activeFilters}
              onFilterToggle={handleFilterToggle}
              selectedCategories={selectedCategories}
              onCategoryDropdownChange={setSelectedCategories}
              dishCounts={completeDishCounts}
            />
          </div>
          <div className="pb-36 overflow-y-auto">
            <DishList
              dishes={filteredDishes}
              onToggleSelect={handleToggleSelect}
              selectedDishes={selectedDishes}
              onDishClick={handleDishClick}
              onViewIngredients={setCurrentDish}
              collapsedCategories={collapsedCategories}
              toggleCategoryCollapse={toggleCategoryCollapse}
            />
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white max-w-md mx-auto">
            <div className="flex items-center justify-between px-4 py-2 bg-[#FFFAF4]">
              <span className="text-base font-semibold">Total Dishes Selected <span className="text-lg font-bold">{selectedDishes.length}</span></span>
              <span> 
                <svg
                  className={`w-5 h-5 text-gray-600`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
            <div className="w-full px-4 py-2 shadow-[1px_0px_5px_0px_rgba(28,28,28,0.20)]">
              <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg">
                Continue
              </button>
            </div>
          </div>
          {showDishPopup && (
            <DishDetailPopup
              dish={showDishPopup}
              isSelected={selectedDishes.includes(showDishPopup.id)}
              onToggleSelect={handleToggleSelect}
              onViewIngredients={setCurrentDish}
              onClose={() => setShowDishPopup(null)}
            />
          )}
          
          
        </div>
      </div>
      )}
    </>
  );
}

export default App;