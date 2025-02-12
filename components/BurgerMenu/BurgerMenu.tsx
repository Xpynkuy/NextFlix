import { Navigation } from "../BaseLayout/Navigation";

interface BurgerMenuProps {
  closeMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ closeMenu }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-40 flex flex-col items-center justify-center">
      <Navigation label="Главная" href="/" onClick={closeMenu} />
      <Navigation label="Фильмы" href="/Movies" onClick={closeMenu} />
      <Navigation label="Сериалы" href="/Series" onClick={closeMenu} />
    </div>
  );
};

export { BurgerMenu };
