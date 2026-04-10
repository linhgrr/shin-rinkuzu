export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-[#151419]/80 backdrop-blur-md border-b border-white/5 shadow-[0px_7px_8.8px_0px_rgba(0,0,0,0.15)] z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-24 h-[80px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex flex-col font-unbounded font-semibold justify-center leading-[0] text-[#fd761a] text-2xl md:text-[36px]">
          <p className="leading-[1.4]">Rinkuzu</p>
        </div>
        
        {/* Navigation - Desktop */}
        <nav className="hidden md:flex font-unbounded font-normal items-center justify-center gap-8 lg:gap-16 text-base lg:text-[20px] text-white">
          <a href="#" className="cursor-pointer hover:text-[#fd761a] transition-colors leading-[1.5]">Dashboard</a>
          <a href="#" className="cursor-pointer hover:text-[#fd761a] transition-colors leading-[1.5]">My Learning</a>
          <a href="#" className="cursor-pointer hover:text-[#fd761a] transition-colors leading-[1.5]">Upload PDF</a>
        </nav>
        
        {/* Actions - Desktop */}
        <div className="hidden md:flex gap-4 items-center justify-end">
          <button className="border border-[#ff541b] flex h-[44px] lg:h-[48px] items-center justify-center px-6 lg:px-[32px] rounded-[100px] hover:bg-[#ff541b]/10 transition-colors">
            <span className="font-unbounded font-medium text-sm lg:text-[18px] text-white whitespace-nowrap leading-[1.5]">
              Login
            </span>
          </button>
          <button className="bg-[#ff541b] flex h-[44px] lg:h-[48px] items-center justify-center px-6 lg:px-[32px] rounded-[100px] hover:bg-[#fd761a] transition-colors">
            <span className="font-unbounded font-medium text-sm lg:text-[18px] text-white whitespace-nowrap leading-[1.5]">
              Sign up
            </span>
          </button>
        </div>
        
        {/* Mobile menu button (placeholder) */}
        <div className="md:hidden flex items-center">
          <button className="text-white hover:text-[#fd761a]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
      </div>
    </header>
  );
}
