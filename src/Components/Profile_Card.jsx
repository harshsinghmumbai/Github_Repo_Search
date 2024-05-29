"use client";
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

  //convert ISOdate into normal Date//
  const data = new Date(created_at);
  const format_date = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
  return (
    <>
      <div className="mt-10 sm:mt-5 flex flex-col sm:flex sm:flex-row dark:bg-[#161616] ">
        <div className="flex justify-center">
          <img
            src={avatar_url}
            alt="image"
            className="border border-blue-500 rounded-full object-cover w-44 h-44 "
          />
        </div>
        <div className="sm:ml-5">
          <div className="mt-3 flex justify-between">
            <p className="text-base sm:text-2xl font-semibold font-serif capitalize dark:text-white">
              {name}
            </p>
            <p className="text-sm sm:text-lg font-semibold text-center dark:text-white">
              {format_date}
            </p>
          </div>
          <p className="text-sm sm:text-lg capitalize my-2 dark:text-white">
            User_Id:- {id}
          </p>
          <p className="text-left sm:text-xl sm:font-serif sm:text-center my-3 dark:text-white">
            {bio}
          </p>
          <div className="bg-[#f6f8ff] rounded-xl w-full sm:w-[90%] m-auto sm:m-0 flex justify-around p-2 border border-blue-700">
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
          <div className="w-full sm:w-[90%] m-auto sm:m-0 sm:my-3 mt-3 flex justify-evenly p-2 bg-[#fefce8] border border-yellow-400 rounded-xl">
            <p className="flex justify-center items-center text-base sm:text-lg">
              <BsFillPostcardHeartFill className="text-xl sm:text-3xl mr-3" />
              <span className="sm:text-lg"> {public_repos}</span>
            </p>
            <p className="flex justify-center items-center text-base sm:text-lg capitalize">
              <FaLocationDot className="text-xl sm:text-3xl mr-1" />
              <span className="text-sm sm:text-base"> {location}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_Card;
