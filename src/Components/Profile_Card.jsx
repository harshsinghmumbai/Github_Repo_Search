import Image from "next/image";

const Profile_Card = () => {
  return (
    <>
      <div className="mt-10 flex flex-col">
        <div className="flex justify-center">
          <Image
            src=""
            alt="image"
            className="border border-blue-500 rounded-full w-32 h-32"
          />
        </div>
        <div className="">
          <p className="">harsh singh</p>
        </div>
      </div>
    </>
  );
};

export default Profile_Card;
