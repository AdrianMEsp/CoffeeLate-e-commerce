import Image from "next/image";
import logo from "../../../assets/granoCafeLogo.png"
import icon1 from "../../../assets/blackBag.png"
import icon2 from "../../../assets/bolsaCafe (2).png"

const Footer = () => {
    return (
        <div className="footer-bg text-white" >

            {/* Logo */}
            <div className="p-5
                        flex items-center ">
                <Image src={logo} alt="" className="w-20" />
                <div className="text-5xl flex">
                    <p className="text-orangeTwo">Coffee</p>
                    <p className="text-gray-500">Late</p>
                </div>
            </div>

            <div className="md:flex md:flex-row md:justify-between py-4
            flex flex-col items-start ml-3">

                {/* Description */}
                <div className="md:flex md:flex-col my-5
                 ml-2 md:justify-evenly md:items-center md:w-1/3">

                    <p className="md:flex md:justify-self-center font-semibold
                        flex text-2xl mt-3
                        ">The managing of real coffee made by the
                        people of Colombia sended to your table</p>
                </div>

                {/* Contact us */}
                <div className="md:flex md:flex-col md:justify-between 
                    md:items-center md:w-1/3">
                    <p className="font-bold text-2xl">Contact Us</p>
                    <p>Address: 1859 at Mitre, Atalaya, Buenos Aires, Argentina</p>
                    <p>Phone number: (221) 5663 27 489</p>
                    <p>Email: CoffeeLate@gmail.com</p>
                </div>

                {/* Most sellers */}
                <div className=" flex flex-col justify-center items-center mt-3
                md:flex md:flex-col md:justify-between md:items-center mr-2 md:w-1/3">
                    <span className=" font-bold text-2xl">Most Sellers</span>
                    <div className="flex mt-4">
                        <div className="md:flex md:items-center mt-4 ml-4">
                            <Image src={icon1} alt="" className="w-10" />
                            <span>Black Hat with Pistacho</span>
                        </div>
                        <div className="md:flex md:items-center md:mt-4 ml-4">
                            <Image src={icon2} alt="" className="w-10" />
                            <span>Brown Splash with red pepper</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center outline p-5">
                <span>Adrian Espindola - All right reserved</span>
            </div>
        </div>
    )
}

export default Footer;