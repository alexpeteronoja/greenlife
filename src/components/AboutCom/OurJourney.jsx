import {
  imageCommunity,
  imageFoundation,
  imageInfrastructure,
  imageTechnology,
} from '../../assets';

function OurJourney({ sectionRef }) {
  return (
    <>
      <div className="px-8 pb-24 font-inter">
        <div className="flex justify-center mt-21 mb-4">
          <p className="text-[#008236] bg-[#DCFCE7] py-3 px-5 text-sm rounded-full">
            Our Story
          </p>
        </div>

        <p
          ref={sectionRef}
          className="mb-15 md:mb-25 text-3xl md:text-4xl font-bold text-center"
        >
          The Journey So Far
        </p>
        {/* <p className="text-center max-w-[756px] mx-auto">
          Nearly three decades of pharmaceutical leadership in West Africa
          reflects our history and unwavering commitment to innovation, quality,
          and community health.
        </p> */}

        <div className="mt-9 font-inter grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-21 gap-x-12">
          <div className="order-1">
            <img
              src={imageFoundation}
              alt=""
              className="rounded-3xl object-cover"
            />
          </div>

          <div className="order-2 md:self-center">
            <div className="text-white inline-block py-3 px-6 rounded-full font-bold text-2xl mb-6 bg-[linear-gradient(90deg,_#2B7FFF_0%,_#155DFC_100%)]">
              1995
            </div>

            <p className="font-bold text-3xl">Foundation & Early Growth</p>
            <p className="text-[#45556C] pt-4">
              Greenlife Pharmaceuticals was established, evolving from humble
              beginnings on Loloja Street to become a trusted pharmaceutical
              company in Nigeria.
            </p>

            {/* <div className="flex gap-2 justify-center md:justify-start mt-3">
                <div className="px-2 py-1 text-xs font-semibold text-[#1D4ED8] bg-[#DBEAFE] rounded-full">
                  Nigerian Incorporation
                </div>
                <div className="px-2 py-1 text-xs font-semibold text-[#15803D] bg-[#DCFCE7] rounded-full">
                  Initial Product Line
                </div>
              </div> */}
          </div>

          {/* Second Section */}

          <div className="order-3 md:order-4">
            <img
              src={imageTechnology}
              alt=""
              className="rounded-3xl object-cover"
            />
          </div>

          <div className="order-4 md:order-3 md:self-center">
            <div className="text-white inline-block py-3 px-6 rounded-full font-bold text-2xl mb-6 bg-[linear-gradient(90deg,_#AD46FF_0%,_#9810FA_100%)]">
              2011
            </div>

            <p className="font-bold text-3xl text-[#0F172B]">
              Technology Innovation Leadership
            </p>
            <p className="text-[#45556C] pt-4">
              Pioneered the Mobile Authentication Service (MAS) in collaboration
              with NAFDAC, becoming the first pharmaceutical company in West
              Africa to adopt this anti-counterfeiting technology.
            </p>
          </div>

          {/* Thrid Section */}
          <div className="order-5">
            <img
              src={imageInfrastructure}
              alt=""
              className="rounded-3xl object-cover"
            />
          </div>

          <div className="order-6 md:self-center">
            <div className="text-white inline-block py-3 px-6 rounded-full font-bold text-2xl mb-6 bg-[linear-gradient(90deg,_#00C950_0%,_#00A63E_100%)]">
              2017
            </div>

            <p className="font-bold text-3xl text-[#0F172B]">
              Infrastructure Expansion
            </p>

            <p className="text-[#45556C] pt-4">
              Commissioned a state-of-the-art headquarters in Ilupeju, Lagos,
              marking a significant milestone in our growth and operational
              capabilities.
            </p>
          </div>

          {/* Fourth Section */}
          <div className="order-7 md:order-8">
            <img
              src={imageCommunity}
              alt=""
              className="rounded-3xl object-cover"
            />
          </div>

          <div className="order-8 md:order-7 md:self-center">
            <div className="text-white inline-block py-3 px-6 rounded-full font-bold text-2xl mb-6 bg-[linear-gradient(90deg,_#FF6900_0%,_#F54900_100%)]">
              2023
            </div>

            <p className="font-bold text-3xl text-[#0F172B]">
              Community Health Initiative
            </p>

            <p className="text-[#45556C] pt-4">
              Supporting community health programmes focused on health
              education, accessibility, and improving healthcare outcomes in
              underserved regions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurJourney;
