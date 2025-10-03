import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductData from '../data/ProductData';

function ProductItem() {
  const { id } = useParams();
  const [itemNo, setItemNo] = useState(1);

  const product = ProductData[id];

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
                className="w-full h-auto mx-auto  max-w-[350px] max-h-[467px] object-cover"
              />
            </div>

            {/* Description and Cutomization */}

            <div>
              <p className="text-3xl heading">{product.title}</p>
              <div className="my-2.5">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductItem;
