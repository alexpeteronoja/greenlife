import {
  blackLogo,
  facebookLogo,
  instagramLogo,
  // linkedInLogo,
  materialSymbol,
  tiktokLogo,
  twitterLogo,
  // youtubeLogo,
} from '../assets';

function Footer() {
  return (
    <>
      <div>
        <div className="bg-[#DDFFDB] py-16 px-8">
          <div className="flex flex-col lg:flex-row gap-x-32 gap-y-15 font-exo2">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
              <div>
                <img src={blackLogo} alt="" />
              </div>
              <p className="my-6">
                Subscribe to our newsletter for the latest updates and product
                releases.
              </p>

              <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 mb-3">
                <input
                  type="text"
                  placeholder="Your Email Here"
                  className="px-3 py-1.5 border-2 border-[#1E1E1E] "
                />

                <div className="">
                  <button className="py-2.5 px-6  border-[#1E1E1E] border-t-2 border-b-4 border-x-2 rounded-md">
                    Sign up
                  </button>
                </div>
              </div>

              <p className="text-xs">
                By subscribing, you consent to our Privacy Policy and receive
                updates.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-x-10 justify-center lg:justify-start flex-1">
              <div>
                <p className="mb-4 font-semibold">Quick Links</p>
                <div className="space-y-4">
                  <p>Home Page</p>
                  <p>Our Products</p>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Blog Posts</p>
                </div>
              </div>

              <div>
                <p className="mb-4 font-semibold">Connect With Us</p>
                <div className="space-y-4">
                  <p>Careers</p>
                  <p>Partnerships</p>
                  <p>FAQs</p>
                  <p>Support Center</p>
                  <p>Feedback</p>
                </div>
              </div>

              <div>
                <p className="mb-4 font-semibold">Legal</p>
                <div className="space-y-4">
                  <p>Privacy Policy</p>
                  <p>Terms of Use</p>
                  <p>Cookie Settings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row  items-center gap-3  my-8">
            <div className="flex gap-2">
              <img src={materialSymbol} alt="" />
              <p>Nigeria</p>
            </div>

            <div className="font-exo2 text-sm">
              © 2025 Greenlife Pharmaceuticals. All rights reserved.
            </div>
          </div>

          {/* Social section */}

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-6 gap-y-10">
            <div className="lg:max-w-[590px] text-center lg:text-start">
              This information—including product information—is intended only
              for residents of the Nigeria. The products discussed herein may
              have different labeling in different countries.
            </div>

            <div className="flex justify-center lg:justify-start items-center gap-x-5">
              <div>
                <a
                  href="https://www.facebook.com/share/1SJ14c4CjS/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <img src={facebookLogo} alt="" className="w-6" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/greenlifepharmofficial?igsh=MXZlZm1yMjU5ejRj&utm_source=qr"
                  target="_blank"
                >
                  <img src={instagramLogo} alt="" />
                </a>
              </div>
              <div>
                <a href="https://x.com/pharm_greenlife?s=21" target="_blank">
                  <img src={twitterLogo} alt="" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.tiktok.com/@greenlifepharmofficials?_t=ZM-8xkWZOeXa57&_r=1"
                  target="_blank"
                >
                  <img src={tiktokLogo} alt="" className="w-6" />
                </a>
              </div>
              {/* <div>
                <a href="">
                  <img src={linkedInLogo} alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src={youtubeLogo} alt="" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
