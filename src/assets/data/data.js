import { ReactComponent as DashboardIcon } from "../svg/Dashboard.svg";
import { ReactComponent as BulkLienIcon } from "../svg/Bulk-liens.svg";
import { ReactComponent as BulkUnLienIcon } from "../svg/Bulk-unliens.svg";

export const navigation = (role) => [
  {
    name: "Dashboard",
    icon: () => <DashboardIcon />,
    href: "",
    role: true,
  },
  {
    name: "Bulk Lien",
    icon: () => <BulkLienIcon />,
    href: "",
    role: true,
    dropdown: [
      {
        label: "Upload Lien",
        href: "",
      },
      {
        label: "ApprovedLien",
        href: "",
      },
      {
        label: "Pending Lien",
        href: "",
      },
      {
        label: "Declined Lien",
        href: "",
      },
      {
        label: "Failed Lien",
        href: "",
      },
    ],
  },
  {
    name: "Bulk UnLien",
    icon: () => <BulkUnLienIcon />,
    href: "",
    role: true,
    dropdown: [
      {
        label: "Upload UnLien",
        href: "",
      },
      {
        label: "Approved UnLien",
        href: "",
      },
      {
        label: "Pending UnLien",
        href: "",
      },
      {
        label: "Declined UnLien",
        href: "",
      },
      {
        label: "Failed UnLien",
        href: "",
      },
    ],
  },
];
