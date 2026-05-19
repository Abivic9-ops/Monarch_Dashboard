import React from "react";
import {
  Menu,
  Search,
  Filter,
  Plus,
  Sun,
  Bell,
  Settings,
  ChevronDown,
} from "lucide-react";

function Header() {
  return (
    <div className="h-24 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-12 py-1.5 ">
      <div className="flex items-center justify-between">
        {/* left section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:block">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white">
              Dashboard
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Welcome back, Victor! Here's what's happening today
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Search Anything..."
              className="w-auto pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-3">
          {/* Quick action */}
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg ttransition-all">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium ">New</span>
          </button>

          {/* Toggle Dark and light mode   */}
          <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
            <Sun className="w-5 h-5" />
          </button>

          {/* Notification */}
          <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 w-5 h-5 bg-red-500 text-white flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {/* Settings */}
          <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <Settings className="w-5 h-5" />
          </button>

          {/* User profile */}
          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700 ">
            <img
              src="https://i.pravatar.cc/40"
              alt="User profile"
              className="w-8 h-8 rounded-full ring-blue-500 ring-2"
            />

            <div className="hidden md:block">
              <p className="text-slate-800 dark:text-white font-medium">
                Victor Mwendwa
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Admin
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
