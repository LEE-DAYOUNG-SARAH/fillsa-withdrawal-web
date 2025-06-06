import React from "react";

function Header() {
    return (
        <header className="w-full h-[120px] flex items-center justify-center">
          <a href={import.meta.env.VITE_HOME_URL}>
            <img src="/logo.svg" alt="Fillsa Logo" className="h-[57.78px] w-[130px] object-contain" />
          </a>
        </header>
    );
}

export default Header;