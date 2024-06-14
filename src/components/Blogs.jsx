import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import img from "../assets/img/doc1.jpg"

const Blogs = () => {
  return (
    <>
    <h1 className="flex justify-center items-center text-5xl font-semibold mt-20 lg:mt-10">Testimonal</h1>
    <div className="grid lg:grid-cols-2 min-h-[70vh]">
      <div className="flex flex-col justify-start ml-10 lg:ml-20 items-start mt-10 lg:mt-36 gap-5 ">
        <h1 className="text-5xl text-brightColor font-medium">From Our <span className="font-bold">Patient</span>.</h1>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsa.</h6>
      </div>
      <div className="mt-8 lg:mt-20 px-10">
        <RiDoubleQuotesL className="text-5xl text-primary"/>
        <p className="mt-3 px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto veniam esse error delectus magnam, tenetur quos accusantium quae! Veritatis voluptate animi eius sapiente saepe, modi nostrum incidunt magni quas similique porro debitis sed corporis, maiores illum sint facere quibusdam fugiat inventore doloribus! Assumenda neque placeat totam sit magni omnis, maiores officiis laborum inventore? Distinctio tempore incidunt, nulla ipsa sit deleniti maxime autem, atque odio porro corrupti animi, aspernatur aut minus quod. Hic culpa voluptas quibusdam alias libero asperiores aliquam quas!"

        </p>
        <div className="flex mt-10 gap-2">
          <img src={img} alt=""className="h-15 w-12 rounded-full" />
          <div>
          <h1 className="text-xl font-semibold text-primary">Name: Dinesh Nadar</h1>
          <h3 className="text-sm">Web Devloper from Mumbai</h3>
          </div>

        </div>
        </div>
        
    </div>
    </>
  );
};

export default Blogs;
