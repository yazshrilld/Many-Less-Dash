import { ReactComponent as DashboardIcon } from "../svg/Dashboard.svg";
import { ReactComponent as BulkLienIcon } from "../svg/Bulk-liens.svg";
import { ReactComponent as BulkUnLienIcon } from "../svg/Bulk-unliens.svg";
import { ReactComponent as ApprovedIcon } from "../svg/approved.svg";
import { ReactComponent as PendingIcon } from "../svg/pending.svg";
import { ReactComponent as DeclinedIcon } from "../svg/declined.svg";
import { ReactComponent as FailedIcon } from "../svg/failed.svg";
export const navigation = (role) => [
  {
    name: "Dashboard",
    icon: () => <DashboardIcon />,
    href: "/app/dashboard",
    role: true,
  },
  {
    name: "Bulk Lien",
    icon: () => <BulkLienIcon />,
    href: "/app/bulk-lien",
    role: true,
    dropdown: [
      {
        label: "Upload Lien",
        href: "/app/bulk-lien/upload-lien",
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
    href: "/app/bulk-unlien",
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

export const statistics = [
  {
    name: "Approved Lien",
    count: 2,
    icon: <ApprovedIcon classname="bg-yellow-500" />,
  },
  {
    name: "Pending Lien",
    count: 2,
    icon: <PendingIcon />,
  },
  {
    name: "Declined Lien",
    count: 2,
    icon: <DeclinedIcon />,
  },
  {
    name: "Failed Lien",
    count: 2,
    icon: <FailedIcon />,
  },
];
