// components/Header.tsx
"use client";
import Link from "next/link";
import { Navigation } from "./Navigation";

import { Bell, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "../BurgerMenu/BurgerMenu";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Фильмы", href: "/Movies" },
  { label: "Сериалы", href: "/Series" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="h-12 flex justify-between items-center py-8 text-white relative">
      <div className="flex items-center gap-4">
        <button onClick={toggleMenu} className="text-white md:hidden z-50">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {!isMenuOpen && (
          <div>
            <Link className="text-2xl" href={"/"}>
              NEXT<span className="text-red-600">FLIX</span>
            </Link>
          </div>
        )}
      </div>

      {/* Навигация для десктопов */}
      <div className="hidden md:flex gap-12 text-lg">
        {navItems.map((item) => (
          <Navigation key={item.href} label={item.label} href={item.href} />
        ))}
      </div>

      {/* Правая часть хедера (иконки и кнопка входа) */}
      <div className="flex items-center gap-8">
        <div>
          <Link
            className="hover:text-white/70 transition ease-in-out active:text-gray-500"
            href={"/Search"}
          >
            <Search />
          </Link>
        </div>
        <div className="flex hover:text-white/70 transition ease-in-out active:text-gray-500 animate-pulse">
          <button>
            <Bell />
          </button>
        </div>
        <div className="flex items-center rounded-xl bg-white/10 px-1 gap-3 text-lg">
          <button className="flex p-2 gap-2 text-base hover:text-white/70 transition ease-in-out active:text-gray-500">
            <User />
            Войти
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && <MobileMenu navItems={navItems} closeMenu={closeMenu} />}
    </header>
  );
};

export { Header };
