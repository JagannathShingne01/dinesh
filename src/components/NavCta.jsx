import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoTimeOutline } from "react-icons/io5";

const NavCta = () => {
  return (
    <div className="hidden lg:block w-full h-[7vh] bg-primary text-white font-medium">
      <div className="flex justify-center items-center gap-10">
        <p className="mt-3 flex">
            <TfiEmail className="mt-1 mr-1"/>
            email: jagannath@gmail.com</p>
        <p className="mt-3 flex">
          <FiPhoneCall className="mt-1 mr-1"/>
          Helpline +91 48435 97683
        </p>
        <p className="mt-3 flex">
          <IoTimeOutline className="mt-1 mr-1"/>
          Mon - Sat 9:00 to 5:00
        </p>
      </div>
    </div>
  );
};

export default NavCta;
