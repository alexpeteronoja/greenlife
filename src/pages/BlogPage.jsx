import { blogMainImg, oldPostData3, oldPostData5 } from '../assets';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function BlogPage() {
  return (
    <>
      <Navbar navStyle="bg-[#AFAFAE1A] text-black" />
      <div className="px-8 py-9">
        <div>
          <img src={blogMainImg} alt="" className="w-full max-h-[450px]" />
        </div>

        <div className="mt-12">
          <div className="text-[#008236] bg-[#DCFCE7] py-3 px-5 text-sm rounded-full inline-block mb-2">
            Health
          </div>

          <h1 className="text-xl md:text-5xl font-extrabold">
            The Future of Precision Medicine at Greenlife
          </h1>

          <p className="mt-1 mb-4 text-[#6B7280]">July 15, 2023</p>

          <div className="leading-5 text-lg space-y-5">
            <p>
              In an era of rapid scientific advancement, Greenlife
              Pharmaceuticals stands at the forefront of a revolutionary shift
              in healthcare: Precision Medicine. This groundbreaking approach
              moves away from a 'one-size-fits-all' treatment model towards
              tailored therapies that consider individual genetic makeup,
              lifestyle, and environment. At Greenlife, we are harnessing the
              power of cutting-edge genomic technologies and deep scientific
              expertise to deliver personalized treatments that promise greater
              efficacy and fewer side effects.
            </p>

            <h2 className="font-bold text-3xl">
              Personalized Treatments for Enhanced Efficacy
            </h2>
            <p>
              Precision medicine, also known as personalized medicine, relies on
              advanced diagnostic tools like genomic sequencing to identify
              specific biomarkers associated with diseases. These biomarkers act
              as signals, enabling us to understand the unique molecular
              pathways and mutations driving tumor growth and selecting drugs
              designed to target those exact pathways. Our research teams are
              developing new therapeutic agents and companion diagnostics that
              work in tandem to ensure the right treatment reaches the right
              patient at the right time.
            </p>

            <p>
              This approach not only maximizes the potential for positive
              outcomes but also minimizes exposure to ineffective treatments,
              reducing the burden on patients and healthcare systems. Greenlife
              has several candidates in clinical trials to validate these
              personalized strategies across a range of therapeutic areas,
              including oncology, immunology, and rare diseases.
            </p>

            <h2 className="font-bold text-3xl">
              Targeted Therapies: A New Horizon
            </h2>

            <p>
              Greenlife's commitment to precision medicine is evident in our
              robust pipeline of targeted therapies. These therapies are
              meticulously designed to interact with specific molecular targets
              involved in disease progression, offering a highly precise attack
              on pathological processes while sparing healthy cells. This
              specificity leads to improved safety profiles and better
              tolerability compared to traditional broad-spectrum treatments.
            </p>

            <p>
              Our scientists are leveraging AI and machine learning to
              accelerate drug discovery and identify novel targets. This enables
              us to develop therapies that are not only effective but also
              adaptable to the evolving nature of diseases like cancer, allowing
              for dynamic treatment with unprecedented accuracy. We believe that
              by understanding the intricate biological landscape of each
              patient, we can unlock new avenues for healing and recovery.
            </p>

            <p className="border-l-4 border-l-[#00C950] bg-[#F9FAFB] p-2.5">
              Precision medicine is not just about treating disease; it is about
              predicting, preventing, and personalizing healthcare for every
              individual, ensuring a healthier and more prosperous future.
            </p>

            <h2 className="font-bold text-3xl">Conclusion</h2>

            <p>
              Greenlife Pharmaceuticals is committed to advancing precision
              medicine, transforming the landscape of healthcare, and improving
              patient lives globally. Our ongoing research, strategic
              partnerships, and ethical commitment ensure that we remain leaders
              in this exciting field. We invite you to join us as we explore new
              frontiers in health and wellness, striving for a future where
              every patient receives the precise care they deserve.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="my-12  bg-[#F3F4F6] py-3 px-6 rounded-lg mx-auto cursor-pointer font-semibold">
            ← Back to Blog
          </button>
        </div>

        <div>
          <h2 className="text-center text-3xl font-black mb-12">
            Related Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div>
              <div>
                <img src={oldPostData3} alt="" className="w-full" />
              </div>

              <p className="bg-[#54B9471A] text-[#54B947] font-medium mt-2 mb-2 p-2 inline-block text-xs rounded-full">
                Research & Development
              </p>

              <div className=" ">
                <p className="font-semibold ">
                  Understanding Clinical Trials: Greenlife’s Commitment to
                  Safety
                </p>

                <p className="text-sm mt-1">April 10, 2024</p>

                <p className="text-wrap mt-2">
                  Gain insight into the rigorous processes and ethical
                  considerations guiding Greenlife’s clinical trials, ensuring
                  the safety and efficacy of new treatments.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={oldPostData5} alt="" className="w-full" />
              </div>

              <p className="bg-[#54B9471A] text-[#54B947] font-medium mt-2 mb-2 p-2 inline-block text-xs rounded-full">
                Greenlife Company Updates
              </p>

              <div className=" ">
                <p className="font-semibold ">
                  Our Journey Towards Sustainable Pharmaceutical Manufacturing
                </p>

                <p className="text-sm mt-1">March 05, 2024</p>

                <p className="text-wrap mt-2">
                  Learn about Greenlife’s dedication to eco-friendly practices
                  and reducing environmental impact in our manufacturing
                  processes.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={oldPostData3} alt="" className="w-full" />
              </div>

              <p className="bg-[#54B9471A] text-[#54B947] font-medium mt-2 mb-2 p-2 inline-block text-xs rounded-full">
                Health
              </p>

              <div className=" ">
                <p className="font-semibold ">
                  Breakthroughs in Vaccine Development: A Greenlife Perspective
                </p>

                <p className="text-sm mt-1">February 18, 2024</p>

                <p className="text-wrap mt-2">
                  An in-depth look at recent milestones in vaccine research,
                  including promising new approaches developed by Greenlife
                  scientists.
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

export default BlogPage;
