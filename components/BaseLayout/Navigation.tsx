import Link from "next/link";
import React from "react";


interface NavLink {
    label: string;
    href: string;
}

const Navigation: React.FC<NavLink> = ({label, href}) => {
    return (
        <Link href={href}>
            <div className="hover:text-white/70 transition ease-in-out active:text-gray-500">{label}</div>
        </Link>
    )
}

export {Navigation}
