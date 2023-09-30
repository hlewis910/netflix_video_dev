import React from "react";

interface NavbarItemProps {
    label: string;
    active?: boolean;
}
const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            {label}
            </div>
    )
}

export default NavbarItem;