import { BiImageAdd, BiDotsHorizontalRounded } from "react-icons/bi";
import React from "react";

import { ButtonWhite } from "components/Button";
import Layout from "components/Layout";
import Navbar from "components/Navbar";

const Timeline = () => {
  return (
    <Layout>
      <Navbar />
      <section className="bg-gradient-to-b from-bgpurple to-bgpink py-5 px-5 mb-5 rounded-b-2xl sm:rounded-2xl sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
        <input
          className="w-full rounded-2xl py-5 px-5 border-2 border-gray-500 mb-3"
          type="text"
          placeholder="What's on your mind?"
        />
        <div className="flex justify-end items-center gap-3">
          <span className="text-white">
            <BiImageAdd size={30} />
          </span>
          <span>
            <ButtonWhite label="Publish" />
          </span>
        </div>
      </section>
      <section className="border-b-2 pb-3 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
        <div className="flex items-center justify-between px-3 mb-2">
          <div className="flex items-center gap-3">
            <img
              className="w-10 rounded-full"
              src="src/assets/photo1.jpg"
              alt="photo"
            />
            <span className="font-bold">username</span>
            <span className="text-xs font-normal">01 Jan 2023</span>
          </div>
          <span className="flex">
            <BiDotsHorizontalRounded />
          </span>
        </div>
        <div className="mb-2 flex justify-center">
          <img src="src/assets/picture.jpg" alt="picture" />
        </div>
        <p className="px-3 mb-2 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        <p className="px-3 mb-2 text-xs font-bold">View all comments</p>
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">username</span>
            <span className="text-xs font-normal">01 Jan 2023</span>
          </div>
          <span className="flex">
            <BiDotsHorizontalRounded />
          </span>
        </div>
        <p className="px-3 mb-2 text-sm font-">
          Comments content Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </section>
    </Layout>
  );
};

export default Timeline;
