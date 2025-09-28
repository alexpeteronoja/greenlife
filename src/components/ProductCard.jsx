import { buttoncart } from '../assets';
import ProductData from '../data/ProductData';

function ProductCard({ product }) {
  return (
    <>
      <div>
        <div className="relative h-full py-8 px-6 border border-[#EBEBEA] rounded-lg shadow-[0_0_2px_0_#171a1f1f,0_0_1px_0_#171a1f12]">
          <div>
            <img
              src={product.image}
              alt=""
              className="object-cover w-full h-full max-w-[292px] max-h-[192px]"
            />
          </div>
          <div className="mt-5">
            <p className="text-lg font-semibold mt-0.5">{product.title}</p>
            <p>{product.description}</p>
            <p className="text-[#12BA09] text-2xl font-bold  mt-2.5">
              ₦{product.price}
            </p>
          </div>

          <div className="mt-4 flex flex-col xl:flex-row justify-between items-center gap-4">
            <button className="py-2.5 px-4 w-full  rounded-[10px] border text-sm border-[#12BA09] text-[#12BA09] whitespace-nowrap">
              Buy Now
            </button>

            <button className="flex items-center w-full  justify-center gap-x-2.5 text-sm text-white py-2.5 px-4 rounded-[10px] bg-[#12BA09] border-[#12BA09] border-t-2 border-b-4 border-x-2">
              <img src={buttoncart} alt="" />
              <span className="text-sm whitespace-nowrap">Add to Cart</span>
            </button>
          </div>

          {/* Best Seller */}
          {product.bestSeller && (
            <div className="absolute top-6 left-6 bg-[#E8618C] py-0.5 px-3 inline rounded-[6px] text-white text-xs font-medium">
              Best Seller
            </div>
          )}

          {/* New Product */}
          {product.newProduct && (
            <div className="absolute top-6 right-6 bg-[#12BA09] py-0.5 px-3 inline rounded-[6px] text-white text-xs font-medium">
              New
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
