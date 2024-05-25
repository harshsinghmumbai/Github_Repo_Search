"use client";
import Profile_Card from "@/Components/Profile_Card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useEffect, useState } from "react";
import { AiFillMoon } from "react-icons/ai";

export default function Home() {
  const [value, setvalue] = useState("harshsinghmumbai");
  const [repos, setRepos] = useState({});

  const getData = async () => {
    try {
      const url = `https://api.github.com/users/${value}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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
        <div className="border border-red-600 rounded-xl w-full sm:w-[641px] p-5">
          <nav className="flex justify-between">
            <p className="text-xl font-semibold font-serif hover:text-blue-600">
              DevDective
            </p>
            <p className="flex justify-center items-center">
              <AiFillMoon className="text-2xl" />
            </p>
          </nav>
          <div className="flex mt-5 justify-center items-center">
            <Input
              type="text"
              placeholder="Search"
              value={value}
              className="text-base font-mono tracking-wider"
              onChange={(e) => setvalue(e.target.value)}
            />
            <Button className="ml-3" type="submit" onClick={getData}>
              Search
            </Button>
          </div>
          <Profile_Card repos={repos} />
        </div>
      </main>
    </>
  );
}
