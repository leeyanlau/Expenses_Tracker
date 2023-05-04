import React from "react";
import { MdSpaceDashboard, MdViewList, MdAccountBalanceWallet, MdAddCard } from "react-icons/md";

export const links = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    path: "/entry",
    name: "Entry",
    icon: <MdAddCard />,
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: <MdViewList />,
  },
  {
    path: "/budget",
    name: "Budget",
    icon: <MdAccountBalanceWallet />,
  },
];
