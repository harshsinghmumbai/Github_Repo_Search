"use client";
import Image from "next/image";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Profile_Card = ({ repos }) => {
  const {
    avatar_url,
    bio,
    created_at,
    id,
    name,
    public_repos,
    location,
    following,
    followers,
  } = repos;
  console.log("repo existts", repos);
  return (
    <>
      <div className="mt-10 sm:mt-5 flex flex-col sm:flex sm:flex-row ">
        <div className="flex justify-center">
          <Image
            src={avatar_url}
            alt="image"
            className="border border-blue-500 rounded-full object-cover w-44 h-44 sm:w-[19rem] sm:h-48"
            width={100}
            height={100}
          />
        </div>
        <div className="sm:ml-5">
          <div className="mt-3 flex justify-between">
            <p className="text-sm sm:text-lg font-semibold font-serif capitalize">
              {name}
            </p>
            <p className="text-sm sm:text-lg font-semibold font-serif text-center">
              {created_at}
            </p>
          </div>
          <p className="text-sm sm:text-lg font-serif capitalize my-2">
            User_Id:- {id}
          </p>
          <p className="text-left sm:text-xl sm:font-serif sm:text-center my-3">
            {bio}
          </p>
          <div className="bg-[#f6f8ff] rounded-xl w-full sm:w-[90%] m-auto sm:m-0 flex justify-around p-2">
            <p className="text-base font-medium sm:text-lg sm:font-semibold font-mono">
              Repository
              <span className="flex ml-5 ">{public_repos}</span>
            </p>
            <p className="text-base font-medium sm:text-lg sm:font-semibold font-mono">
              Follower
              <span className="flex ml-5">{followers}</span>
            </p>
            <p className="text-base font-medium sm:text-lg sm:font-semibold font-mono">
              Following
              <span className="flex ml-5">{following}</span>
            </p>
          </div>
          <div className="w-full sm:w-[90%] m-auto sm:m-0 sm:my-3 mt-3 flex justify-evenly p-2 bg-[#fefce8]">
            <p className="flex justify-center items-center text-base sm:text-lg">
              <BsFillPostcardHeartFill className="text-xl sm:text-3xl mr-3" />
              <span className="sm:text-lg"> {public_repos}</span>
            </p>
            <p className="flex justify-center items-center text-base sm:text-lg capitalize">
              <FaLocationDot className="text-xl sm:text-3xl mr-1" />
              <span className="sm:text-base"> {location}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_Card;
