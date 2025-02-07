import { Navigation } from "../BaseLayout/Navigation";

interface MobileMenuProps {
  navItems: { label: string; href: string }[];
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, closeMenu }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-64 bg-black/95 z-50 flex flex-col items-center justify-center md:hidden">
      <div className="flex flex-col items-center gap-4 py-4">
        {navItems.map((item) => (
          <Navigation
            key={item.href}
            label={item.label}
            href={item.href}
            onClick={closeMenu}
          />
        ))}
      </div>
    </div>
  );
};

export { MobileMenu };
