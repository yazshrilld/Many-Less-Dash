import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout/AppLayout";
import "./index.css";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/Auth/SIgnIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Declined from "./pages/Declined/Declined";
import Approved from "./pages/Approved/Approved";
import Failed from "./pages/Failed/Failed";
import Pending from "./pages/Pending/Pending";
import Lien from "./pages/BulkLien/Lien";
import Unlien from "./pages/BulkUnLIen/Unlien";
import PageNotFOund from "./pages/PageNotFound/PageNotFOund";
import UploadLien from "./pages/BulkLien/UploadLien";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        {/* <Route path="/app/dashboard" element={<Dashboard />} /> */}
        <Route path="/app/" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bulk-lien" element={<Lien />} />
          <Route path="bulk-lien/upload-lien" element={<UploadLien />} />
          <Route path="bulk-lien/approved-lien" element={<Approved />} />
          <Route path="bulk-lien/failed-lien" element={<Failed />} />
          <Route path="bulk-lien/declined-lien" element={<Declined />} />
          <Route path="bulk-lien/pending-lien" element={<Pending />} />
          <Route path="bulk-unlien" element={<Unlien />} />
        </Route>
        <Route path="*" element={<PageNotFOund />} />
      </Routes>
    </>
  );
};

export default App;
