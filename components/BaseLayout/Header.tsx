// components/Header.tsx
"use client";
import Link from "next/link";
import { Bell, Search, User, Menu, X } from "lucide-react";
import { Navigation } from "./Navigation";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useMenu } from "@/hooks/useMenu";

const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <header className="h-12 flex justify-between items-center py-8 text-white relative">
      <div className="flex items-center gap-4 md:gap-12">
        {/* Бургер-меню для мобильных устройств */}
        <button onClick={toggleMenu} className="text-white md:hidden z-50">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Логотип и лейблы */}
        <div className="flex items-center gap-6">
          <Link className="text-2xl" href={"/"}>
            NEXT<span className="text-red-600">FLIX</span>
          </Link>
          <div className="hidden md:flex gap-12 text-lg">
            <Navigation label="Главная" href="/" />
            <Navigation label="Фильмы" href="/Movies" />
            <Navigation label="Сериалы" href="/Series" />
          </div>
        </div>
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
      {isMenuOpen && <BurgerMenu closeMenu={closeMenu} />}
    </header>
  );
};

export { Header };
