import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  onClick?: () => void;
}

const Navigation: React.FC<NavLink> = ({ label, href, onClick }) => {
  return (
    <Link href={href} onClick={onClick}>
      <div className="hover:text-white/70 transition ease-in-out active:text-gray-500">
        {label}
      </div>
    </Link>
  );
};

export { Navigation };
