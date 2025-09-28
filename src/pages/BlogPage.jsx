import { placeholder33 } from '../assets';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function BlogPage() {
  return (
    <>
      <Navbar navStyle="bg-[#AFAFAE1A] text-black" />
      <div className="grid md:grid-cols-[60%_40%] gap-10 px-8 py-12">
        <div className="">
          <h1 className="text-xl md:text-3xl font-bold mb-6">
            Understanding Drug Development: A Deep Dive into the Drug Creation
            Process
          </h1>

          <div className="leading-5 text-lg space-y-5">
            <p>
              Drug development is a long and complex process that transforms an
              idea in the laboratory into a medicine that can be used by
              patients. It begins with discovery, where scientists search for
              molecules that may affect a biological target linked to a disease.
              Once promising candidates are identified, they are tested in
              laboratory experiments and in animals to understand their safety,
              dosage, and how the body processes them.
            </p>

            <p>
              If a compound shows potential, it moves into clinical trials.
              These are studies in humans designed to test safety,
              effectiveness, and possible side effects. The first phase usually
              involves a small group of healthy volunteers to determine safe
              dosage ranges and how the drug behaves in the body. The second
              phase involves patients with the condition to see if the drug
              actually works. The third phase includes thousands of patients
              across different locations to confirm effectiveness, compare with
              existing treatments, and monitor safety on a larger scale.
            </p>

            <p>
              When clinical trials are successful, all data is submitted to
              regulatory authorities such as the FDA, EMA, or NAFDAC for
              approval. These agencies review the evidence carefully to make
              sure the drug is effective, safe, and manufactured to high
              standards. Only then can the drug be marketed and prescribed.
            </p>

            <p>
              Even after approval, the process continues through post-market
              surveillance. This phase monitors the drug in real-world use,
              checking for rare or long-term side effects and ensuring it
              performs well in diverse patient populations. Sometimes drugs are
              withdrawn or adjusted if unexpected risks are discovered.
            </p>

            <p>
              The drug development process faces many challenges. It is
              extremely expensive, often costing billions of dollars. It is
              time-consuming, taking ten to fifteen years from start to finish.
              Most compounds fail during development, with only a tiny fraction
              making it to market. Scientists and regulators must balance the
              need for new treatments with the responsibility to protect
              patients.
            </p>

            <p>
              The future of drug development is being shaped by new
              technologies. Artificial intelligence can speed up the search for
              promising compounds. Genomics and personalized medicine allow
              treatments to be tailored to individuals. mRNA technology, used in
              COVID-19 vaccines, shows how quickly new approaches can change the
              landscape. Advances such as 3D bioprinting and organoids are
              making it possible to test drugs more effectively without relying
              heavily on animal studies.
            </p>

            <p>
              Drug development is a journey of science, innovation, and
              persistence. Each medicine available today is the result of years
              of effort, strict testing, and careful review. The goal remains
              the same: to create treatments that are safe, effective, and
              capable of improving or saving lives.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-6">Related</h2>

          <div className="flex gap-x-5">
            <div>
              <img
                src={placeholder33}
                alt=""
                className="w-full max-w-[150px]"
              />
            </div>

            <div className=" ">
              <p className="font-semibold md:text-lg">
                Understanding Drug Development
              </p>
              <p className="text-wrap">
                A deep dive into the drug creation process.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;
