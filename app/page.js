"use client";
import React, { useState, useCallback } from "react";

const page = () => {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "`~!@#$%^&*()-_{}[]|/?<>.,+*";
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: "black" }}>
        <h1 className="text-4xl text-white py-10 text-center font-sans">
          Random Password Generator
        </h1>
        <div className="w-full max-w-md mx-130 shadow-md rounded-xl px-3 py-2 text-orange-400 bg-gray-400 text-2xl overflow-hidden flex">
          <div className="outline-none bg-white rounded-xl ms-2 my-3">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="outline-none px-4 py-3"
              readOnly
            />
          </div>
          <button className="bg-blue-600 outline-none rounded-xl px-6 py-0 my-3 text-white">
            Copy
          </button>
        </div>

        <div className="flex gap-x-2">
          <div className="flex justify-center mx-130 py-8 gap-x-4">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-orange-400 text-md">Length: {length}</label>

            <div className="gap-x-4">
              <input
                type="checkbox"
                defaultChecked={numAllow}
                className="cursor-pointer"
                onChange={() => {
                  setNumAllow((prev) => !prev);
                }}
              />
              <label className="text-orange-400 text-md ms-1">Number</label>
            </div>

            <div className="gap-x-4">
              <input
                type="checkbox"
                defaultChecked={charAllow}
                className="cursor-pointer"
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}
              />
              <label className="text-orange-400 text-md ms-1">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
