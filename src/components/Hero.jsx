import img from "../assets/img/hero.jpg"


const Hero =()=>{
    return(
        <>
        <div className="mt-[18vh]"> 
            <div className="grid grid-cols-2 lg:h-[60vh] ">
            <div className=" flex justify-center mt-6">
                <img src={img} alt="" srcset="" className="h-96 "/>
            </div>
            <div className="flex flex-col justify-center pl-7">
                <h1 className="md:text-7xl text-primary font-semibold">Prohealth Plus</h1>
                <h1 className="md:text-7xl mt-2 text-primary font-semibold">Multispeciality</h1>
                <p className="w-96 mt-3">Welcome to our state-of-the-art clinic, where we provide comprehensive healthcare services to our community.</p>
                <button className="text-white bg-primary w-80 h-16 rounded-md mt-3">Book Appointment</button>
                <a href="" className="mt-10 text-xs">learn more</a>

            </div>

            </div>
            
        </div>
        </>
    )
}

export default Hero;