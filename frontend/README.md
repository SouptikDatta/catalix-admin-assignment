### Project Overview

This project is a React-based admin dashboard that serves as a platform for various functionalities including signup, login, home, analytics, transformation, library, settings, activities, notifications, and messages etc. It utilizes React Router for navigation and Ant Design, Material Ui for UI components.

## Deployment <a name="deployment"></a>
This project is deployed on [Netlify](https://souptik-catalix.netlify.app/). You can visit the deployed application using the following link: [https://souptik-catalix.netlify.app/](https://souptik-catalix.netlify.app/).


## Table of Contents
1. [Setup](#setup)
2. [File Structure](#file-structure)
3. [Components](#components)
4. [Pages](#pages)
5. [Routing](#routing)
6. [Deployment](#deployment)

## Setup <a name="setup"></a>
To run this project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.

## File Structure <a name="file-structure"></a>
- `src/`
  - `assets/`: Contains images and styles.
  - `components/`: Reusable UI components.
  - `layout/`: Layout components for structuring the app.
  - `pages/`: Different pages of the application.
  - `theme/`: Theme configuration for MUI components.
  - `App.js`: Main entry point of the application.
  - `router.js`: Defines routing configuration using React Router.

## Components <a name="components"></a>
- `MenuList`: Component for rendering a menu list.
- `MenuList2`: Another menu list component.
- etc.

## Pages <a name="pages"></a>
- `Home`: Home page of the application.
- `Analytics`: Page for displaying analytics data.
- `Transformation`: Page for transformation-related functionalities.
- `Library`: Page for managing a library of items.
- `Settings`: Settings page for user preferences.
- `Activities`: Page for displaying user activities.
- `Notifications`: Page for managing notifications.
- `Messages`: Page for managing user messages.

## Routing <a name="routing"></a>
Routing in this application is managed using React Router. The `router.js` file defines the routes for different pages and components. The main layout is provided by the `Main` component, which includes a sidebar and a top bar. Each route corresponds to a specific page or component that is rendered within the layout.
