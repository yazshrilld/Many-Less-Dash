import { ReactComponent as DashboardIcon } from "../svg/Dashboard.svg";
import { ReactComponent as BulkLienIcon } from "../svg/Bulk-liens.svg";
import { ReactComponent as BulkUnLienIcon } from "../svg/Bulk-unliens.svg";
import { ReactComponent as ApprovedIcon } from "../svg/approved.svg";
import { ReactComponent as PendingIcon } from "../svg/pending.svg";
import { ReactComponent as FailedIcon } from "../svg/declined.svg";
import { ReactComponent as DeclinedIcon } from "../svg/failed.svg";

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

export const DUMMY_DATA = {
  referenceNumber: 1100924,
  customerName: "Musa Yazid",
  accountNumber: 3291233455,
  lienAmount: 800,
  debitAmount: 4,
  status: "Approved",
  code: 11,
};

export const ColumnHeaders = [
  { id: "referenceNumber", label: "Reference Number", minWidth: 90 },
  { id: "customerName", label: "Customer Name", minWidth: 100 },
  {
    id: "accountNumber",
    label: "Account Number",
    minWidth: 90,
    // format: (val) => (
    //   <p className="capitalize">{val.replace(/_/g, " ").toLowerCase()}</p>
    // ),
  },
  {
    id: "lienAmount",
    label: "Lien Amount",
    minWidth: 90,
    // format: (val) => (
    //   <p
    //     className={`${
    //       val === "UNASSIGNED"
    //         ? "text-[#FD1515]"
    //         : val === "NOT_APPROVED"
    //         ? "text-[#FD1515]"
    //         : val === "ASSIGNED"
    //         ? "text-[#cbf446]"
    //         : val === "IN_PROGRESS"
    //         ? "text-[#00A3FF]"
    //         : val === "CONFIRMED"
    //         ? "text-[#009E19]"
    //         : val === "APPROVED"
    //         ? "text-[#009E19]"
    //         : val === "REJECTED"
    //         ? "text-[#dd48c2]"
    //         : "text-[#FDB815]"
    //     } capitalize`}
    //   >
    //     {val.toLowerCase()}
    //   </p>
    // ),
  },
  {
    id: "debitAmount",
    label: "Debit Amount",
    minWidth: 90,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 50,
  },
  {
    id: "code",
    label: "Code",
    minWidth: 50,
  },
];

export const EXCEL_DUMMY_DATA = {
  REFERENCE: 1100924,
  NAME: "Musa Yazid",
  ACCOUNT: 3291233455,
  LIEN_AMOUNT: 800,
  DEBIT_AMOUNT: 4,
  CHARGES: 11,
}

export const ExcelColumns = [
  { id: "REFERENCE", label: "Reference Number", minWidth: 90 },
  { id: "NAME", label: "Customer Name", minWidth: 100 },
  { id: "ACCOUNT", label: "Account Number", minWidth: 90 },
  { id: "LIEN_AMOUNT", label: "Lien Amount", minWidth: 90, },
  { id: "DEBIT_AMOUNT", label: "Debit Amount", minWidth: 90, },
  { id: "CHARGES", label: "Charges", minWidth: 50, },
];
