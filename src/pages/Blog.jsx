import { Link } from 'react-router-dom';
import { blogRightArrow, imageTray, leftArrow, righArrow } from '../assets';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { blogpPost22, blogpPost23, blogpPost24 } from '../data/BlogPostData';
import { useState } from 'react';

function Blog() {
  const [selected, setSelected] = useState('post');

  return (
    <>
      <Navbar navStyle="bg-[#AFAFAE1A] text-black" />

      <div className="grid md:grid-cols-[280px_1fr] gap-x-8 mx-8 mt-5">
        {/* First Section */}
        <div>
          <div className="py-7.5 px-6 border border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12]">
            <p className="font-semibold text-lg">Filter & Categories</p>

            <div className="bg-[#F7F7F7] p-1 flex justify-between">
              <button
                onClick={() => setSelected('post')}
                className={`rounded-md px-5.5 py-1.5 text-sm cursor-pointer text-[#8C8D8B] ${selected === 'post' && 'bg-[#54B947] rounded-md text-white'}`}
              >
                All Posts
              </button>
              <button
                onClick={() => setSelected('category')}
                className={`px-5.5 py-1.5 cursor-pointer text-sm text-[#8C8D8B] ${selected === 'category' && 'bg-[#54B947] rounded-md text-white'}`}
              >
                By Category
              </button>
            </div>

            <div className="mt-6.5 text-[#242524] font-medium">
              <p className="font-medium">All Categories</p>

              <div className="text-[#8C8D8B] mt-2.5 space-y-2.5">
                <div className="rounded-full bg-[#F7F7F7] px-3 py-0.5">
                  Health & Wellness
                </div>
                <div className="rounded-full bg-[#F7F7F7] px-3 py-0.5">
                  Company News & Updates
                </div>
                <div className="rounded-full bg-[#F7F7F7] px-3 py-0.5">
                  Research News
                </div>
                <div className="rounded-full bg-[#F7F7F7] px-3 py-0.5">
                  Community Impact
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}

        <div>
          <div className="grid lg:grid-cols-2">
            <div>
              <Link to="/blogpost">
                <img
                  src={imageTray}
                  alt=""
                  className="w-full h-full md:max-w-[531px] md:max-h-[498px] object-cover"
                />
              </Link>
            </div>

            <div className="flex items-center py-7 px-6 border-[#EBEBEA] shadow-[0_0_2px_0_#171A1F1F,0_0_1px_0_#171A1F12] ">
              <div>
                <p className="text-[#54B947] font-medium text-sm py-1 px-2 rounded-full bg-[#54B9471A] w-15">
                  Health
                </p>
                <p className="text-xl md:text-3xl font-bold mb-4 mt-5.5">
                  <Link to="/blogpost">
                    The Future of Precision Medicine at Greenlife
                  </Link>
                </p>
                <p className="mb-5.5 text-[#8C8D8B]">
                  Discover how Greenlife Pharmaceuticals is pioneering
                  personalized treatments for a healthier tomorrow. Our latest
                  advancements are setting new standards in targeted therapies.
                </p>
                <p className="text-[#8C8D8B] text-sm">July 15, 2024</p>

                <div>
                  <Link to="/blogpost">
                    <button className="flex items-center justify-center gap-x-2.5 py-2.5 rounded-md text-[#54B947] cursor-pointer">
                      <span className="text-sm">Read More</span>
                      <img src={righArrow} alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2024 Post Section */}

          <p className="text-2xl font-bold mt-9 mb-5.5">2024 Posts</p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {blogpPost24.map(item => (
              <div className=" bg-white">
                <div>
                  <Link to="/blogpost">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full max-w-[305px]"
                    />
                  </Link>
                </div>
                <div className="my-2">
                  <p className="px-2 py-1 bg-[#54B9471A] rounded-full text-[#54B947] inline-block font-medium text-sm">
                    {item.category}
                  </p>
                  <p className="mt-4.5 mb-0.5 text-[#242524] font-semibold text-lg md:text-xl">
                    <Link to="/blogpost">{item.title}</Link>
                  </p>
                  <p className="mb-2 text-[#8C8D8B] text-sm">
                    {item.datePosted}
                  </p>
                  <p className="text-[#8C8D8B] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 2023 Post Section */}

          <p className="text-2xl font-bold mt-10 mb-5.5">2023 Posts</p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {blogpPost23.map(item => (
              <div className=" bg-white">
                <div>
                  <Link to="/blogpost">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full max-w-[305px]"
                    />
                  </Link>
                </div>
                <div className="my-2">
                  <p className="px-2 py-1 bg-[#54B9471A] rounded-full text-[#54B947] inline-block font-medium text-sm">
                    {item.category}
                  </p>
                  <p className="mt-4.5 mb-0.5 text-[#242524] font-semibold text-lg md:text-xl">
                    <Link to="/blogpost">{item.title}</Link>
                  </p>
                  <p className="mb-2 text-[#8C8D8B] text-sm">July 15, 2024</p>
                  <p className="text-[#8C8D8B] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 2022 Post Section */}

          <p className="text-2xl font-bold mt-10 mb-5.5">2022 Posts</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {blogpPost22.map(item => (
              <div className=" bg-white">
                <div>
                  <Link to="/blogpost">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full max-w-[305px]"
                    />
                  </Link>
                </div>
                <div className="my-2">
                  <p className="px-2 py-1 bg-[#54B9471A] rounded-full text-[#54B947] inline-block font-medium text-sm">
                    {item.category}
                  </p>
                  <p className="mt-4.5 mb-0.5 text-[#242524] font-semibold text-lg md:text-xl">
                    <Link to="/blogpost">{item.title}</Link>
                  </p>
                  <p className="mb-2 text-[#8C8D8B] text-sm">
                    {item.datePosted}
                  </p>
                  <p className="text-[#8C8D8B] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Section */}

      <div className="mx-8 mt-12 mb-13.5 flex justify-center gap-5.5 items-center">
        <div>
          <button className="font-medium flex items-center justify-center gap-x-2.5 py-2.5 rounded-md cursor-pointer">
            <img src={leftArrow} alt="" />
            <span className="text-sm">Previous</span>
          </button>
        </div>

        <div>1</div>

        <div>2</div>

        <div>3</div>

        <div>...</div>

        <div>
          <button className="font-medium flex items-center justify-center gap-x-2.5 py-2.5 rounded-md cursor-pointer">
            <span className="text-sm ">Next</span>
            <img src={blogRightArrow} alt="" />
          </button>
        </div>
      </div>

      {/* Footer Section */}

      <Footer />
    </>
  );
}

export default Blog;
