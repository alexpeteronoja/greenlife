import {
  arrowDown,
  clock,
  mailSecond,
  mapPin,
  phoneSecond,
  secondMap,
} from '../assets';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <div className="bg-[#F5F5F533]">
        <Navbar navStyle="bg-[#AFAFAE1A] text-black" />
        <div className="px-8 pt-9 text-center">
          <h2 className="text-3xl md:text-6xl font-bold">
            Reach Out to Greenlife
          </h2>
          <p className="text-[#8C8D8B] text-xl mt-6 pb-19.5">
            Your health is our priority. Connect with us for inquiries, support,
            or partnership opportunities.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-14 mt-10 md:mt-21 mb-24 mx-8">
        {/* First Section */}
        <div className="font-inter p-10 rounded-xl shadow-[0_0_2px_0_#171A1F1F,_0_0_1px_0_#171A1F12]">
          <p className="text-[#242524] text-2xl md:text-3xl font-bold">
            Send Us a Message
          </p>

          <p className="mt-4 text-[#8C8D8B]">
            Please fill out the form below, and we'll get back to you as soon as
            possible. Your privacy is important to us.
          </p>

          <div className="mt-8">
            <form action="">
              <div>
                <div className="font-medium text-sm">
                  <label htmlFor="fullName">Full Name</label>
                </div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-2 py-3 border border-[#EBEBEA] rounded-[6px]"
                />
              </div>

              <div className="mt-6.5">
                <div className="font-medium text-sm">
                  <label htmlFor="email">Email Address</label>
                </div>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-2 py-3 border border-[#EBEBEA] rounded-[6px]"
                />
              </div>

              <div className="mt-6.5">
                <div className="font-medium text-sm">
                  <label htmlFor="phoneNumber">Phone Number (Optional)</label>
                </div>
                <input
                  type="phone"
                  placeholder="(123) 456-7890"
                  className="w-full px-2 py-3 border border-[#EBEBEA] rounded-[6px]"
                />
              </div>

              <div className="mt-6.5">
                <div className="font-medium text-sm">
                  <label htmlFor="subject">Subject</label>
                </div>
                <select
                  name=""
                  id=""
                  className="w-full px-2 py-3 border border-[#EBEBEA] rounded-[6px]"
                >
                  <option value="">Select a subject</option>
                </select>
              </div>

              <div className="mt-6.5">
                <div className="font-medium text-sm">
                  <label htmlFor="subject">Your Message</label>
                </div>
                <textarea
                  name=""
                  id=""
                  className="w-full h-28 px-2 py-3 border border-[#EBEBEA] rounded-[6px] resize-none"
                ></textarea>
              </div>

              <div className="mt-8">
                <button className="w-full bg-[#12BA09] text-white p-2 rounded-md cursor-pointer">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Second Section */}

        <div>
          <div className="p-6 font-inter rounded-xl shadow-[0_0_2px_0_#171A1F1F,_0_0_1px_0_#171A1F12]">
            <p className="text-xl font-medium">Our Headquarters</p>
            <div className="mt-5.5 flex gap-x-4">
              <div>
                <img src={mapPin} alt="" />
              </div>
              <div>
                <p className="text-sm text-[#8C8D8B]">Address:</p>
                <p className="font-medium">
                  35A, Association Avenue, Off Obanikoro Bus Stop, Ilupeju,
                </p>
                <p className="font-medium">Lagos, Nigeria.</p>
              </div>
            </div>

            <div className="mt-4 flex gap-x-4">
              <div>
                <img src={mailSecond} alt="" />
              </div>
              <div>
                <p className="text-sm text-[#8C8D8B]">Email:</p>
                <p className="font-medium text-[#12BA09]">
                  info@greenlifepharma.com
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-x-4">
              <div>
                <img src={phoneSecond} alt="" />
              </div>
              <div>
                <p className="text-sm text-[#8C8D8B]">Phone:</p>
                <p className="font-medium text-[#12BA09]">+1 (800) 555-1234</p>
              </div>
            </div>

            <div className="mt-4 flex gap-x-4">
              <div>
                <img src={clock} alt="" />
              </div>
              <div>
                <p className="text-sm text-[#8C8D8B]">Operating Hours:</p>
                <p className="font-medium text-[#12BA09]">
                  Monday - Friday: 9:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>
          </div>

          {/* second Map */}
          <div className="my-12">
            <img src={secondMap} alt="" className="w-full" />
          </div>

          <div className="p-6 font-inter rounded-xl shadow-[0_0_2px_0_#171A1F1F,_0_0_1px_0_#171A1F12]">
            <p className="text-xl font-medium">Frequently Asked Questions</p>

            <div className="mt-5">
              <div className="flex gap-x-2.5 justify-between py-3.5  border-b-1 border-b-[#EBEBEA]">
                <span>
                  What types of products does Greenlife Pharmaceuticals offer?
                </span>

                <span>
                  <img src={arrowDown} alt="" />
                </span>
              </div>

              <div className="flex gap-x-2.5 justify-between py-3.5  border-b-1 border-b-[#EBEBEA]">
                <span>How can I apply for a career at Greenlife?</span>

                <span>
                  <img src={arrowDown} alt="" />
                </span>
              </div>

              <div className="flex gap-x-2.5 justify-between py-3.5  border-b-1 border-b-[#EBEBEA]">
                <span>Where can I find information about clinical trials?</span>

                <span>
                  <img src={arrowDown} alt="" />
                </span>
              </div>

              <div className="flex gap-x-2.5 justify-between py-3.5  border-b-1 border-b-[#EBEBEA]">
                <span>
                  What is Greenlife Pharmaceuticals' commitment to
                  sustainability?
                </span>

                <span>
                  <img src={arrowDown} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <Footer />
    </>
  );
}

export default Contact;
