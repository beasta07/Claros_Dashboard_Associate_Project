# Claros Analytics Dashboard

A modern **analytics dashboard** built with **React**, **Vite**, **Tailwind CSS**, and **TypeScript**. This project demonstrates a clean, responsive UI with authentication, data fetching, and skeleton loading for improved perceived performance.

---

## Getting Started

1. **Clone the repository:**

```bash
git clone <repository-url>
cd claros-analytics-dashboard

    Install dependencies:

npm install
# or
yarn

    Start the development server:

npm run dev
# or
yarn dev

    Open in browser:
    Navigate to http://localhost:5173 (Vite default port).

Authentication

    Login credentials for demo purposes:

        Email: admin@test.com

        Password: password

    Authentication state is handled using Redux Toolkit.


## Features

- **Authentication**: Implemented using **Redux Toolkit**.
- **Data Fetching**: Managed via **TanStack Query (React Query)** for clients and transactions.
- **Skeleton Loading**: Added **TableSkeleton** components for better perceived performance while data loads.
- **Responsive Design**: Fully responsive using **Tailwind CSS**.
- **Dashboard Components**:
  - Overview
  - Analytic Charts
  - Clients Table
  - Recent Transactions
- **Pagination & Filtering**: Built-in search, status filter, and pagination for tables.

---

## Tech Stack

- **React** (Vite + TypeScript)
- **Tailwind CSS** for styling
- **Redux Toolkit** for authentication state management
- **TanStack Query** for async data fetching
- **React Icons** for icons
- Skeleton components for loading UI

---

## Project Structure

src/
├─ api/ # API calls (clients, transactions, auth)
├─ components/ # Reusable UI components
│ ├─ Dashboard/
│ ├─ Skeleton/
├─ features/ # Redux slices
├─ pages/ # Page-level components (Login, Dashboard, Clients, Transactions)
├─ types/ # TypeScript types
└─ App.tsx # Main app entry


---




Notes

    Skeleton loading improves perceived performance while fetching data from APIs.

    Ensure your API endpoints for clients and transactions are running or mocked for the dashboard to display data.

    The project is fully responsive and mobile-friendly.
```
