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
        href: "/app/bulk-lien/approved-lien",
      },
      {
        label: "Pending Lien",
        href: "/app/bulk-lien/pending-lien",
      },
      {
        label: "Declined Lien",
        href: "/app/bulk-lien/declined-lien",
      },
      {
        label: "Failed Lien",
        href: "/app/bulk-lien/failed-lien",
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
        href: "/app/bulk-unlien/upload-unlien",
      },
      {
        label: "Approved UnLien",
        href: "/app/bulk-unlien/approved-unlien",
      },
      {
        label: "Pending UnLien",
        href: "/app/bulk-unlien/pending-unlien",
      },
      {
        label: "Declined UnLien",
        href: "/app/bulk-unlien/declined-unlien",
      },
      {
        label: "Failed UnLien",
        href: "/app/bulk-unlien/failed-unlien",
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

export const DUMMY_DATA_APPROVED = {
  reference: 1100924,
  name: "Musa Yazid",
  account: 3291233455,
  lien_amount: 800,
  debit_amount: 4,
  status: "APPROVED",
  code: 11,
};
export const DUMMY_DATA_APPROVED_UN = {
  reference: 1100924,
  name: "Musa Yazid",
  account: 3291233455,
  lien_amount: 800,
  debit_amount: 4,
  status: "APPROVED",
  code: 11,
};

export const DUMMY_DATA_DECLINED = {
  reference: 1100924,
  name: "Musa Yazid",
  account: 3291233455,
  lien_amount: 800,
  debit_amount: 4,
  status: "DECLINED",
  code: 11,
};
export const DUMMY_DATA_DECLINED_UN = {
  reference: 1100924,
  name: "Musa Yazid",
  account: 3291233455,
  lien_amount: 800,
  debit_amount: 4,
  status: "DECLINED",
  code: 11,
};

export const DUMMY_DATA_PENDING = {
  reference: 1100924,
  name: "Musa Yazid",
  account: 3291233455,
  lien_amount: 800,
  debit_amount: 4,
  status: "PENDING",
  code: 11,
};
export const DUMMY_DATA_PENDING_UN = {
  reference: 1100924,
  name: "Musa Yazid",
  account: 3291233455,
  lien_amount: 800,
  debit_amount: 4,
  status: "PENDING",
  code: 11,
};

export const DUMMY_DATA_FAILED = {
  reference: 1100924,
  name: "Musa Yazid",
  account: 3291233455,
  lien_amount: 800,
  debit_amount: 4,
  status: "FAILED",
  code: 11,
};
export const DUMMY_DATA_FAILED_UN = {
  reference: 1100924,
  name: "Musa Yazid",
  account: 3291233455,
  lien_amount: 800,
  debit_amount: 4,
  status: "FAILED",
  code: 11,
};

export const ColumnHeaders = [
  { id: "reference", label: "Reference Number", minWidth: 90 },
  { id: "name", label: "Customer Name", minWidth: 100 },
  {
    id: "account",
    label: "Account Number",
    minWidth: 90,
    // format: (val) => (
    //   <p className="capitalize">{val.replace(/_/g, " ").toLowerCase()}</p>
    // ),
  },
  {
    id: "lien_amount",
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
    id: "debit_amount",
    label: "Debit Amount",
    minWidth: 50,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 90,
    format: (val) => (
      <p
        className={`${
          val.toUpperCase() === "APPROVED"
            ? "text-[#009E19] bg-green-200 px-2 py-[5px] rounded-[60px] text-center"
            : val === "DECLINED"
            ? "text-pink-500 bg-pink-200 px-2 py-[5px] rounded-[60px] text-center"
            : val === "PENDING"
            ? "text-orange-500 bg-orange-200 px-2 py-[5px] rounded-[60px] text-center"
            : val === "FAILED"
            ? "text-red-500 bg-red-200 px-2 py-[5px] rounded-[60px] text-center"
            : "text-[#000000]"
        } capitalize`}
      >
        {val.toLowerCase()}
      </p>
    ),
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
};

export const ExcelColumns = [
  { id: "REFERENCE", label: "Reference Number", minWidth: 90 },
  { id: "NAME", label: "Customer Name", minWidth: 100 },
  { id: "ACCOUNT", label: "Account Number", minWidth: 90 },
  { id: "LIEN_AMOUNT", label: "Lien Amount", minWidth: 90 },
  { id: "DEBIT_AMOUNT", label: "Debit Amount", minWidth: 90 },
  {
    id: "CHARGES",
    label: "Charges",
    minWidth: 50,
    format: (val) => <p>{val < 300 ? `text-red-300` : `text-green-300`}</p>,
  },
];

export const ExcelColsHeaders = [
  { id: "REFERENCE", label: "Reference Number", minWidth: 90 },
  { id: "NAME", label: "Customer Name", minWidth: 100 },
  { id: "ACCOUNT", label: "Account Number", minWidth: 90 },
  { id: "LIEN_AMOUNT", label: "Lien Amount", minWidth: 90 },
  { id: "DEBIT_AMOUNT", label: "Debit Amount", minWidth: 90 },
  {
    id: "CHARGES",
    label: "Charges",
    minWidth: 50,
    format: (val) => <p>{val < 300 ? `text-red-300` : `text-green-300`}</p>,
  },
];
