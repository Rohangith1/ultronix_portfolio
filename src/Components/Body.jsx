import React from "react";

const Body = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <img className="" src="./assets/uixLogo.png" alt="" />
      </div>
      <div className="">
        <h1 className="text-5xl font-Fjalla font-bold leading-tight bg-gradient-to-r from-zinc-500 via-amber-400 to-gray-900 bg-clip-text text-transparent ">
          What is UiX?
        </h1>
        <p className="font-Fjalla text-gray-600 gap-5 ">
          UiX is a Upcoming Digital Marketing company which will provide Digital
          growth ... <br />
          Connect with us to create a great network.
        </p>
        <form action="" className="flex flex-col gap-5">
          <input
            type="email"
            className="rounded-md px-5 py-4 font-Fjalla italic"
            placeholder="Enter Your Email"
            name=""
            id=""
          />
          <button
            className="bg-gradient-to-r from-slate-700 via-gray-400 to-slate-600 hover:from-pink-500 hover:to-yellow-500 text-s text-white rounded-md px-4 py-3 font-Fjalla transition duration-150 ease-in-out "
            type="submit"
          >
            Send
          </button>
          <div className="gap-5 flex font-Fjalla">
            <input type="checkbox" className="size-5 " name="" id="" />
            <p>Get updates on Email.</p>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Body;
