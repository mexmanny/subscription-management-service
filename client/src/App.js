import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SubscriptionCard from "./components/SubscriptionCard";
import HomePage from "./pages/Home/HomePage";
import EditPage from "./pages/EditPage/EditPage";
import DetailsPage from "./pages/DetailsPage";
import CreatePage from "./pages/CreatePage";
import "react-loading-skeleton/dist/skeleton.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContextProvider } from "./components/Context/ToastContext";
import QuickGlancePage from "./pages/QuickGlancePage";
function App() {
  const queryClient = new QueryClient();
  return (
    <ToastContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route
                exact
                path="/subscriptions/:id"
                element={<SubscriptionCard />}
              />
              <Route path="/subscriptions" element={<HomePage />}></Route>

              <Route
                path="/subscriptions/edit/:id"
                element={<EditPage />}
              ></Route>

              <Route path="/details/:id" element={<DetailsPage />}></Route>

              <Route
                path="/subscriptions/create/"
                element={<CreatePage />}
              ></Route>

              <Route path="/quick-glance" element={<QuickGlancePage />}></Route>
            </Routes>
          </Router>
        </div>
      </QueryClientProvider>
    </ToastContextProvider>
  );
}

export default App;
