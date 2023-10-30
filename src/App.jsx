import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout/AppLayout";

// import AuthLayout from "./layout/AuthLayout";
import "./index.css";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/Auth/SIgnIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Lien from "./pages/BulkLien/Lien";
import Unlien from "./pages/BulkUnLIen/Unlien";
import PageNotFOund from "./pages/PageNotFound/PageNotFOund";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="/app" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bulk-lien" element={<Lien />} />
          <Route path="bulk-unlien" element={<Unlien />} />
        </Route>
        <Route path="*" element={<PageNotFOund />} />
      </Routes>
    </>
  );
};

export default App;
