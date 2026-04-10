export default function Footer() {
  return (
    <footer className="relative w-full max-w-[1920px] mx-auto border-t border-white/10 z-10 bg-[#0a0f16]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 px-6 sm:px-12 md:px-24 py-12 md:py-[54px] min-h-[168px]">
        
        {/* Left Side - Brand & Copyright */}
        <div className="flex flex-col gap-2 md:gap-[8.5px] items-center md:items-start text-center md:text-left">
          <h3 className="font-unbounded font-medium text-lg md:text-[18px] text-white m-0 leading-[1.5]">
            The Cognitive Atelier
          </h3>
          <p className="font-unbounded font-light text-sm md:text-[16px] text-[#ededed]/60 m-0 leading-[1.5]">
            © 2024 The Cognitive Atelier. All rights reserved.
          </p>
        </div>
        
        {/* Right Side - Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-[32px]">
          <a href="#" className="font-unbounded font-light text-sm md:text-[16px] text-[#ededed]/80 hover:text-white transition-colors leading-[1.5]">
            Privacy Policy
          </a>
          <a href="#" className="font-unbounded font-light text-sm md:text-[16px] text-[#ededed]/80 hover:text-white transition-colors leading-[1.5]">
            Terms of Service
          </a>
          <a href="#" className="font-unbounded font-light text-sm md:text-[16px] text-[#ededed]/80 hover:text-white transition-colors leading-[1.5]">
            Contact Us
          </a>
          <div className="hidden sm:block w-[1px] h-4 bg-white/20 self-center" />
          <a href="#" className="font-unbounded font-light text-sm md:text-[16px] text-[#ededed]/80 hover:text-white transition-colors leading-[1.5]">
            Twitter
          </a>
          <a href="#" className="font-unbounded font-light text-sm md:text-[16px] text-[#ededed]/80 hover:text-white transition-colors leading-[1.5]">
            LinkedIn
          </a>
        </div>
        
      </div>
    </footer>
  );
}