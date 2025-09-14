# Party Menu Selection App

## Objective

The objective of this assignment is to develop a web application that allows users to select dishes for their party from a categorized menu. The app demonstrates UI design skills, logical thinking, component architecture, navigation, filtering, and list rendering in ReactJS. It provides an intuitive interface for browsing dishes, applying searches and filters, viewing details, and managing selections, ensuring a seamless user experience in party menu planning.

### Resources

Figma Design

- Figma Link: [Frontend Assignment Figma](https://www.figma.com/design/j7VAQnzrL435tnYiQP1bac/React-Native-Assignment?node-id=0-1&t=Ido2BfnGCEFnXvPT-1) (Adapt as needed for the party menu app).

![ui](images/preview.png)

## Features

- **Category Tabs**: Select from four meal types (Starter, Main Course, Dessert, Sides) to view dishes in each category.
- **Search Functionality**: Search dishes by name (case-insensitive) within the selected meal category.
- **Veg/Non-Veg Filters**: Toggle between vegetarian and non-vegetarian dishes, updating the dish list instantly.
- **Dish Listing**: Displays dish cards with name, short description, image, and buttons to add/remove or view ingredients.
- **Add/Remove Functionality**: Add or remove dishes, with visual indicators for selected dishes and a count in each category tab.
- **Selection Summary**: Shows the number of selected dishes per category and a total count at the bottom.
- **Dish Detail Popup**: Clicking a dish opens a popup with full details, including an option to view ingredients.
- **Ingredient Modal**: Displays a full-screen view of a dish’s ingredients with quantities (mock data).
- **Smooth Animations**: The dish detail popup slides up and down smoothly (300ms) for both opening and closing.

## Project Structure

```
party-menu-app/
└── src/
    ├── components/
    │   ├── DishCard.js         # Renders individual dish cards
    │   ├── DishDetailPopup.js  # Popup for dish details with add/remove and ingredient buttons
    │   ├── DishList.js         # Groups dishes by category and renders dish cards
    │   ├── Filters.js          # Handles category tabs, search, veg/non-veg filters, and category dropdown
    │   └── IngredientModal.js  # Full-screen modal for viewing dish ingredients
    ├── data/
    │   └── mockDishes.js       # Mock data for dishes and categories
    ├── App.css                 # Tailwind CSS configuration
    └── App.js                  # Main app component with state management
```

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd party-menu-app
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the app with:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

4. **Build for Production**:
   To create a production build:
   ```bash
   npm run build
   ```

### Tools and Libraries Used

- **React:** Frontend framework for building the user interface.
- **Tailwind CSS:** Utility-first CSS framework for responsive and modern styling.
- **React Hooks:** For state and lifecycle management (e.g., useState, useEffect).

## Usage

- **Select a Category**: Use the tabs (Starter, Main Course, Dessert, Sides) to view dishes in that category.
- **Search Dishes**: Type in the search bar to filter dishes by name within the selected category.
- **Filter by Type**: Toggle the Veg/Non-Veg buttons to filter dishes by dietary preference.
- **Select Categories**: Use the dropdown to filter dishes by specific cuisines (e.g., Italian, Indian).
- **Add/Remove Dishes**: Click "Add +" or "Remove" on a dish card or in the detail popup to update selections.
- **View Dish Details**: Click a dish card to open a popup with full details and an "Ingredient" button.
- **View Ingredients**: Click the "Ingredient" button in a dish card or popup to open a full-screen modal with ingredient details.
- **View Selection Summary**: Check the count of selected dishes in each category tab and the total at the bottom.


## Improvements with More Time and Challenges Faced with Solutions

- **Advanced Filtering:** Implement multi-category selection and sorting by popularity or name.

- **Real Images and Data:** Integrate with a cloud storage for dish images and expand mock data with more varieties.

- **Matching Reference UI:** Adapting the provided mock design and JSON data to React components.\
  **Solution:** Broke down UI into reusable components (e.g., DishCard, Filters) and used Tailwind for precise styling, ensuring responsiveness and visual consistency.

- **State Management Across Components:** Handling selected dishes, filters, and counts without a global store.\
  **Solution:** Used React hooks (useState) in the App component and passed props down, keeping logic centralized.

## Assignment Completion Checklist

Click to view

- The completion Checklist includes the below-mentioned points:
  - [x] I have completed all the functionalities asked in the assignment.

  - [x] I have used only the resources (Frameworks, Design files, APIs, third-party packages) mentioned in the assignment.

  - [x] I have completed the assignment **ON TIME** (by 05:10 PM IST on Sunday, September 14, 2025).
- **Specific Checklist**:
  - [x] Implemented category tabs with dish listing and selection counts.

  - [x] Added search and veg/non-veg filters with immediate updates.

  - [x] Created add/remove functionality with visual markers.

  - [x] Developed dish detail popup and ingredient modal with smooth animations.

  - [x] Used mock data for dishes and ingredients.

  - [x] Ensured responsive design across device sizes as Mobile view is primary.

  - [x] Ensured pixel perfect UI design implementation translating Figma to Code(ReactJS).

  
### Important Note

- No data persistence or local storage is implemented; selections reset on refresh.
- Navigation uses state management instead of React Navigation, as the app is single-page with modals/popups.
- Mock images use placeholders; replace with actual URLs in production.

