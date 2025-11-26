import { MajornomicsLogoIcon } from './icons/SketchyIcons';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'search', label: 'Search' },
    { id: 'compare', label: 'Compare' },
    { id: 'recommendations', label: 'Recommendations' },
  ];

  return (
    <header className="sticky top-0 z-50 mb-12 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group transition-all duration-300"
          >
            <div className="w-11 h-11 bg-blue-500 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300 group-hover:scale-105">
              <MajornomicsLogoIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-black tracking-tight" style={{ fontWeight: 600 }}>Majornomics</span>
          </button>
          
          <nav className="flex gap-1 bg-slate-50 rounded-full p-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-black hover:bg-white'
                }`}
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}