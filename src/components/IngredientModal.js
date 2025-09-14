const IngredientModal = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div className="min-h-screen bg-gray-50 z-20">
      <div className="w-full max-w-md mx-auto bg-white min-h-screen">
        <div className="flex items-center gap-4 p-4 bg-white shadow-[0px_4px_4px_0px_rgba(230,230,230,0.28)] sticky top-0 z-10">
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className={`w-4 h-4 text-gray-600`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Ingredient list</h1>
        </div>

        <div className="pb-6 overflow-y-auto">
          <div className="w-full mt-[42px] flex justify-center items-between">
            <div className="pl-8 p-4">
              <h2 className="text-xl font-bold mb-2">{dish.name}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-12">{dish.description}</p>
              <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
              <p className="text-sm text-gray-600">For 2 people</p>
            </div>
            <img 
              src="/images/ingredients.png" 
              alt="ingredients"
              className="h-[240px]"
            />
          </div>
          

          <div className="m-8 py-4 space-y-1  border-t border-gray-200">
            {dish.ingredients.map((ingredient, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <span className="text-gray-800">{ingredient.name}</span>
                <span className="text-gray-600 font-medium">{ingredient.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;