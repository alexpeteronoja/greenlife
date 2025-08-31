import { rectangle, fill1, fill2, fill3, fill4 } from '../assets';

function SecondHeroSection() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${rectangle})` }}
        className="bg-no-repeat bg-size-[100%_100%]"
      >
        <div className="p-5 bg-[#1E1E1E1A] text-white backdrop-blur-[10px] min-h-[900px] flex flex-wrap justify-center items-center  gap-x-10">
          {/* Card 1 */}

          <div
            style={{
              background: `linear-gradient(0deg, #00000099 0%, #00000099 100%), url(${fill1}) lightgray 50% / cover no-repeat`,
            }}
            className="w-[250px] h-[400px]  flex items-end py-7 px-3 border-5 border-white rounded-[10px] shadow-[0_4px_4px_0_#00000040]"
          >
            <div>
              <p className="font-bold">Quality Drug Manufacturing</p>
              <p className="text-xs">
                We produce safe, effective, and affordable medicines that meet
                international standards. Trusted by health professionals across
                Nigeria and beyond.
              </p>
            </div>
          </div>

          {/* Card 2 */}

          <div
            style={{
              background: `linear-gradient(0deg, #00000099 0%, #00000099 100%), url(${fill2}) lightgray 50% / cover no-repeat`,
            }}
            className="w-[250px] h-[400px] mt-5 md:mt-[60px] flex items-end py-7 px-3 border-5 border-white rounded-[10px] shadow-[0_4px_4px_0_#00000040]"
          >
            <div>
              <p className="font-bold">Nationwide Distribution</p>
              <p className="text-xs">
                From urban centers to rural clinics, our distribution network
                ensures medicines reach every corner of the country quickly and
                reliably.
              </p>
            </div>
          </div>

          {/* Card 3 */}

          <div
            style={{
              background: `linear-gradient(0deg, #00000099 0%, #00000099 100%), url(${fill3}) lightgray 50% / cover no-repeat`,
            }}
            className="w-[250px] h-[400px] md:mb-[55px] mt-5 md:mt-0 flex items-end py-7 px-3 border-5 border-white rounded-[10px] shadow-[0_4px_4px_0_#00000040]"
          >
            <div>
              <p className="font-bold">Research & Development</p>
              <p className="text-xs">
                We invest in local research to create better solutions for
                African health challenges, combining innovation with global best
                practices.
              </p>
            </div>
          </div>

          {/* Card 4 */}

          <div
            style={{
              background: `linear-gradient(0deg, #00000099 0%, #00000099 100%), url(${fill4}) lightgray 50% / cover no-repeat`,
            }}
            className="w-[250px] h-[400px] mt-5 md:mt-[11px] flex items-end py-7 px-3 border-5 border-white rounded-[10px] shadow-[0_4px_4px_0_#00000040]"
          >
            <div>
              <p className="font-bold">Community Health Impact</p>
              <p className="text-xs">
                Beyond medicine, we support health education, awareness
                campaigns, and free medical outreaches to uplift underserved
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondHeroSection;
