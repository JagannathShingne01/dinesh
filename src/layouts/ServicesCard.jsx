import React from "react";

const ServicesCard = ({ icon, title }) => {
  return (
    <div className="hover:bg-primary/40  text-white group flex flex-col items-center text-center gap-2 w-full lg:w-96 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_1px_2px] rounded-lg cursor-pointer lg:hover:-translate-y-1 transition duration-300 ease-in-out">
      <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h1 className=" font-semibold text-lg  text-backgroundColor">{title}</h1>
      <p className="text-backgroundColor/100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        praesentium asperiores unde veniam, perspiciatis neque!
      </p>

      <h3 className=" text-brightColor cursor-pointer group-hover:text-[#ade9dc] transition duration-300 ease-in-out ">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;
