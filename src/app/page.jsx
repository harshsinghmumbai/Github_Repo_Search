"use client";
import Profile_Card from "@/Components/Profile_Card";
import Skeleton_Card from "@/Components/Skeleton_Card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useEffect, useState } from "react";
import { AiFillMoon } from "react-icons/ai";

export default function Home() {
  const [value, setvalue] = useState("harshsinghmumbai");
  const [repos, setRepos] = useState({});
  const [darkMode, setdarkMode] = useState(false);
  const [isloading, setisloading] = useState(true);

  const toggledarkMode = () => {
    setdarkMode(!darkMode);
  };
  const getData = async () => {
    try {
      const url = `https://api.github.com/users/${value}`;
      const response = await fetch(url);
      const data = await response.json();
      setisloading(false);
      setRepos(data);
    } catch (error) {
      console.log("Error during fetching data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <main className="grid place-items-center mt-10 sm:h-screen sm:mt-0">
        <section className={`${darkMode && "dark"}`}>
          {isloading ? (
            <Skeleton_Card />
          ) : (
            <div className="border border-red-600 rounded-xl w-full sm:w-[800px] p-5 dark:bg-[#161616] shadow-2xl">
              <nav className="flex justify-between">
                <p className="text-xl font-semibold font-serif dark:text-white hover:text-blue-600 dark:bg-[#161616]">
                  DevDective
                </p>
                <p className="flex justify-center items-center">
                  <AiFillMoon
                    onClick={toggledarkMode}
                    className="text-3xl dark:text-white cursor-pointer"
                  />
                </p>
              </nav>
              <form className="flex mt-5 justify-center items-center dark:bg-[#161616]">
                <Input
                  type="text"
                  placeholder="Search"
                  value={value}
                  className="text-base font-mono tracking-wider dark:text-white"
                  onChange={(e) => setvalue(e.target.value)}
                />
                <Button className="ml-3" type="submit" onClick={getData}>
                  Search
                </Button>
              </form>
              <Profile_Card repos={repos} />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
