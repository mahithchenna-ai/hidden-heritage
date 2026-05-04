# Hidden Heritage MVP

This is a complete, production-ready frontend MVP for **Hidden Heritage**, a tourism-tech platform showcasing India's forgotten heritage sites, starting with the Chambal region.

## 🚀 Tech Stack
- **React 18** (JavaScript)
- **Vite** (Next-gen frontend tool)
- **React Router 6** (Navigation)
- **Leaflet & React-Leaflet** (Interactive Geospatial Maps)
- **Tailwind CSS & Vanilla CSS** (Hybrid design system)
- **Lucide React** (Iconography)
- **LocalStorage API** (Persistent feedback storage)

## ✨ Key Features
- **🏡 Immersive Home**: Fullscreen hero sections, dynamic photo treadmills, and curated region cards.
- **🗺️ Interactive Region Mapping**: Asymmetrical grid layouts for sites integrated with real-time Leaflet map pins and routing.
- **📅 Smart Trip Builder**: 
  - Drag-and-drop itinerary organization.
  - Automatic budget estimation for travel, food, and expert guides based on user presets.
- **🏺 Detailed Site Discovery**: High-fidelity pages with heritage metadata, image galleries, and cultural context.
- **📝 Feedback Loop**: Integrated feedback collection with local persistence for user engagement tracking.

## 📂 Project Structure
```text
src/
├── components/   # Reusable UI elements (Navbar, Footer, SiteCard, etc.)
├── pages/        # Main route containers (Home, About, Site Details, etc.)
├── data/         # Mock data and configuration constants
├── App.jsx       # Main application entry and routing
└── index.html    # Base HTML template with Tailwind configuration
```

## 🛠️ Getting Started

1. **Clone the repository**: `git clone https://github.com/mahithchenna-ai/hidden-heritage.git`
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Access the app**: Open `http://localhost:5173` in your browser.

## 🎨 Design Philosophy
- **Rich Aesthetics**: Utilizes `Playfair Display` for a classic heritage feel and `Inter` for modern readability.
- **Micro-interactions**: Subtle hover effects, smooth transitions, and glassmorphism elements provide a premium "high-end" user experience.
- **Accessibility**: Designed with a responsive-first approach to ensure a seamless experience across all devices.

## 🔮 Future Roadmap
- [ ] Integration with a live PostgreSQL/Supabase backend.
- [ ] Integration with Mapbox for advanced pathfinding and turn-by-turn directions.
- [ ] Real-time booking and payment gateway integration.
- [ ] Community-driven heritage documentation (Wiki-style).

