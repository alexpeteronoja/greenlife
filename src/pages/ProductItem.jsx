import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductData from '../data/ProductData';
import ProductCard from '../components/ProductCard';
import {
  downloadIcon,
  naturalSources,
  qualityAssured,
  shareIcon2,
  thirdPartyTested,
} from '../assets';

function ProductItem() {
  const { id } = useParams();
  // const [itemNo, setItemNo] = useState(1);

  const mainId = id - 1;

  const product = ProductData[mainId];

  return (
    <>
      <Navbar navStyle="bg-[#AFAFAE1A] text-black" />

      <div className="mt-5 mb-10">
        <div className="mx-5 mt-12 md:mx-10">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <img
                src={product.image}
                alt=""
                className="w-full h-auto mx-auto bg-[#F9FAFB] p-12  max-w-[488px] max-h-[488px] object-cover rounded-2xl"
              />

              <div className="flex gap-3 mt-6">
                <button className="w-full rounded-[14px] border border-[#D1D5DC] h-12.5 flex justify-center items-center gap-2 cursor-pointer">
                  <img src={downloadIcon} alt="" />
                  Download Info
                </button>

                <button className="w-full rounded-[14px] border border-[#D1D5DC] h-12.5 flex justify-center items-center gap-2 cursor-pointer">
                  <img src={shareIcon2} alt="" />
                  Share
                </button>
              </div>
            </div>

            {/* Description and Cutomization */}

            <div>
              <h1 className="text-3xl heading">{product.title}</h1>

              <div>
                <p className="mt-3.5 text-[#4A5565] text-xl">
                  Fast-acting formula for muscle and joint pain.
                </p>
              </div>

              <h2 className="text-2xl mb-3.5">Overview</h2>

              <p>
                GreenRelief Pain Capsules offer rapid and effective relief from
                various types of pain, including muscle aches, joint discomfort,
                and headaches. Our advanced formula is designed for quick
                absorption, ensuring you feel better, faster. Ideal for daily
                aches or post-exercise recovery.
              </p>

              <div className="mt-10 border-y border-y-[#E5E7EB] py-4">
                <h2 className="text-2xl mb-3.5">Key Benefits</h2>

                <ul
                  className={`list-image-[url('/images/list-image.svg')] list-inside`}
                >
                  <li>Fast-acting relief within 30 minutes</li>
                  <li>Targets muscle aches, joint pain, and headaches</li>
                  <li>
                    Advanced absorption technology for maximum effectiveness
                  </li>
                  <li>Non-drowsy formula - safe for daytime use</li>
                  <li>Suitable for post-exercise recovery</li>
                </ul>
              </div>

              {/* <div className="my-2.5">
                <span
                  className={`text-2xl `}
                >{`₦${product.price.toLocaleString('en-Ng')}`}</span>
              </div>

              <p className="heading my-3.5">Quantity</p>

              <div className="grid grid-cols-[128px_1fr] gap-x-5 mb-5">
                <div className="relative">
                  <div className="">
                    <input
                      type="number"
                      className=" px-10 bg-[rgb(241,241,241)] outline-0 rounded-md w-full h-10 text-center"
                      value={Math.max(1, itemNo)}
                      onChange={e => setItemNo(e.target.value)}
                      disabled={true}
                    />
                  </div>
                  <div
                    onClick={() => setItemNo(prev => Math.max(1, prev - 1))}
                    className="absolute cursor-pointer top-2 left-3"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <div
                    onClick={() => setItemNo(prev => Math.max(prev + 1))}
                    className="absolute cursor-pointer top-2 right-4"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>

                <div>
                  <button
                    // onClick={handleAddtoCart}
                    className="flex items-center justify-center w-full border rounded-md cursor-pointer px-7  border-[#12BA09] text-[#12BA09] hover:bg-[#12BA09] hover:text-white h-11"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="overflow-hidden">
                <button
                  //  onClick={handleShopNow}
                  className="w-full text-white transition-all duration-200 transform bg-[#12BA09] border rounded-md cursor-pointer px-7 hover:rounded-lg h-11 hover:scale-125"
                >
                  Shop Now
                </button>
              </div>

              <div className="mt-7 p-4 bg-[#f7f7f7] rounded-md">
                <p className="mt-1.5 text-center">
                  Guaranteed safe & secure checkout
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-x-8 mt-11 mx-5 md:mx-10 pt-8 border-y border-y-[#E5E7EB]">
          <div>
            <img
              src={qualityAssured}
              alt=""
              className="bg-[#12BA091A] rounded-[14px] p-3"
            />

            <p className="text-xl mt-4">Quality Assured</p>

            <p className="mt-1.5">
              Manufactured in FDA-approved facilities with rigorous quality
              control standards.
            </p>
          </div>

          <div>
            <img
              src={thirdPartyTested}
              alt=""
              className="bg-[#EFF6FF] rounded-[14px] p-3"
            />

            <p className="text-xl mt-4">Third-Party Tested</p>

            <p className="mt-1.5">
              Independent laboratory testing ensures purity and potency of all
              ingredients.
            </p>
          </div>

          <div>
            <img
              src={naturalSources}
              alt=""
              className="bg-[#12BA091A] rounded-[14px] p-3"
            />

            <p className="text-xl mt-4">Natural Sources</p>

            <p className="mt-1.5">
              Sourced from premium natural ingredients with minimal processing
              for maximum efficacy.
            </p>
          </div>

          <div className="bg-[#F9FAFB] p-8 ">
            <h2>Safety Information</h2>
          </div>
        </div>

        {/* Related Product */}

        <div className="mt-12.5 md:mt-17.5 xl:mt-23 mx-3 md:mx-10">
          <p className="mb-6 text-4xl text-center md:mb-9 xl:mb-11">
            You may also like
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-7.5">
            {ProductData.slice(4, 8).map((item, index) => (
              <div key={index}>
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductItem;
