import { Link } from 'react-router-dom';
import {
  diversity4,
  healthCross,
  highQualityImg,
  placeholder,
  righArrow,
} from '../assets';

function LandingPartTwo() {
  return (
    <>
      <div>
        <div className="grid md:grid-cols-2 gap-[80px] mx-8 my-28">
          <div className="flex items-center">
            <div>
              <p>About</p>
              <p className="text-2xl md:text-3xl lg:text-5xl mt-4 mb-6">
                Our Commitment to Quality Healthcare Solutions
              </p>
              <p>
                At Greenlife Pharmaceuticals, we strive to provide high-quality
                healthcare solutions that are accessible to everyone. With over
                15 years in the industry, our mission is to improve lives
                through innovative pharmaceutical products.
              </p>

              <div className="flex items-center gap-x-6 mt-8">
                <Link to="/about">
                  <button className="py-2.5 px-6 border-[#12BA09] border-t-2 border-b-4 border-x-2 cursor-pointer">
                    Learn More
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="flex justify-center items-center text-[#12BA09] cursor-pointer">
                    <p className="font-medium">Join us</p>
                    <div>
                      <img src={righArrow} alt="" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <img src={placeholder} alt="" />
          </div>
        </div>
      </div>

      {/* Quality Section */}

      <div className="bg-[#DDFFDB] py-28 px-10">
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-10 mb-20">
          <div>
            <p>Quality</p>
            <p className="text-2xl md:text-5xl mt-4">
              Why Choose Greenlife Pharmaceuticals?
            </p>
          </div>

          <div>
            At Greenlife Pharmaceuticals, we prioritize your health with our
            trusted products. Our commitment to quality ensures that you receive
            the best pharmaceutical solutions. Join us in making healthcare
            accessible for everyone.
          </div>
        </div>

        {/* Quality second Section */}
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-10 mb-20">
          <div className=" text-center md:text-start">
            <div>
              <img src={highQualityImg} alt="" className="mx-auto md:mx-0" />
            </div>

            <p className="text-3xl my-6">Certified and Trusted by Experts</p>
            <p>We are WHO Certified, ensuring the highest standards.</p>
          </div>

          <div className=" text-center md:text-start">
            <div>
              <img src={healthCross} alt="" className="mx-auto md:mx-0" />
            </div>

            <p className="text-3xl my-6">
              Global Partnerships for Better Healthcare
            </p>
            <p>We collaborate with leading organizations worldwide.</p>
          </div>

          <div className=" text-center md:text-start">
            <div>
              <img src={diversity4} alt="" className="mx-auto md:mx-0" />
            </div>

            <p className="text-3xl my-6 text-center md:text-start">
              A Diverse Range of Over 100 Products
            </p>
            <p>Explore our extensive product lineup tailored to your needs.</p>
          </div>
        </div>

        {/* Quality Third Section */}

        <div className="grid md:grid-cols-2 gap-y-10">
          <div className=" text-center md:text-start">
            <p className="text-4xl mb-6">Join Us in Healthcare Access</p>
            <p>Together, we can improve lives through accessible healthcare.</p>
          </div>

          <div>
            <div className="h-full flex justify-center md:justify-end items-center gap-x-4">
              <Link to="/contact">
                <button className="text-[#DDFFDB] py-2.5 px-6 rounded-md bg-[#1E1E1E] border-[#1E1E1E] border-t-2 border-b-4 border-x-2 cursor-pointer">
                  Become a Vendor
                </button>
              </Link>

              <Link to="/about">
                <button className="py-2.5 px-6 rounded-md border-[#1E1E1E] border-t-2 border-b-4 border-x-2 cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPartTwo;
