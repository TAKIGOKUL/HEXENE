
import React from 'react';
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-4 mt-4 mb-2">
        <div className="bg-green-900 shadow-lg rounded-lg border border-green-800">
          <div className="flex h-14 items-center px-4">
            <SidebarTrigger className="mr-3 text-white hover:bg-green-800 hover:text-white" />
            
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-white tracking-wide">
                HEXENE
              </h1>
            </div>
            
            <div className="ml-auto flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-green-100 text-sm">
                  Welcome back, User
                </span>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
