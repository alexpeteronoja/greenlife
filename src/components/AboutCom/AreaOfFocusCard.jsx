import { rightTypeArrow } from '../../assets';

function AreaOfFocusCard({ product }) {
  return (
    <>
      <div>
        <img
          src={product.image}
          alt=""
          className="w-full h-auto max-h-[256px] object-cover rounded-lg"
        />
        <div className="mt-4">
          <p className="font-bold text-xl mb-2">{product.title}</p>
          <p>{product.description}</p>
          <div className="mt-4 text-[#16A34A] flex items-center gap-x-2">
            <div>Learn More</div>
            <div>
              <img src={rightTypeArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AreaOfFocusCard;
