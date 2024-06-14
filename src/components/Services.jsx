import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { TbRibbonHealth } from "react-icons/tb";
import { MdPregnantWoman } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;
  const icon4 = <TbRibbonHealth size={35} className=" text-backgroundColor" />;
  const icon5 = <MdPregnantWoman size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div className="lg:mx-12">
          <h1 className="text-brightColor text-4xl lg:text-5xl font-semibold text-center flex gap-2">
            <MdMedicalServices className="text-brightColor text-5xl " />
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="mx-20 mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row lg:flex flex-wrap gap-5 justify-center pt-14">
        <ServicesCard icon={icon1} title="Laparoscopic Gynaecology " />
        <ServicesCard icon={icon2} title="Obstetrics Antenatal Care" />
        <ServicesCard icon={icon3} title="Cancer Screening Preventive" />
        <ServicesCard icon={icon4} title="Lactation Counselling" />
        <ServicesCard icon={icon3} title="Gynaec Laparoscopy" />
        <ServicesCard icon={icon5} title="Fertility Treatment" />
      </div>
    </div>
  );
};

export default Services;
