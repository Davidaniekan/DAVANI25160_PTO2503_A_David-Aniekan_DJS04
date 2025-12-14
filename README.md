# 🎧 PodcastApp — React Podcast Browsing Application

## 📌 Overview
PodcastApp is a responsive React application designed to provide an intuitive podcast browsing experience. It allows users to explore podcast previews, search by title, filter by genre, sort results, and navigate through paginated content — all while maintaining synchronized UI state across the app.

The project demonstrates clean React architecture, centralized state management using Context, and a focus on scalability and maintainability.

---

## 📝 Project Description
PodcastApp fetches podcast preview data from a public API and presents it in a card-based grid layout. Users can interact with the application by searching podcast titles, filtering by genre, sorting results, and navigating through paginated content.

The application maintains a consistent state across all interactions using a centralized React Context, ensuring that search queries, filters, sorting, and pagination remain synchronized throughout the user experience.

This project is designed as a scalable foundation that can be extended in future iterations with modal views, podcast detail pages, and advanced interactions.

---

## 🛠️ Technologies Used
- **React** — Component-based UI development
- **React Context API** — Global state management
- **Vite** — Fast development server and build tool
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3** — Responsive and adaptive layouts
- **Fetch API** — Remote data retrieval
- **JSDoc** — Code documentation and clarity

---

## ✨ Features
### Implemented
- Fetch podcast preview data from an external API
- Display podcasts in a responsive grid layout
- Live search by podcast title
- Genre-based filtering
- Multiple sorting options:
  - Newest first
  - Oldest first
  - Title A–Z
  - Title Z–A
- Pagination with previous/next navigation
- Total podcast count tracking
- Fully responsive design (mobile, tablet, desktop)
- Keyboard-accessible podcast cards
- Modular, reusable components
- Fully documented codebase using JSDoc

### Planned Enhancements
- 🪟 Podcast detail modal
- ♿ Enhanced accessibility support

---

## 📁 Project Structure
```
📂 PodcastApp/
│
├── index.html                     # HTML layout
│
├── 📂 src
│   ├── 📂 api/
│   │   ├── fetchPodcast.js       # Fetches podcast data from API
│   │
│   ├── 📂 assets/                # SVG icons and assets
│   │
│   ├── 📂 components/ 
│   │   ├── Container.jsx         # Search, filter, and sort controls
│   │   ├── Header.jsx            # App header with search interaction
│   │   ├── PodcastCard.jsx       # Renders a single podcast card
│   │   ├── Pagination.jsx        # Pagination controls
│   │   └── PodcastGrid.jsx       # Podcast grid renderer
│   │
│   ├── PodcastContext.jsx        # Global podcast state management
│   ├── data.js                   # Genre metadata
│   ├── App.jsx                   # Root application component
│   ├── App.css                   # Page-specific styling
│   ├── index.css                 # Global and responsive styles
└── └── main.jsx                  # Application entry point
```
---

## ⚙️ Setup Instructions
#### 1️⃣ Clone the repository
   ```bash
   git clone https://github.com/Davidaniekan/DAVANI25160_PTO2503_A_David-Aniekan_DJS04.git

   cd podcastApp
   ```
#### 2️⃣ Install dependencies
- Using npm:
   ```bash
   npm install
   ```
#### 3️⃣ Start development server
  ```bash
   npm run dev
   ```
- Your app will run at:
   ```
   http://localhost:5173/
   ```
---
## 🧭 Usage / Interaction Guide
### 🔍 Searching Podcasts
- Click the search icon in the header to reveal the search input.
- Type any part of a podcast title.
- Results update automatically as you type.
- Press Enter to close it.

### 🏷️ Filtering by Genre
- Use the Filter by dropdown to select a genre.
- The podcast list updates immediately.
- Genre selection works together with search and sorting.

### 🔃 Sorting Results
- Use the Sort dropdown to change the order of podcasts.
- Sorting options apply without resetting other filters.

### 📄 Pagination
- Use Prev and Next buttons to navigate between pages.
- Pagination respects the current search, filter, and sort state.

### 📱 Responsive Behavior
- Mobile devices display a single-column layout.
- Tablets and desktops adjust card count dynamically.

--- 
## 🌐 API Information
#### Podcast data is fetched from:
  ```bash
   https://podcast-api.netlify.app
   ```
   - The API returns genre IDs only. Genre titles are mapped locally using the ```data.js``` file.
---
## 🌐 Live Demo

- Check out the project here: [PodcastApp](https://react-podcastapp.netlify.app/)
---

## 👤 Author

**David Aniekan**
Frontend Developer
[GitHub](https://github.com/Davidaniekan) | [LinkedIn](https://linkedin.com/in/david-aniekan)

