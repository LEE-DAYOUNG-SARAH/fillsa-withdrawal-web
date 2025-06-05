import React from "react";

function Header() {
    return (
        <header className="w-full h-[120px] flex items-center justify-center">
            <img src="/logo.svg" alt="Fillsa Logo" className="h-[60%] object-contain" />
        </header>
    );
}

export default Header;