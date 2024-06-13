import img from "../assets/img/hero.jpg"


const Hero =()=>{
    return(
        <>
       
        <div className=""> 
            <div className="grid  lg:grid-cols-2   ">
            <div className=" flex justify-center mt-[20vh] lg:mt-[30vh] ">
                <img src={img} alt="" srcset="" className="h-96 "/>
            </div>
            <div className=" flex flex-col justify-center pl-7 mt-5 lg:mt-[30vh]">
                <h1 className="text-3xl md:text-5xl lg:text-7xl text-primary font-semibold">Prohealth Plus</h1>
                <h1 className="text-3xl md:text-5xl lg:text-7xl mt-2 text-primary font-semibold">Multispeciality</h1>
                <p className="mr-2 lg:mr-0 lg:w-96 mt-3 ">Welcome to our state-of-the-art clinic, where we provide comprehensive healthcare services to our community.</p>
                <button className="text-white bg-primary w-80 h-16 rounded-md mt-3">Book Appointment</button>
                <a href="" className="mt-10 text-xs">learn more</a>

            </div>

            </div>
            
        </div>
        </>
    )
}

export default Hero;