# Reddit Viewer

A modern, React + Redux-powered Reddit client that lets you browse, filter, and search Reddit posts with a clean, Reddit-inspired UI.

## Features

- **Browse Reddit posts** from the front page or by category (Tech, Games, News)
- **View post details** and comments
- **Search** for posts by keyword
- **FilterBar** sidebar for quick subreddit/category navigation
- **Responsive design** and familiar Reddit look
- **Redux** for state management and async fetching
- **Fallback images** for posts without thumbnails

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/reddit-viewer.git
   cd reddit-viewer
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  components/
    FilterBar.jsx
    Header.jsx
    PostCard.jsx
    SearchBar.jsx
  features/
    posts/
      postSlice.js
  pages/
    Home.jsx
    PostDetail.jsx
  App.jsx
  index.css
  main.jsx
public/
  fallback.png
  reddit.png
```

## Customization

- **Add more categories:**  
  Edit the `filters` array in `FilterBar.jsx`.
- **Change the theme:**  
  Edit CSS variables in `index.css` (or `reddit.css`).
- **Change the favicon:**  
  Replace `public/reddit.png` and update the `<link rel="icon">` in `index.html`.

## Credits

- [Reddit API](https://www.reddit.com/dev/api/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)

## License

MIT

---

**Enjoy browsing Reddit with your
