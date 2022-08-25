import React from "react";

function Navbar() {
  return (
    <nav className="nav w-screen shadow ">
      <div className="max-w-7xl mx-auto px-2 sm:px-1 lg:px-1">
        <div className="relative flex items-center justify-between h-3"></div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block h-8 w-auto"
              src="https://softr-prod.imgix.net/applications/c894b09d-a577-43c3-ba03-472ba216b6b2/assets/9f0fb6a5-8ca4-4fa2-9678-50b4195afa26.png"
              alt="Reunion Logo"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
