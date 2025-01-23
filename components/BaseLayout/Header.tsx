import { Navigation } from "./Navigation"


const navItems = [
{label: 'Главная', href: '/'},
{label: 'Фильмы', href: '/Movies'},
{label: 'Сериалы', href: '/Series'},
{label: 'Аниме', href: '/Animes'},


]

const Header = () => {
  return (
    <header className="h-12 flex justify-between items-center py-8 font-">
      <div >
        <input className="rounded-2xl w-72 h-10 px-2" type="search" placeholder="Search..." />
      </div>
      <div className="flex gap-12 text-lg">
      {navItems.map((item) => (
          <Navigation key={item.href} label={item.label} href={item.href}/>
        ))}
      </div>
      <div className="flex items-center rounded-2xl bg-transparent/10 px-1 gap-3 text-lg">
        <img className="h-10 w-10" src="/avatar.svg" alt="avatar" />
        <div className="flex flex-col px-1 py-0.5">
        <h2>Guest</h2>
        <p className="font-extralight text-base text-gray-700">guest@gmail.com</p>
        </div>
        
      </div>
    </header>
  );
};

export { Header };
