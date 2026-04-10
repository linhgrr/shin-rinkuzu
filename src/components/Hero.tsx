import { imgCharacterImg, imgGroup } from '../constants/images';

export default function Hero() {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto min-h-[90vh] xl:h-[1080px] flex flex-col xl:flex-row items-center xl:items-start justify-between mt-4 xl:mt-0">
      
      {/* Left Content */}
      <div className="flex-none w-full xl:w-auto flex flex-col z-10 px-4 xl:px-0">
        
        {/* Main Title - Responsive text sizing */}
        <div className="w-full xl:w-[1090px] mt-24 xl:mt-[254px]">
          <h1 
            className="font-vina-sans text-[70px] sm:text-[90px] md:text-[120px] xl:text-[164px] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-[#e9d8d6] from-[72%] to-[#e49d7f]"
            style={{ filter: 'drop-shadow(4px 4px 0px #542607)' }}
          >
            YOUR AI-POWERED LEARNING COMPANION
          </h1>
        </div>
        
        {/* Subtitle & CTA */}
        <div className="flex flex-col gap-[36px] w-full xl:w-[958px] mt-8 xl:mt-[72px]">
          <p className="font-unbounded font-light text-base sm:text-lg xl:text-[20px] leading-[1.5] text-white">
            Turn your PDFs into a personalized learning journey with AI. Curate your knowledge with surgical precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-[16px] items-start sm:items-center">
            <button className="border border-[#ff541b] flex h-[56px] items-center justify-center px-[32px] rounded-[100px] hover:bg-[#ff541b]/20 transition-colors w-full sm:w-auto">
              <span className="font-unbounded font-medium text-[18px] text-white whitespace-nowrap">
                {`Try  Demo`}
              </span>
            </button>
            <button className="bg-[#ff541b] flex gap-[10px] h-[56px] items-center justify-center px-[32px] rounded-[100px] hover:bg-[#fd761a] transition-colors w-full sm:w-auto shadow-lg shadow-[#ff541b]/20">
              <div className="size-[28px] relative flex items-center justify-center overflow-hidden">
                <img alt="Upload" className="absolute inset-[12.5%_20.83%_12.5%_20.84%] max-w-none w-[66.6%] h-[66.6%]" src={imgGroup} />
              </div>
              <span className="font-unbounded font-medium text-[18px] text-white whitespace-nowrap">
                Upload PDF
              </span>
            </button>
          </div>
        </div>
        
      </div>

      {/* Right Content - 3D Character */}
      <div className="flex-none w-full xl:w-[527px] flex items-center justify-center xl:absolute xl:-right-[20px] xl:top-[80px] mt-12 xl:mt-0 z-10 pointer-events-none">
        <div className="relative w-full max-w-[527px] xl:w-[527px] aspect-[1/2] xl:aspect-auto xl:h-[1084px] scale-x-[-1]">
          <img 
            alt="AI Character" 
            className="absolute inset-0 w-full h-full object-cover drop-shadow-2xl" 
            src={imgCharacterImg} 
          />
        </div>
      </div>
      
    </div>
  );
}