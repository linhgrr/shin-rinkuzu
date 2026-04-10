import Header from '../components/Header';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import StruggleSection from '../components/StruggleSection';
import HowItWorks from '../components/HowItWorks';
import CoreIntelligence from '../components/CoreIntelligence';
import Testimonials from '../components/Testimonials';
import BottomCta from '../components/BottomCta';
import Footer from '../components/Footer';
import TextureBackground from '../components/TextureBackground';
import MarqueeComponent from "react-fast-marquee";

const Marquee = (MarqueeComponent as any).default || MarqueeComponent;

export default function LandingPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#06090e] min-h-screen text-white font-unbounded">
      <TextureBackground />
      <Header />

      <main className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-[96px]">

        {/* Hero */}
        <section className="relative w-full flex flex-col">
          <Hero />
        </section>

        {/* Metrics — overlaps hero */}
        <section className="relative z-20 w-full py-12 md:py-24 xl:-mt-[206px]">
          <Metrics />
        </section>

        {/* Struggle — content at Figma 1412 */}
        <section className="relative w-full pt-[80px] md:pt-[154px] pb-[40px] md:pb-[44px] z-20">
          <StruggleSection />
        </section>

        {/* Marquee — Figma 2288 */}
        <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#ff541b] mt-[68px] md:mt-[215px] mb-0">
          <Marquee speed={50} autoFill={true}>
            <div className="flex whitespace-nowrap h-[80px] items-center text-[20px] font-unbounded font-normal text-white gap-[72px] mr-[72px]">
              <div className="flex flex-col justify-center relative shrink-0"><p>AI POWERED</p></div>
              <div className="flex flex-col justify-center relative shrink-0"><p>STUDY FLOW</p></div>
              <div className="flex flex-col justify-center relative shrink-0"><p>LEARNING PATH</p></div>
              <div className="flex flex-col justify-center relative shrink-0"><p>DIGITAL BRAIN</p></div>
            </div>
          </Marquee>
        </div>

        {/* How It Works — content at Figma 2600 */}
        <section className="relative w-full pt-[120px] md:pt-[232px] pb-0 z-20">
          <HowItWorks />
        </section>

        {/* Core Intelligence — Figma 3855 */}
        <section className="relative w-full pt-[60px] md:pt-[167px] pb-0 z-20">
          <CoreIntelligence />
        </section>

        {/* Testimonials — Figma 4740 */}
        <section className="relative w-full pt-[40px] md:pt-[132px] pb-0 z-20">
          <Testimonials />
        </section>

        {/* Bottom CTA — Figma 5662, full viewport width */}
        <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-[40px] md:mt-[92px] z-20">
          <BottomCta />
        </div>

      </main>

      <Footer />
    </div>
  );
}
