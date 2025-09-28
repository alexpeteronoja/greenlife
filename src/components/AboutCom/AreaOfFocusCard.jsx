import { Link } from 'react-router-dom';
import { rightTypeArrow } from '../../assets';

function AreaOfFocusCard({ product }) {
  return (
    <>
      <div>
        <Link to="/blogpost">
          <img
            src={product.image}
            alt=""
            className="w-full h-auto max-h-[256px] object-cover rounded-lg"
          />
        </Link>

        <div className="mt-4">
          <Link to="/blogpost">
            <p className="font-bold text-xl mb-2">{product.title}</p>
          </Link>
          <p>{product.description}</p>

          <div>
            <Link
              to="/blogpost"
              className="mt-4 text-[#16A34A] flex items-center gap-x-2"
            >
              <div>Learn More</div>
              <div>
                <img src={rightTypeArrow} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AreaOfFocusCard;
