interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Emblem_of_the_Russian_National_Guard.svg/120px-Emblem_of_the_Russian_National_Guard.svg.png"
            alt="Логотип Росгвардии"
            className="h-12 w-12 object-contain"
          />
          <span className="text-white text-sm uppercase tracking-wide font-semibold">Росгвардия</span>
        </div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О нас
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}