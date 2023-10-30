import { Outlet, useNavigate, useLocation } from "react-router-dom";
import AccountMenu from "../AccountMenu/AccountMenu";
import SideNav from "../SideNav/SideNav";

const AppLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  
  return (
    <>
      <div className="overflow-hidden layout w-full h-screen grid">
        <SideNav />
        <div className="content overflow-y-auto h-screen">
          <AccountMenu />
          <div className="m-6 rounded-lg">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
