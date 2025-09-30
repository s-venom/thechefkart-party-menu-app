// import React, { useState } from "react";
import { ReactComponent as Search } from "../assets/icons/search.svg"
// import { categories } from "../data/mockDishes";

const ToggleSwitch = ({ checked, onChange, type }) => {
  const VEG_COLOR = '#539A64';
  const NONVEG_COLOR = '#E2574C';
  const VEG_TRACK_COLOR = '#70cf87';
  const NONVEG_TRACK_COLOR = '#ff7566';
  const DEFAULT_TRACK_COLOR = '#EEEEEE';

  const dotColor = type === 'veg' ? VEG_COLOR : NONVEG_COLOR;
  const trackColor = checked ? (type === 'veg' ? VEG_TRACK_COLOR : NONVEG_TRACK_COLOR) : DEFAULT_TRACK_COLOR;
  const dotTransform = checked ? 'translate-x-4.5' : 'translate-x-0';

  return (
      <label htmlFor={`custom-toggle-${type}`} className="flex items-center cursor-pointer">
          <div className="px-2.25 py-2.5 border-2 border-[#EEEEEE] bg-white rounded-full">
              <input
                  type="checkbox"
                  id={`custom-toggle-${type}`}
                  className="sr-only toggle-checkbox"
                  checked={checked}
                  onChange={onChange}
              />
              <div className={`relative w-9.5 h-2.5 flex justify-center items-center rounded-full shadow-inner toggle-track transition-colors duration-300 ease-in-out`} style={{ backgroundColor: trackColor }}>
                  <div className={`absolute left-0 -top-1.35 w-5.5 h-5.5 bg-white rounded-lg flex items-center justify-center border-2 transition-transform duration-300 ease-in-out transform ${dotTransform}`} style={{ borderColor: dotColor }}>
                      <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ease-in-out`} style={{ backgroundColor: dotColor }}></div>
                  </div>
              </div>
          </div>
      </label>
  );
};

const Filters = ({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  activeFilters,
  onFilterToggle,
  selectedCategories,
  onCategoryDropdownChange,
  dishCounts,
}) => {
  const tabs = [
    { key: "STARTER", label: "Starter" },
    { key: "MAIN COURSE", label: "Main Course" },
    { key: "DESSERT", label: "Dessert" },
    { key: "SIDES", label: "Sides" },
  ];

  /*
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryDropdownChange(selectedCategories.filter((id) => id !== categoryId));
    } else {
      onCategoryDropdownChange([...selectedCategories, categoryId]);
    }
  };
  */

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-4 px-4 flex items-center">
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <svg
            className={`w-4 h-4 text-gray-600`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search dish for your party..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-14 pr-10 py-4 font-sm font-medium rounded-xl border border-1 border-gray-300 focus:outline-none focus:shadow-md"// focus:ring-2 focus:ring-[#FF941A]"
        />
        <Search className="absolute right-10 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {/* Menu Tabs */}
      <div className="flex gap-2 mb-6 px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onCategoryChange(tab.key)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === tab.key
                ? "bg-[#FF941A] text-white border border-[#FF941A]"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {tab.label} {dishCounts[tab.key]} {/* dishCounts[tab.key] > 0 && `${dishCounts[tab.key]}` */}
          </button>
        ))}
      </div>

      {/* Veg/Non-Veg Filters */}
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-semibold">
          {activeCategory
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
          } Selected ({dishCounts[activeCategory]})
        </h2>
        <div className="flex gap-3">
          <ToggleSwitch 
            checked={!activeFilters.includes("NON-VEG")}
            onChange={() => onFilterToggle("NON-VEG")}
            type="veg"
          />
          <ToggleSwitch 
            checked={!activeFilters.includes("VEG")}
            onChange={() => onFilterToggle("VEG")}
            type="nonveg"
          />
        </div>
      </div>

      {/* Category Dropdown */}
      {/*
      <div className="relative w-full mb-6 px-4 hidden">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg"
        >
          {selectedCategories.length === 0
            ? "Select Categories"
            : categories
                .filter((cat) => selectedCategories.includes(cat.id))
                .map((cat) => cat.name)
                .join(", ")}
        </button>
        {isDropdownOpen && (
          <>
            <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                  onClick={() => toggleCategory(category.id)}
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">{category.name}</span>
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      selectedCategories.includes(category.id) ? "bg-orange-500 border-orange-500" : "border-gray-300"
                    }`}
                  >
                    {selectedCategories.includes(category.id) && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
              ))}
            </div>
            <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
          </>
        )}
      </div>
      */}
    </div>
  );
};

export default Filters;