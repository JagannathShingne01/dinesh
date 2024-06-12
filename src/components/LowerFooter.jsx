// import React from 'react';
// import { HashLink } from 'react-router-hash-link';
// // import about_long_des_data from '../Pages/PagesData/AboutData';
// // import footer_01 from '../Pages/images/footer_01.jpg';
// // import footer_02 from '../Pages/images/footer_01.jpg';

// function LowerFooter() {
//   const contact_recent_data = [
//     {
//       index: 1,
//       rp_img: footer_01,
//       rp_text:
//         'Tooth problems are nothing less than an emergency no matter how minor or major the problem might be. Dental problems are varied and knowing how to handle them can actually go a long way in preventing long term damage.',
//       rp_btn: 'read more',
//     },
//     {
//       index: 2,
//       rp_img: footer_02,
//       rp_text:
//         'Although brushing and flossing are two important daily oral hygiene routines for maintaining the health of your teeth and gums, there are a few other simple things you can do to prevent tooth decay.',
//       rp_btn: 'read more',
//     },
//   ];

//   const nav_data = [
//     { index: 1, link_to: '/#home', nav_name: 'Home' },
//     { index: 2, link_to: '/#about-doctors', nav_name: 'About' },
//     { index: 3, link_to: '/#our-services', nav_name: 'Treatments' },
//     {
//       index: 4,
//       link_to: '/dental-clinic/appointment',
//       nav_name: 'Appointment',
//     },
//     { index: 5, link_to: '/#contact-us', nav_name: 'Contact Us' },
//   ];
//   const contact_data = [
//     {
//       index: 1,
//       title: 'Email:',
//       cu_data: ' ghadgekomal51@gmail.com',
//     },
//     {
//       index: 2,
//       title: 'Phone:',
//       cu_data: ' 7261922208',
//     },
//   ];

//   const contact_link = [
//     {
//       index: 1,
//       img: <i className="fa-brands fa-facebook-f"></i>,
//       on_link: 'https://www.facebook.com/',
//     },
//     {
//       index: 2,
//       img: <i className="fa-brands fa-instagram"></i>,
//       on_link: 'https://www.instagram.com/',
//     },
//     {
//       index: 3,
//       img: <i className="fa-brands fa-twitter"></i>,
//       on_link: 'https://www.twitter.com/',
//     },
//     {
//       index: 4,
//       img: <i className="fa-sharp fa-solid fa-globe"></i>,
//       on_link: 'https://omdentalclinic.vercel.app/#home',
//     },
//   ];
//   return (
//     <div className="flex flex-col md:flex-row w-full bg-[#020b31] items-center justify-center p-7">
//       <div className="flex flex-col md:w-[350px]">
//         <h2 className="text-white font-medium mb-2">About Us</h2>
//         <p className="text-[#b1b1b1] font-medium leading-[27px]" data-aos="fade-right">{about_long_des_data.text}</p>
//       </div>
//       <div className="flex flex-col items-center md:w-[323px] md:ml-5 mt-5 md:mt-0">
//         <h2 className="text-white font-medium mb-2">Recent Post</h2>
//         {contact_recent_data.map((data, index) => (
//           <div
//             className="flex items-center justify-around gap-5 my-2"
//             key={index}
//             data-aos="fade-down"
//             data-aos-duration="1000"
//           >
//             <img src={data.rp_img} alt="" className="h-20 w-20" />
//             <div className="flex flex-col">
//               <p className="overflow-hidden text-ellipsis h-[73px] flex-wrap text-[#b1b1b1] font-medium leading-[27px]">{data.rp_text}</p>
//               <a href="#" className="text-[#0396fe] no-underline">{data.rp_btn}</a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-col md:w-[237px] md:px-[30px] md:py-0 py-7 mt-5 md:mt-0">
//         <h2 className="text-white font-medium mb-2">Footer Menu</h2>
//         <div className="flex flex-col gap-2 text-[#b1b1b1] font-medium leading-[27px]">
//           {nav_data.map((data, index) => (
//             <HashLink
//               className="no-underline"
//               key={index}
//               to={data.link_to}
//               data-aos="fade-down"
//               data-aos-duration="1000"
//             >
//               {data.nav_name}
//             </HashLink>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col md:w-[350px] mt-5 md:mt-0">
//         <h2 className="text-white font-medium mb-2">Contact Us</h2>
//         <div
//           className="mb-2 text-[#b1b1b1] font-medium leading-[27px]"
//           data-aos="fade-down"
//           data-aos-duration="1000"
//         >
//           <address>
//             plot no 178, Shop- C13, Sai Sapphire, 180, Sector 20, Ulwe,
//             Maharashtra 410206, India
//           </address>
//         </div>
//         <div className="mb-2 text-[#b1b1b1] font-medium leading-[27px]">
//           {contact_data.map((data, index) => (
//             <p
//               className="mb-2"
//               key={index}
//               data-aos="fade-down"
//               data-aos-duration="1000"
//             >
//               <span className="text-[#0396fe]">{data.title} </span>
//               {data.cu_data}
//             </p>
//           ))}
//         </div>
//         <div className="flex items-center -ml-2">
//           {contact_link.map((data, index) => (
//             <a
//               className="w-[50px] h-[50px] m-2 flex items-center justify-center bg-[#3b3b3b70] text-white text-[18px] rounded-full cursor-pointer font-poppins no-underline"
//               key={index}
//               href={data.on_link}
//             >
//               {data.img}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LowerFooter;
