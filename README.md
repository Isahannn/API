

# User Albums SPA

This project is a multi-page application implemented in the style of a Single Page Application (SPA). It utilizes a single HTML file, with navigation achieved through DOM manipulation using JavaScript. Hash-based routing is used instead of real pages.

## Features

- **User List View:** Displays a list of users.
  - URL: Either `#` or `#users`.
  - Data source: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).

- **User Albums View:** Shows the list of albums for a selected user.
  - URL: Either `#users/1/albums` or `#users/1`.
  - Data source: [https://jsonplaceholder.typicode.com/albums](https://jsonplaceholder.typicode.com/albums).

- **Album Photos View:** Displays the photos in a selected album with pagination.
  - URL: Either `#users/1/albums/12` or `#users/1/12`.
  - Data source: [https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos).
  - Implements infinite scroll to load 15 photos per page as you scroll.

- **Error Handling:** Handles non-existent pages gracefully, e.g., `#users/no-user`.

## Project Structure

The application is structured into different layers for clarity and maintainability:

1. **Rendering Layer:** Handles all DOM updates and rendering logic.
2. **Data Layer:** Manages data fetching and state management.
3. **Main Entry Point:** Main application logic (main.js).
4. **ES Modules:** Utilizes ES module system for modular code organization.

## Getting Started

### Prerequisites

- Node.js (for setting up any local development dependencies)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Isahannn/API.git
   ```

2. Navigate to the project directory:
   ```bash
   cd API
   ```

3. Open `index.html` in your browser to run the application.

### Usage

1. The application starts by displaying a list of users.
2. Clicking on a user will display their albums.
3. Clicking on an album will display the photos within that album, with infinite scroll functionality to load more photos as you scroll.

### Directory Structure

```
API/
│
├── index.html          # Main HTML file
├── main.js             # Main JavaScript entry point
├── data/
│   ├── fetchUsers.js   # Fetch user data
│   ├── fetchAlbums.js  # Fetch album data
│   └── fetchPhotos.js  # Fetch photo data
│
├── render/
│   ├── renderUsers.js  # Render user list
│   ├── renderAlbums.js # Render album list
│   └── renderPhotos.js # Render photos
│
└── styles/
    └── main.css        # Main stylesheet
```

### Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

### License

This project is open-source and available under the MIT License.
