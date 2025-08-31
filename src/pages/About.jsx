import {
  aboutBackgroundImg,
  certifiation1,
  certifiation10,
  certifiation2,
  certifiation3,
  certifiation4,
  certifiation5,
  certifiation6,
  certifiation7,
  certifiation8,
  certifiation9,
  countriesFrame,
  heartHandshakeIcon,
  image5,
  image6,
  image7,
  lightbulbIcon,
  workFlowIcon,
} from '../assets';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ExperienceData from '../data/ExperienceData';
import LeadershipData from '../data/LeadershipData';

function About() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${aboutBackgroundImg})` }}
        className="bg-cover bg-center bg-no-repeat  relative"
      >
        <div className="h-[550px] md:h-[757px] bg-[linear-gradient(0deg,#00000080_0%,#00000080_100%),linear-gradient(180deg,#1E1E1E00_45.67%,#FFFFFF3D_61.06%,#FFFFFF99_77.88%)]">
          <Navbar navStyle="bg-[#FFFFFF1A] text-white" />

          <div className="text-center text-white mt-[100px] md:mt-[210px]">
            <p className="text-3xl md:text-5xl font-black">
              Empowering Health & Enriching Lives Since 1995
            </p>
            <p className="text-xl md:text-2xl my-8">
              A trusted pharmaceutical leader in Nigeria and West Africa,
              dedicated to delivering quality healthcare solutions.
            </p>

            <div>
              <button className="px-8 py-2 rounded-full text-lg bg-[#83D167]">
                Discover Our Story
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="md:absolute md:top-[-32px] md:left-1/2 md:-translate-x-1/2 mt-5 md:mt-0 w-full px-4">
          <div className="flex flex-col md:flex-row gap-x-7.5 gap-y-4 justify-center items-center px-6 md:px-11 md:max-w-[927px] mx-auto rounded-[20px] border border-white bg-[#00000066] bg-blend-soft-light shadow-[0_4px_4px_0_#00000040] backdrop-blur-[12.5px]">
            <div>
              <img src={countriesFrame} alt="" />
            </div>
            <div className="font-medium text-white text-center md:text-left">
              Trusted by over 5 million people across Nigeria & West Africa
            </div>
          </div>
        </div>

        <div>
          <p className="pt-23.5 text-4xl text-center text-[#242524] font-bold">
            Greenlife At A Glance
          </p>

          <div className="mt-12.5 mb-24 mx-8 grid justify-center grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {ExperienceData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center border border-[#EBEBEA] rounded-lg min-h-[238px] pt-6 px-6"
              >
                <div className="bg-[#12BA091A] p-4 rounded-full">
                  <img
                    src={item.Image}
                    alt=""
                    className="w-8 h-8 object-cover"
                  />
                </div>
                <div className="font-bold text-center text-2xl mt-3.5 mb-3">
                  {item.title}
                </div>
                <div className="text-[#8C8D8B] text-center text-sm">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}

      <div className="bg-[#F7F7F74D] px-8 pb-24">
        <p className="pt-21 text-3xl md:text-4xl font-bold text-center">
          Our Vision, Mission & Purpose
        </p>

        <div className="grid md:grid-cols-3 gap-7.5 mt-15">
          <div className="p-6 bg-white border border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12]">
            <div>
              <img src={lightbulbIcon} alt="" />
            </div>

            <div>
              <p className="font-bold text-2xl mt-4">Vision</p>
              <p className="mt-4 mb-3 text-[#8C8D8B]">
                To be the vanguard of healthy living by providing innovative,
                high-quality, and accessible pharmaceutical solutions across
                Africa.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12]">
            <div>
              <img src={workFlowIcon} alt="" />
            </div>

            <div>
              <p className="font-bold text-2xl mt-4">Mission</p>
              <p className="mt-4 mb-3 text-[#8C8D8B]">
                To consistently deliver affordable, effective, and trusted
                pharmaceutical brands that promote health and improve the
                quality of life for all.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12]">
            <div>
              <img src={heartHandshakeIcon} alt="" />
            </div>

            <div>
              <p className="font-bold text-2xl mt-4">Purpose</p>
              <p className="mt-4 mb-3 text-[#8C8D8B]">
                To contribute to happier, healthier lives by making effective
                healthcare solutions readily available and fostering community
                well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestore Section */}

      <div className="my-13 mx-8">
        <p className="text-3xl md:text-4xl font-bold text-center">
          Our Journey: Milestones
        </p>

        <div className="mt-22 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="py-3.5 px-2.5 bg-white border border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12]">
            <div>
              <img src={image5} alt="" className="w-full max-w-[305px]" />
            </div>
            <div>
              <p className="text-[#12BA09] font-medium text-sm mt-6">1995</p>
              <p className="my-2 text-[#242524] font-bold text-lg md:text-xl">
                Company Founded
              </p>
              <p className="text-[#8C8D8B]">
                From humble beginnings as Leton Store, evolving into Caleb
                Pharma, and finally establishing Greenlife Pharmaceuticals,
                marking our origin in healthcare.
              </p>
            </div>
          </div>

          <div className="py-3.5 px-2.5 bg-white border border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12]">
            <div>
              <img src={image6} alt="" className="w-full max-w-[305px]" />
            </div>
            <div>
              <p className="text-[#12BA09] font-medium text-sm mt-6">2011</p>
              <p className="my-2 text-[#242524] font-bold text-lg md:text-xl">
                Anti-Counterfeiting Tech Launch
              </p>
              <p className="text-[#8C8D8B]">
                Pioneering the fight against fake drugs with the introduction of
                advanced anti-counterfeiting technology in collaboration with
                NAFDAC.
              </p>
            </div>
          </div>

          <div className="py-3.5 px-2.5 bg-white border border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12]">
            <div>
              <img src={image7} alt="" className="w-full max-w-[305px]" />
            </div>
            <div>
              <p className="text-[#12BA09] font-medium text-sm mt-6">2017</p>
              <p className="my-2 text-[#242524] font-bold text-lg md:text-xl">
                New Head Office Inauguration
              </p>
              <p className="text-[#8C8D8B]">
                Marking a significant growth phase, our new state-of-the-art
                head office in Ilupeju was officially inaugurated.
              </p>
            </div>
          </div>

          <div className="py-3.5 px-2.5 bg-white border border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12]">
            <div>
              <img src={image5} alt="" className="w-full max-w-[305px]" />
            </div>
            <div>
              <p className="text-[#12BA09] font-medium text-sm mt-6">2023</p>
              <p className="my-2 text-[#242524] font-bold text-lg md:text-xl">
                Community Health Initiative Launched
              </p>
              <p className="text-[#8C8D8B]">
                Initiated a comprehensive community health program, focusing on
                awareness and accessible healthcare in underserved regions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}

      <div className="bg-[#F7F7F74D] pt-13 pb-24 px-8">
        <p className="text-2xl md:text-4xl font-bold text-center">
          Our Esteemed Leadership
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 mt-20">
          {LeadershipData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12]"
            >
              <div>
                <img
                  src={item.photo}
                  alt=""
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
              </div>

              <div className="text-center">
                <p className="mt-4.5 mb-1 font-medium">{item.name}</p>
                <p className="text-sm text-[#8C8D8B]">{item.postion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Section */}

      <div className="mx-8 my-15">
        <p className="text-[#242524] text-4xl font-bold text-center">
          Certifications & Partnerships
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 mt-[70px] justify-items-center w-full">
          <img src={certifiation1} alt="" className="w-[151px] h-auto" />
          <img src={certifiation2} alt="" className="w-[151px] h-auto" />
          <img src={certifiation3} alt="" className="w-[151px] h-auto" />
          <img src={certifiation4} alt="" className="w-[151px] h-auto" />
          <img src={certifiation5} alt="" className="w-[151px] h-auto" />
          <img src={certifiation6} alt="" className="w-[151px] h-auto" />
          <img src={certifiation7} alt="" className="w-[151px] h-auto" />
          <img src={certifiation8} alt="" className="w-[151px] h-auto" />
          <img src={certifiation9} alt="" className="w-[151px] h-auto" />
          <img src={certifiation10} alt="" className="w-[151px] h-auto" />
        </div>
      </div>

      {/* Footer */}

      <div>
        <Footer />
      </div>
    </>
  );
}

export default About;
