import { bgDesgin03, bgDesgin04 } from '../../assets';
import CoreValues from '../../data/CoreValues';

function OurCoreValues() {
  return (
    <>
      <div className="mt-15 bg-[linear-gradient(135deg,_#F9FAFB_0%,_#ECFDF5_100%)]">
        <div>
          <img src={bgDesgin03} alt="" className="m-0 p-0 object-cover" />
        </div>

        <div className="px-8 pt-4 md:pt-10">
          <div className="text-center">
            <p className="text-2xl md:text-5xl mt-4 mb-6">Core Values</p>

            <p>
              These principles guide our commitment to excellence in
              pharmaceutical innovation and healthcare improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mt-16">
            {CoreValues.map(item => (
              <div className="bg-white p-8 rounded-3xl">
                <img
                  src={item.image}
                  alt=""
                  className={`border p-1.5 rounded-2xl`}
                />

                <p className="font-inter font-bold text-lg md:text-2xl mt-4 mb-2">
                  {item.title}
                </p>

                <p className="text-[#45556C] text-sm">
                  To be the vanguard of healthy living by providing innovative,
                  high-quality pharmaceutical products that improve lives across
                  West Africa.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-4 md:pb-10">
          <img src={bgDesgin04} alt="" loading="lazy" />
        </div>
      </div>
    </>
  );
}

export default OurCoreValues;
