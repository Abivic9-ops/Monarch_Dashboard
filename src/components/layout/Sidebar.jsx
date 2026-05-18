import {
  BarChart3,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  ShoppingBag,
  Zap,
  Users,
  CreditCard,
  Calendar,
  Settings,
} from "lucide-react";
import React from "react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashoard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "Insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-Commerce",
    count: "2.4k",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "Inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

function Sidebar() {
  return (
    <div className="w-52  transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10 p-2">
      {/* {logo} */}
      <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600  shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>

          {/* {Conitional Rendering} */}
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              Monarch
            </h1>
            <p className="text-sm text-slate-700 dark:text-slate-500">
              Admin's Panel
            </p>
          </div>
        </div>
      </div>

      {/* {Navigation Display Dynamic Menus} */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          
            <div key={item.id}>
              <button
                className={`w-foull flex items-center justify-between p-1.5 rounded-xl transition-all duration-200`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="{``w-1 h-1}" />

                 {/* { Conditional rendering} */}
                 <>
                 <span className="font-medium ml-2">{item.label}</span>
                 <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">{item.badge}</span>
                 </>
                </div>
              </button>
            </div>
          
        })}
      </nav>

      {/* {User Profile} */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src=""
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />

          <div className="flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Victor Mwendwa
              </p>
              <p className="text-xs text-slate-500 truncate">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
