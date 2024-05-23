import Image from "next/image";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Profile_Card = () => {
  return (
    <>
      <div className="mt-10 sm:mt-2 flex flex-col">
        <div className="flex justify-center">
          <Image
            src=""
            alt="image"
            className="border border-blue-500 rounded-full w-44 h-44"
          />
        </div>
        <div className="mt-3 flex justify-between">
          <p className="text-sm sm:text-lg font-semibold font-serif capitalize">
            harsh singh
          </p>
          <p className="text-sm sm:text-lg font-semibold font-serif text-center">
            Joined_at :- 16/8/2023
          </p>
        </div>
        <p className="text-sm sm:text-lg font-serif capitalize my-2">
          User_Id:- 145204222
        </p>
        <p className="text-left sm:text-xl sm:font-semibold sm:text-center my-3">
          I aim to become a skilled full Stack web developer as a student every
          day.
        </p>
        <div className="bg-[#f6f8ff] rounded-xl w-full sm:w-[60%] m-auto flex justify-between p-2">
          <p className="text-base sm:text-lg sm:font-semibold font-mono">
            Repository
            <span className="flex ml-5 ">43</span>
          </p>
          <p className="text-base sm:text-lg sm:font-semibold font-mono">
            Follower
            <span className="flex ml-5">0</span>
          </p>
          <p className="text-base sm:text-lg sm:font-semibold font-mono">
            Following
            <span className="flex ml-5">0</span>
          </p>
        </div>
        <div className="w-full sm:w-[60%] m-auto mt-3 flex justify-evenly p-2 bg-[#fefce8]">
          <p className="flex text-base sm:text-lg">
            <BsFillPostcardHeartFill className="text-xl sm:text-3xl mr-3" />
            40
          </p>
          <p className="flex text-base sm:text-lg capitalize">
            <FaLocationDot className="text-xl sm:text-3xl mr-3" />
            India
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile_Card;
