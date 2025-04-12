# Chuck Jokes App

## Project Overview

This project is a web application that displays Chuck Norris jokes. It is built using Next.js, a React framework for server-side rendering and static site generation.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd chuck-jokes-luis-garcia
    ```
2. **Install the dependencies**:
    ```bash
    npm install
    ```
3. **Create a `.env` file** in the root directory and add your API key:
    ```bash
    NEXT_PUBLIC_CHUCK_NORRIS_API_URL=your_api_url_here
    
    NEXT_PUBLIC_CHUCK_NORRIS_FAVORITES_LOCAL_STORAGE_KEY=your_local_storage_key
    
    NEXT_PUBLIC_CHUCK_NORRIS_RATED_LOCAL_STORAGE_KEY=your_local_storage_key
    ```
4. **Start the development server**:
    ```bash
    npm run dev
    ```
5. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

## Notes About Implementation Choices

- **Framework**: The project uses Next.js for its ability to handle server-side rendering and static site generation, which improves performance and SEO.
- **Styling**: The application uses CSS modules or a CSS-in-JS library (if applicable) for scoped and maintainable styles.
- **API Integration**: The application fetches jokes from an external API (e.g., Chuck Norris API) to dynamically display content.
- **Folder Structure**: The project follows the standard Next.js folder structure for better maintainability and scalability.
- **Error Handling**: Basic error handling is implemented to manage API failures gracefully.