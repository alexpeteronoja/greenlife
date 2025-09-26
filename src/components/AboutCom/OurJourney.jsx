import { dotIcon } from '../../assets';

function OurJourney() {
  return (
    <>
      <div className="px-8 pb-24 font-inter">
        <p className="pt-21 pb-4 text-3xl md:text-4xl font-bold text-center">
          Our Journey
        </p>
        <p className="text-center max-w-[756px] mx-auto">
          Nearly three decades of pharmaceutical leadership in West Africa
          reflects our history and unwavering commitment to innovation, quality,
          and community health.
        </p>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-12 mt-9 text-center md:text-start">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span>
                <img src={dotIcon} alt="" />
              </span>
              <span className="font-bold text-2xl">1995</span>
            </div>

            <p className="font-bold text-lg">Foundation & Early Growth</p>
            <p className="text-sm pt-1">
              Greenlife Pharmaceuticals was established, evolving from humble
              beginnings on Loloja Street to become a trusted pharmaceutical
              company in Nigeria.
            </p>

            <div className="flex gap-2 justify-center md:justify-start mt-3">
              <div className="px-2 py-1 text-xs font-semibold text-[#1D4ED8] bg-[#DBEAFE] rounded-full">
                Nigerian Incorporation
              </div>
              <div className="px-2 py-1 text-xs font-semibold text-[#15803D] bg-[#DCFCE7] rounded-full">
                Initial Product Line
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span>
                <img src={dotIcon} alt="" />
              </span>
              <span className="font-bold text-2xl">2011</span>
            </div>

            <p className="font-bold text-lg">
              Technology Innovation Leadership
            </p>
            <p className="text-sm pt-1">
              Pioneered the Mobile Authentication Service (MAS) in collaboration
              with NAFDAC, becoming the first pharmaceutical company in West
              Africa to adopt this anti-counterfeiting technology.
            </p>

            <div className="flex gap-2 justify-center md:justify-start mt-3">
              <div className="px-2 py-1 text-xs font-semibold text-[#7E22CE] bg-[#F3E8FF] rounded-full">
                NAFDAC partnership
              </div>
              <div className="px-2 py-1 text-xs font-semibold text-[#A16207] bg-[#FEF9C3] rounded-full">
                Anti-counterfeiting tech
              </div>
            </div>
          </div>

          {/* Thrid Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span>
                <img src={dotIcon} alt="" />
              </span>
              <span className="font-bold text-2xl">2017</span>
            </div>

            <p className="font-bold text-lg">Infrastructure Expansion</p>
            <p className="text-sm pt-1">
              Commissioned a state-of-the-art headquarters in Ilupeju, Lagos,
              marking a significant milestone in our growth and operational
              capabilities.
            </p>

            <div className="flex gap-2 justify-center md:justify-start mt-3">
              <div className="px-2 py-1 text-xs font-semibold text-[#1D4ED8] bg-[#DBEAFE] rounded-full">
                Growth
              </div>
              {/* <div className="px-2 py-1 text-xs font-semibold text-[#A16207] bg-[#FEF9C3] rounded-full">
                Anti-counterfeiting tech
              </div> */}
            </div>
          </div>

          {/* Fourth Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span>
                <img src={dotIcon} alt="" />
              </span>
              <span className="font-bold text-2xl">2023</span>
            </div>

            <p className="font-bold text-lg">Community Health Initiative</p>
            <p className="text-sm pt-1">
              Supporting community health programmes focused on health
              education, accessibility, and improving healthcare outcomes in
              underserved regions.
            </p>

            <div className="flex gap-2 justify-center md:justify-start mt-3">
              <div className="px-2 py-1 text-xs font-semibold text-[#B91C1C] bg-[#FEE2E2] rounded-full">
                Philanthropic engagement
              </div>
              <div className="px-2 py-1 text-xs font-semibold text-[#4338CA] bg-[#E0E7FF] rounded-full">
                Social Responsibility
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurJourney;
