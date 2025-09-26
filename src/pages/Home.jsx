import {
  overlay,
  righArrow,
  productImage,
  prescritpion,
  placeholder5,
  placeholder6,
  contactFrame,
  phoneImg,
  envelopeImg,
  mapLogo,
  mapImg,
  rectangle,
} from '../assets';
import QualityandAbout from '../components/QualityandAbout';
import Navbar from '../components/Navbar';
// import SecondHeroSection from '../components/SecondHeroSection';
import blogData from '../data/BlogData';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${rectangle})` }}
        className="bg-cover bg-center bg-no-repeat h-[757px] relative"
      >
        {/* Overlay */}

        <div className="absolute inset-0 opacity-80 z-0">
          <img src={overlay} alt="" className=" w-full h-full " />
        </div>

        {/* Navbar */}

        <div className="z-20 right-0 left-0">
          <Navbar navStyle="bg-[#FFFFFF1A] text-white" />
        </div>

        {/* Hero Section */}

        <div className="relative z-20 flex md:block mt-30 md:mt-0  justify-center md:justify-start md:absolute md:bottom-1/6">
          <div className="mx-3 md:mx-5 text-center md:text-start text-white w-[824px]">
            <p className="font-merapro text-2xl md:text-4xl">
              Empowering Health with Trusted Pharmaceutical Solutions
            </p>
            <p className="text-[20px] mt-4">
              At Greenlife Pharmaceuticals, we deliver high-quality, accessible
              healthcare solutions across Africa, ensuring you get the best
              products for your health.
            </p>

            <div className="flex justify-center md:justify-start gap-5 mt-8">
              <button className="w-35 bg-white text-[#12BA09] text-[20px] p-2.5 rounded-[10px] cursor-pointer shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),_inset_-2px_-2px_4px_rgba(0,0,0,0.25)]">
                Join vendors
              </button>
              <button className="w-35 text-[20px] p-2.5 border border-white rounded-[10px] cursor-pointer shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25),_inset_-2px_-2px_4px_rgba(0,0,0,0.25)]">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <SecondHeroSection /> */}

      {/* Product Category */}

      <div className="bg-[#D9D9D999] text-black">
        <h2 className="pt-10 mb-6 text-4xl text-center">
          Our Product Categories
        </h2>

        <p className="text-lg text-center">
          Discover our range of effective healthcare solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-stretch mx-8 mt-8 pb-18">
          {/* First Section */}

          <div className="">
            <div className="bg-white pt-12">
              <div className="px-12 pb-12">
                <p>Antibiotics</p>
                <p className="text-4xl mt-2 mb-6">
                  Effective Solutions for Infections
                </p>
                <p>
                  Combat bacterial infections with our trusted antibiotics,
                  ensuring quick recovery and health restoration.
                </p>

                <div className="flex items-center gap-x-6 mt-8">
                  <button className="py-2.5 px-6 border-[#12BA09] border-t-2 border-b-4 border-x-2 ">
                    Learn
                  </button>
                  <button className="flex justify-center items-center text-[#12BA09]">
                    <p className="font-medium">View Products</p>
                    <div>
                      <img src={righArrow} alt="" />
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <img src={productImage} alt="" className="w-full" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-4  md:gap-x-8">
              <div className="bg-white p-6">
                <div>
                  <img src={prescritpion} alt="" />
                </div>

                <p className="text-base md:text-lg font-bold lg:text-2xl mt-2 mb-3 lg:mb-1">
                  Comprehensive Anti-Fungal Treatments
                </p>
                <p>Protect against fungal infections effectively and safely.</p>

                <div className="mt-2">
                  <button className="flex justify-center items-center text-[#12BA09]">
                    <p className="font-medium">Discover</p>
                    <div>
                      <img src={righArrow} alt="" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-white p-6">
                <div>
                  <img src={prescritpion} alt="" />
                </div>

                <p className="font-bold text-base md:text-lg lg:text-2xl mt-2 mb-3 lg:mb-1">
                  Powerful Anti-Malarial Solutions
                </p>
                <p>Fight malaria with our proven treatment options.</p>

                <div className="mt-2">
                  <button className="flex justify-center items-center text-[#12BA09]">
                    <p className="font-medium">Explore</p>
                    <div>
                      <img src={righArrow} alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* second Section */}

          <div>
            <div className="grid grid-cols-2 bg-white">
              <div>
                <img src={placeholder5} alt="" className="w-full h-full" />
              </div>

              <div className="p-6">
                <div>
                  <p>Quality</p>
                  <p className="text-2xl my-2">Why Choose Our Products?</p>
                  <p>Experience quality and reliability in every product.</p>

                  <div className="mt-6">
                    <button className="flex justify-center items-center text-[#12BA09]">
                      <p className="font-medium">Join</p>
                      <div>
                        <img src={righArrow} alt="" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white pt-12 mt-8">
              <div className="px-12 pb-12">
                <p>Trusted</p>
                <p className="text-4xl mt-2 mb-6">Partner with Us Today!</p>
                <p>
                  Become a vendor and help us make healthcare accessible for
                  everyone.
                </p>

                <div className="flex items-center gap-x-6 mt-8">
                  <button className="py-2.5 px-6 border-[#12BA09] border-t-2 border-b-4 border-x-2 ">
                    Join
                  </button>
                  <button className="flex justify-center items-center text-[#12BA09]">
                    <p className="font-medium">Contact</p>
                    <div>
                      <img src={righArrow} alt="" />
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <img src={placeholder6} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <QualityandAbout />

      {/* Blog Section */}

      <div className="mx-8 my-28">
        <div className="text-center">
          <p>Blog</p>

          <p className="text-2xl md:text-5xl mt-4 mb-6">
            Latest Insights and Updates
          </p>

          <p>Stay informed with our latest articles.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 my-20">
          {blogData.map(item => (
            <div>
              <img
                src={item.image}
                alt=""
                className="h-[300px] w-full object-cover"
              />
              <div className="my-6">
                <p>{item.category}</p>
                <p className="font-verelaRound text-2xl mt-2">{item.title}</p>
                <p className="font-exo2">{item.description}</p>
              </div>

              <div className="flex gap-x-4 font-exo2 text-sm">
                <div>
                  <img
                    src={item.avatarImg}
                    alt=""
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold">{item.avatarName}</p>
                  <div className="flex gap-x-2">
                    <p>{item.datePosted}</p>
                    <p>•</p>
                    <p>5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="py-2.5 px-6 border-[#1E1E1E] border-t-2 border-b-4 border-x-2 rounded-md">
            View all
          </button>
        </div>
      </div>

      {/* Contact Section */}

      <div className="relative my-16">
        <div className="flex justify-end">
          <img src={mapImg} alt="" className="" />
        </div>

        <div className="lg:absolute lg:top-1/4 lg:left-1/32 mt-10 lg:mt-0 flex justify-center">
          <div
            style={{
              backgroundImage: `linear-gradient(#0000004D, #0000004D), url(${contactFrame})`,
            }}
            className="bg-cover bg-center bg-no-repeat h-[415px] w-[576px] text-white py-4 px-5.5 flex justify-center items-center"
          >
            <div>
              <p className="text-center text-3xl font-medium">Contact Us</p>
              <p className="mt-4 text-center">
                We’re here to assist you with any inquiries or support you may
                need.
              </p>

              {/* contact informations */}

              <div className="mt-11">
                <div>
                  <div className="flex gap-x-10 mb-4">
                    <div className="flex gap-x-4">
                      <div>
                        <img src={phoneImg} alt="" />
                      </div>

                      <div>
                        <p className="mb-2 font-verelaRound text-xl">Phone</p>
                        <p className="font-exo2 underline">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex gap-x-4">
                      <div>
                        <img src={envelopeImg} alt="" />
                      </div>

                      <div>
                        <p className="mb-2 font-verelaRound text-xl">Email</p>
                        <p className="font-exo2 underline">
                          hello@Greenlife.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-x-4">
                    <div>
                      <img src={mapLogo} alt="" />
                    </div>

                    <div>
                      <p className="mb-2 font-verelaRound text-xl">Office</p>
                      <p className="font-exo2 underline">
                        35A, Association Avenue, Off Obanikoro Bus Stop,
                        Ilupeju, Lagos Nigeria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}

      <Footer />
    </>
  );
}

export default Home;
