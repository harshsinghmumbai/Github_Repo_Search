import { Skeleton } from "@/components/ui/skeleton";

const Skeleton_Card = () => {
  return (
    <>
      <div className="w-full sm:w-[800px] p-5 border border-gray-200 rounded-xl">
        <nav className="flex justify-between">
          <Skeleton className="h-[30px] w-[115px] rounded-lg" />
          <div className="flex justify-center items-center">
            <Skeleton className="h-[30px] w-[30px] rounded-full" />
          </div>
        </nav>
        <form className="flex mt-5 justify-center items-center">
          <Skeleton className="h-[40px] w-full rounded-lg" />
          <Skeleton className="h-[40px] w-[78px] ml-3 rounded-lg" />
        </form>
        <div className="mt-10 sm:mt-5 flex flex-col sm:flex sm:flex-row">
          <div id="Images" className="flex justify-center">
            <Skeleton className="h-44 w-44 rounded-full" />
          </div>
          <div className="sm:ml-5 space-y-4 w-full">
            <div id="title" className="mt-3 flex justify-between">
              <div className="h-[28px] w-[115px]">
                <Skeleton className="h-[28px] w-[115px] rounded-lg" />
              </div>
              <div className="h-[28px] w-[115px]">
                <Skeleton className="h-[28px] w-[115px] rounded-lg ml-2" />
              </div>
            </div>
            <Skeleton className="h-[28px] w-[115px] rounded-lg" />
            <Skeleton className="h-[35px] w-full rounded-lg" />
            <Skeleton className="rounded-xl w-full sm:w-[90%] m-auto sm:m-0 flex justify-around p-2">
              <Skeleton className="h-[35px] w-full rounded-lg" />
            </Skeleton>
            <Skeleton className="w-full sm:w-[90%] m-auto sm:m-0 sm:my-3 mt-3 flex justify-evenly p-2 rounded-xl">
              <div className="flex justify-center items-center text-base sm:text-lg">
                <Skeleton className="h-[30px] w-[30px] rounded-full" />
              </div>
              <div className="flex justify-center items-center text-base sm:text-lg capitalize">
                <Skeleton className="h-[30px] w-[30px] rounded-full" />
              </div>
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skeleton_Card;
