import Image from "next/image";
import logo from "../../../assets/granoCafeLogo.png"
import icon1 from "../../../assets/blackBag.png"
import icon2 from "../../../assets/bolsaCafe (2).png"
import back from "../../../assets/granos.png"

const Footer = () => {
    return (
        <div className="footer-bg text-white" >
            <div className="flex justify-between py-4">

                <div className="flex flex-col ml-2 justify-evenly items-center w-1/3">
                    <div className="flex items-center">
                        <Image src={logo} alt="" className="w-20"/>
                        <div className="text-5xl">
                            <span className="text-orange-600">Coffee</span>
                            <span className="text-black">Late</span>
                        </div>
                    </div>
                    <p className="justify-self-center font-semibold">The managing of real coffee made by the <br />
                        people of Colombia sended to your table</p>
                </div>

                <div className="flex flex-col justify-between items-center w-1/3">
                    <p className="font-bold text-2xl">Contact Us</p>
                    <p>Address: 1859 at Mitre, Atalaya, Buenos Aires, Argentina</p>
                    <p>Phone number: (221) 5663 27 489</p>
                    <p>Email: CoffeeLate@gmail.com</p>
                </div>

                <div className="flex flex-col justify-between items-center mr-2 w-1/3">
                    <span className=" font-bold text-2xl">Most Sellers</span>
                    <div className="flex items-center mt-4">
                        <Image src={icon1} alt="" className="w-10"/>
                        <span>Black Hat with Pistacho</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <Image src={icon2} alt="" className="w-10"/>
                        <span>Brown Splash with red pepper</span>
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