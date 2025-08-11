# AGENTS.md for YOKOGAWA FRUIT STORE Official Website

This document provides guidelines for developing and maintaining this website.

## Project Structure

-   **`public/`**: Static assets that are directly served.
    -   **`public/images/`**: Image files.
        -   **`public/images/jackets/`**: Album jacket images.
        -   **`public/images/members/`**: Member photos.
-   **`src/`**: Source code.
    -   **`src/assets/`**: Asset files that are processed by Vite (e.g., logos).
    -   **`src/components/`**: Reusable React components (Create this directory if needed).
    -   **`src/App.jsx`**: The main application component.
    -   **`src/index.css`**: Global styles.
    -   **`src/main.jsx`**: The entry point of the application.

## Development

-   This project is built with **React** and **Vite**.
-   To start the development server, run:
    ```bash
    npm install
    npm run dev
    ```
-   Before committing changes, ensure the code is formatted and linted (ESLint configuration is in `eslint.config.js`).

## Image Guidelines

-   When adding new album jackets, place the image files in `public/images/jackets/`.
-   When adding new member photos, place the image files in `public/images/members/`.
