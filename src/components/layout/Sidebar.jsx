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
  ChevronDown,
} from "lucide-react";
import React, { useState } from "react";

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

function Sidebar({collapsed, onToggle, currentPage, onPageChange}) {
  const [expandedItems, setExpandedItems] = useState(new Set(['analytics']));

  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandedItems);

    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }

    setExpandedItems(newExpanded);
  };
  return (
    <div
      className={`${collapsed ? "w-20" : "w-64"} bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col transition-all duration-300`}
    >
      {/* {logo} */}
      <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600  shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>

          {/* {Conitional Rendering} */}
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Monarch
              </h1>
              <p className="text-sm text-slate-700 dark:text-slate-500">
                Admin's Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* {Navigation Display Dynamic Menus} */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isParentActive = currentPage === item.id || (item.submenu && item.submenu.some(sub => sub.id === currentPage));
          return (
            <div key={item.id}>
              <button
                className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 cursor-pointer
              ${isParentActive ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 "}`}
                onClick={() => {
                  if (item.submenu) {
                    toggleExpanded(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 shrink-0" />

                  {/* { Conditional rendering} */}
                  {!collapsed && (
                    <span className="font-medium text-sm ml-1">
                      {item.label}
                    </span>
                  )}
                  {!collapsed && item.badge && (
                    <span className="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full font-bold shadow-sm">
                      {item.badge}
                    </span>
                  )}
                  {!collapsed && item.count && (
                    <span className={`px-1.5 py-0.5 text-xs rounded-full font-medium ${isParentActive ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"}`}>
                      {item.count}
                    </span>
                  )}
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedItems.has(item.id) ? "rotate-180" : ""}`} />
                )}
              </button>

              {/* Sub-Menus */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-9 mt-1.5 pl-4 border-l border-slate-200 dark:border-slate-800/80 space-y-1">
                  {item.submenu.map((subItem) => {
                    const isSubActive = currentPage === subItem.id;
                    return (
                      <button
                        key={subItem.id}
                        onClick={() => onPageChange(subItem.id)}
                        className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-150 block font-medium cursor-pointer
                          ${isSubActive 
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20" 
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                          }`}
                      >
                        {subItem.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* {User Profile} */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer">
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Victor"
              alt="user"
              className="w-9 h-9 rounded-full ring-2 ring-blue-500 object-cover"
            />

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                Victor Mwendwa
              </p>
              <p className="text-xs text-slate-500 truncate font-medium">Administrator</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
