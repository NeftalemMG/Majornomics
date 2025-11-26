interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="mt-32 border-t border-slate-100">
      <div className="container mx-auto px-8 py-12">
        <div className="flex items-center justify-center">
          <div className="relative inline-block">
            <span className="text-2xl tracking-tight text-slate-300" style={{ fontWeight: 700 }}>
              Majornomics
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}