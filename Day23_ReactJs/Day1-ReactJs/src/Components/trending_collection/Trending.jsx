import React from "react";
import img_main_collection from "../../assets/images/img_collection.png";
import img_collection_thumbnail from "../../assets/images/img_collection_thumbnail.png";
import img_fox from "../../assets/images/img_artist_avatar.png";
const Trending = () => {
  return (
    <div className="w-[1050px] my-[80px] mx-auto">
      <div>
        <h3 className="font-semibold text-white  text-[38px] leading-[45.6px]">
          Trending Collection
        </h3>
        <p className="font-[400] text-white text-[22px] leading-[35.2px] mt-[10px]">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="mt-[60px] flex items-center gap-[30px] flex-wrap">
        <div className="flex-1">
          <div className="w-[330px]">
            <div className="overflow-hidden">
              <img
                className="object-contain w-[330px]"
                src={img_main_collection}
                alt=""
              />
            </div>
            <div className="overflow-hidden flex gap-[15px] mt-[15px]">
              <img
                className="w-[100px] object-contain"
                src={img_collection_thumbnail}
                alt=""
              />
              <img
                className="w-[100px] object-contain"
                src={img_main_collection}
                alt=""
              />
              <div className="bg-[#a259ff] block w-[100px] rounded-[10px]">
                <p className=" px-4 py-[32.5px] font-bold text-[22px] text-white">
                  1025+
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[15px]">
            <p className="font-semibold text-[22px] text-[white] leading-[30.8px]">
              DSNG Animals
            </p>
            <div className="flex items-center mt-[10px] gap-3">
              <img src={img_fox} className="object-contain size-6" alt="" />
              <p className="text-[16px] text-white leading-[22.4px] font-[400]">
                Mr Fox
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-[330px]">
            <div className="overflow-hidden">
              <img
                className="object-contain w-[330px]"
                src={img_main_collection}
                alt=""
              />
            </div>
            <div className="overflow-hidden flex gap-[15px] mt-[15px]">
              <img
                className="w-[100px] object-contain"
                src={img_collection_thumbnail}
                alt=""
              />
              <img
                className="w-[100px] object-contain"
                src={img_main_collection}
                alt=""
              />
              <div className="bg-[#a259ff] block w-[100px] rounded-[10px]">
                <p className=" px-4 py-[32.5px] font-bold text-[22px] text-white">
                  1025+
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[15px]">
            <p className="font-semibold text-[22px] text-[white] leading-[30.8px]">
              DSNG Animals
            </p>
            <div className="flex items-center mt-[10px] gap-3">
              <img src={img_fox} className="object-contain size-6" alt="" />
              <p className="text-[16px] text-white leading-[22.4px] font-[400]">
                Mr Fox
              </p>
            </div>
          </div>
        </div>  

        <div className="flex-1">
          <div className="w-[330px]">
            <div className="overflow-hidden">
              <img
                className="object-contain w-[330px]"
                src={img_main_collection}
                alt=""
              />
            </div>
            <div className="overflow-hidden flex gap-[15px] mt-[15px]">
              <img
                className="w-[100px] object-contain"
                src={img_collection_thumbnail}
                alt=""
              />
              <img
                className="w-[100px] object-contain"
                src={img_main_collection}
                alt=""
              />
              <div className="bg-[#a259ff] block w-[100px] rounded-[10px]">
                <p className=" px-4 py-[32.5px] font-bold text-[22px] text-white">
                  1025+
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[15px]">
            <p className="font-semibold text-[22px] text-[white] leading-[30.8px]">
              DSNG Animals
            </p>
            <div className="flex items-center mt-[10px] gap-3">
              <img src={img_fox} className="object-contain size-6" alt="" />
              <p className="text-[16px] text-white leading-[22.4px] font-[400]">
                Mr Fox
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
