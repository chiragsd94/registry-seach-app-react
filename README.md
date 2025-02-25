# NPM Package Search App

## About

Hi, I’m **Chirag SD**, and I built an **NPM Package Search App** using **React**.  
This application allows users to search for npm packages and retrieve their details dynamically.

## 🔹 Key Features & Technologies Used:

- **Programmatic Navigation (`useNavigate`)** – Navigates to the details page dynamically based on user input.
- **Custom Hook (`useFetch`)** – Handles API requests efficiently.
- **React Router (`useParams`, `useNavigate`, `Link`)** – Manages routing and dynamic URL parameters.
- **State Management (`useState`, `useEffect`)** – Controls user input and API responses.
- **Axios** – Fetches package details from the **NPM Registry API**.

## 🌟 How It Works:

1. Users enter an **npm package name** in the search bar.
2. On form submission, the app **navigates programmatically** to `/details/:title`.
3. The app fetches the package details and displays relevant information like the **latest version, author, and description**.

## 📡 Data Source:

This project uses the **[NPM Registry API](https://registry.npmjs.org/)** as the data source to fetch package details dynamically.
## ⚠️ Disclaimer:
I am **not liable** for any **copyright issues** or any other legal concerns arising from the use of this project.  
This app simply fetches publicly available data from the **NPM Registry API**, and all package details belong to their respective owners.


This project follows best practices, ensuring smooth navigation and a clean user experience. 🚀
