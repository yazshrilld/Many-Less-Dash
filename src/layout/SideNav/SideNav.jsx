import { Link } from "react-router-dom";
import { navigation } from "../../assets/data/data";
import SideNavLink from "./SideNavLink";
import Logo from "../../assets/img/logo2.png";

// const myRole = false

const SideNav = () => {
  return (
    <div className="w-[371px] fixed top-0 -left-[371px] h-screen z-[30] border-r xl:w-full xl:relative xl:left-0 xl:z-[1]">
      <div>
        <Link to="/">
          <img
            className="mx-auto w-[120px] h-[50px] mt-16"
            src={Logo}
            alt="Providus Logo"
          />
        </Link>
      </div>

      <div className="mt-12">
        {navigation()?.map(({ name, icon, href, role, dropdown }, idx) => {
          return (
            role && (
              <SideNavLink
                key={idx}
                icon={icon()}
                title={name}
                dropdown={dropdown}
                href={href}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
