import React from 'react';
import { MdAccessTimeFilled } from "react-icons/md";

// import LowerFooter from "./LowerFooter";
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: 'Monday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 2,
      c_day: 'Tuesday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 3,
      c_day: 'Wednesday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 4,
      c_day: 'Thursday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 5,
      c_day: 'Friday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 6,
      c_day: 'Saturday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 7,
      c_day: 'Sunday',
      c_time: '11:00 AM-9:00 PM',
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-white py-8" id="contact-us">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-4/5 lg:w-9/10 px-4 py-6 lg:my-12">
          <div className="flex flex-col items-center w-full lg:w-4/5 mb-6 lg:mb-8">
            <div className="w-full h-80 lg:h-96 lg:rounded-lg mb-6">
              <iframe
                title="gmap_location"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.8655159336658!2d77.54131443873763!3d12.989047410413347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7a897bf147%3A0x6b89654d42aaddbb!2sProHealth%20Plus%20-%20Multispeciality%20Clinic%20-%20At%20Apollo%2024%7C7!5e0!3m2!1sen!2sin!4v1718205327039!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-2/5 p-6 lg:p-12 bg-white rounded-lg">
            <div className="mb-4">
              <h2 className="font-poppins ml-2 items-center mb-2 text-primary font-medium text-2xl flex">
                <span className="ml-2">
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                <MdAccessTimeFilled />
                OPD Hours
              </h2>
              <hr />
            </div>
            {clinic_data.map((e, index) => (
              <div className="flex justify-between items-center border-b border-black h-15 p-3" key={index}>
                <p className="font-semibold">{e.c_day}</p>
                <p className="font-semibold">{e.c_time}</p>
              </div>
            ))}
            <div className="flex flex-col lg:flex-row justify-evenly items-center h-38 lg:h-28 mt-1">
              <div className="w-4/5 lg:w-36 h-11 flex items-center justify-center outline outline-2 outline-blue-900 mb-4 lg:mb-0">
                <a
                  href="https://www.google.com/maps?ll=18.978293,73.030934&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=2928691504663646078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 text-sm font-medium uppercase"
                >
                  Clinic Direction
                </a>
              </div>
              <div className="w-4/5 lg:w-36 h-11 flex items-center justify-center outline outline-2 outline-blue-900">
                <a href="tel:9892729909" className="text-blue-900 text-sm font-medium uppercase">
                  Call Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <LowerFooter /> */}
        {/* <div className="w-full h-15 flex items-center justify-center bg-gray-900 text-white mt-6">
          <p className="flex items-center">
            <span className="mx-2">
              <i className="fa-regular fa-copyright"></i>
            </span>
            2023
            <a href="/" id="clinic_name" className="text-blue-500 mx-2 font-bold">
              Om Dental Clinic.
            </a>
            All Rights Reserved
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
