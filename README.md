# Hidden Heritage MVP

This is a complete, production-ready frontend MVP for **Hidden Heritage**, a tourism-tech platform showcasing India's forgotten heritage sites, starting with the Chambal region.

## Tech Stack
- React + TypeScript
- Vite (Fast, modern build tool)
- React Router (Routing)
- Leaflet + React-Leaflet (Interactive Maps)
- Vanilla CSS (Custom design system)
- LocalStorage for feedback data
- Lucide React (Icons)

## Features Included
1. **Home**: Fullscreen hero with scrolling photo treadmill and region cards.
2. **Explore (Region)**: Shows the Chambal region with an asymmetrical grid of sites and an interactive map.
3. **Trip Builder**: 
   - Interactive drag-and-drop itinerary planner.
   - Dynamic calculations for travel time, accommodation, food, and local guides based on budget presets.
4. **Site Details**: Dedicated page for each site showing a hero image, full description, gallery, and metadata.
5. **Interactive Map**: Displays site pins, hover interactions, and draws routes between selected sites.
6. **About Page**: Describes the mission, vision, and purpose.
7. **Feedback Form**: Validated form saving data to `localStorage`.

## Setup Instructions

1. Ensure you have **Node.js** installed.
2. Run `npm install` to install all dependencies.
3. Run `npm run dev` to start the development server.
4. Open the displayed `localhost` URL in your browser.

## Design Notes
- The application matches the visual hierarchy, layout, spacing, and styling of the provided design reference.
- Custom typography (`Playfair Display` and `Inter`) has been incorporated via Google Fonts.
- Responsive design has been implemented across the application.
- Modern interactions like hover scale, micro-animations, blur effects, and glassmorphism (in the navbar) are included to provide a rich, premium feel.

## Future Enhancements
- Integration with an actual backend API.
- Actual path-finding APIs (e.g., Mapbox Directions API) for more accurate travel times.
- Real booking payment gateways.
