import { Link, useNavigate } from 'react-router-dom';
import {
  buttoncart,
  medicineBot1,
  medicineBot2,
  messageQuoteIcon,
  phoneCallIcon,
  shoppingCart,
} from '../assets';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import ProductData from '../data/ProductData';

function Product() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar navStyle="bg-[#AFAFAE1A] text-black" />
      </div>

      <div>
        <p className="pt-5 text-center text-3xl md:text-4xl mb-10 md:mb-16">
          Explore Our Product Categories
        </p>

        <p className="text-center text-2xl font-medium">
          Featured GreenLife Solutions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-8 mt-10">
          {/* Product card */}

          <div className="flex flex-col md:flex-row items-center md:items-start  gap-6 py-8 px-6 border border-[#EBEBEA] rounded-lg shadow-[0_0_2px_0_#171a1f1f,0_0_1px_0_#171a1f12]">
            <div className="w-[150px] flex-shrink-0">
              <img
                src={medicineBot1}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg md:text-2xl font-bold text-center md:text-start">
                  GreenRelief Pain Capsules
                </p>
                <p className="text-[#8C8D8B] mt-2 mb-3.5">
                  GreenRelief Pain Capsules offer rapid and effective relief
                  from various types of pain, including muscle aches, joint
                  discomfort, and headaches. Our
                </p>
                <p className="text-[#12BA09] text-2xl font-bold text-center md:text-start ">
                  ₦11,500
                </p>
              </div>

              <div className="mt-4 flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
                {/* <button className="py-2.5 px-6 rounded-md border border-[#12BA09] text-[#12BA09]">
                  Buy Now
                </button> */}

                <button
                  onClick={() => navigate(`/product/1`)}
                  className="flex items-center justify-center gap-x-2.5 w-full cursor-pointer text-white py-2.5 px-6 rounded-md bg-[#12BA09] border-[#12BA09] border-t-2 border-b-4 border-x-2"
                >
                  {/* <img src={buttoncart} alt="" /> */}

                  <span className="text-sm">View Details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Second product card */}

          <div className="flex flex-col md:flex-row items-center md:items-start  gap-6 py-8 px-6 border border-[#EBEBEA] rounded-lg shadow-[0_0_2px_0_#171a1f1f,0_0_1px_0_#171a1f12]">
            <div className="w-[150px] flex-shrink-0">
              <img
                src={medicineBot2}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg md:text-2xl font-bold text-center md:text-start">
                  GreenRelief Pain Capsules
                </p>
                <p className="text-[#8C8D8B] mt-2 mb-3.5">
                  GreenRelief Pain Capsules offer rapid and effective relief
                  from various types of pain, including muscle aches, joint
                  discomfort, and headaches. Our
                </p>
                <p className="text-[#12BA09] text-2xl font-bold text-center md:text-start ">
                  ₦11,500
                </p>
              </div>

              <div className="mt-4 flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
                {/* <button className="py-2.5 px-6 rounded-md border border-[#12BA09] text-[#12BA09]">
                  Buy Now
                </button> */}

                <button
                  onClick={() => navigate(`/product/1`)}
                  className="flex items-center justify-center gap-x-2.5 w-full cursor-pointer text-white py-2.5 px-6 rounded-md bg-[#12BA09] border-[#12BA09] border-t-2 border-b-4 border-x-2"
                >
                  <img src={buttoncart} alt="" />
                  <span className="text-sm">View Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* shooping Cart Logo */}

        <div className="flex justify-end mx-8 my-1 ">
          <img
            src={shoppingCart}
            alt=""
            className="p-3 rounded-full bg-[#12BA0933]"
          />
        </div>

        {/* Product List */}

        <div className="flex gap-x-6 items-center md:text-lg font-medium overflow-x-auto  whitespace-nowrap text-white rounded-[10px]  bg-[#2C2C2C99] border border-[#DADADA99] scrollbar-hide p-2.5 mx-8 mb-4">
          <div className="p-2.5 bg-white text-[#2C2C2C] rounded-[10px]">
            Product Description
          </div>
          <div>Anti Diabetics</div>
          <div>Anti-Allergy Cold and Cough</div>
          <div>Anti-Fungals</div>
          <div>Anti-Hypertensives</div>
          <div>Anti-Inflammatory</div>
          <div>Anti-Pyretic</div>
          <div>Anti-Malarials</div>
        </div>

        <p className="text-2xl md:text-4xl font-bold text-center mt-5 mb-12">
          All GreenLife Products
        </p>

        <div className="mx-8 grid justify-center grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {ProductData.map(item => (
            <ProductCard product={item} />
          ))}
        </div>

        {/* Testimonial Section */}

        <div className="py-16 mx-8">
          <p className="text-center font-bold text-3xl  md:text-4xl">
            What Our Customers Say
          </p>

          <div className="flex flex-col md:flex-row gap-7 mt-10">
            <div className="border-4 border-[#12BA09] rounded-lg p-6">
              <div>
                <img src={messageQuoteIcon} alt="" />
              </div>

              <div className="pt-5">
                "GreenLife Pharmaceuticals' Pain Capsules truly changed my daily
                life. The relief is fast and long-lasting, allowing me to enjoy
                activities again without discomfort. Highly recommend!"
              </div>

              <div className="pt-3.5 text-[#12BA09] font-medium">
                Sarah M., Lagos, NG
              </div>
            </div>

            <div className="border-4 border-[#12BA09] rounded-lg p-6">
              <div>
                <img src={messageQuoteIcon} alt="" />
              </div>

              <div className="pt-5">
                "I've been using the Daily Essential Multivitamin for months,
                and I feel a noticeable improvement in my energy levels and
                overall well-being. It's now a staple in my routine."
              </div>

              <div className="pt-3.5 text-[#12BA09] font-medium">
                David L., Lagos, NG
              </div>
            </div>

            <div className="border-4 border-[#12BA09] rounded-lg p-6">
              <div>
                <img src={messageQuoteIcon} alt="" />
              </div>

              <div className="pt-5">
                "The Revitalizing Serum is amazing! My skin feels incredibly
                smooth and looks so much brighter. GreenLife has truly
                high-quality products."
              </div>

              <div className="pt-3.5 text-[#12BA09] font-medium">
                Jessica P., Lagos, NG
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 mx-8 text-center flex justify-center">
          <div className="max-w-[768px]">
            <p className="text-4xl font-bold">Need Expert Guidance?</p>
            <p className="my-4.5 text-[#8C8D8B] text-lg">
              Our team of dedicated health professionals is here to provide
              personalized advice and answer all your questions about our
              products and your well-being.
            </p>

            <div className="flex justify-center">
              <Link to="/contact">
                <button className="flex items-center justify-center gap-x-2.5 text-[#393939] py-2.5 px-8 rounded-md bg-[#F7F7F7] cursor-pointer">
                  <img src={phoneCallIcon} alt="" />
                  <span className="text-lg">Schedule a Consultation</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}

        <Footer />
      </div>
    </>
  );
}

export default Product;
