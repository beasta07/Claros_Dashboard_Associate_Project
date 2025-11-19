import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";
import ClientPage from "./pages/ClientPage";
import ClientDetailPage from "./pages/ClientDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes with Sidebar Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/clients/:id" element={<ClientDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
