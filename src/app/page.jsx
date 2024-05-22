import Profile_Card from "@/Components/Profile_Card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { AiFillMoon } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <main className="grid place-items-center mt-10">
        <div className="border border-red-600 rounded-xl w-full p-5">
          <nav className="flex justify-between">
            <p className="text-xl font-semibold font-serif hover:text-blue-600">
              DevDective
            </p>
            <p className="flex justify-center items-center">
              <AiFillMoon className="text-2xl" />
            </p>
          </nav>
          <form className="flex mt-5 justify-center items-center">
            <Input type="text" placeholder="Search" />
            <Button size="sm" className="ml-3">
              Search
            </Button>
          </form>
          <Profile_Card />
        </div>
      </main>
    </>
  );
}
