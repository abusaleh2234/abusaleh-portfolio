import { Link } from "react-scroll";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../../assets/abusaleh-high-resolution-logo-transparent.png"
const Footer = () => {
    return (
        <div className="bg-gradient-to-t from-[#00bde5] via-[#100028] to-[#100028]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4">
                <div className="">
                    <img className="w-40 pb-4" src={logo} alt="" />
                    <p className="text-white">When I am working on a problem I never think about beauty but when I have finished, if the solution is not beautiful, I know it is wrong</p>
                </div>
                <div className="">
                    <h3 className="text-3xl text-[#00bde5] font-bold ">Links</h3>
                    <ul className="text-white ">
                        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={250} className="cursor-pointer hover:text-[#00bde5]">Home</Link></li>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={250} className="cursor-pointer hover:text-[#00bde5]">About</Link></li>
                        <li><Link activeClass="active" to="skills" spy={true} smooth={true} duration={250} className="cursor-pointer hover:text-[#00bde5]">Skills</Link></li>
                        <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={250} className="cursor-pointer hover:text-[#00bde5]">Projects</Link></li>
                        <li><Link activeClass="contuct" to="contuct" spy={true} smooth={true} duration={250} className="cursor-pointer hover:text-[#00bde5]">Contuct</Link></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-3xl text-[#00bde5] font-bold">Adresss</h3>
                    <ul className="text-white">
                        <li className="hover:text-[#00bde5]"><FaLocationDot className="inline"/>  Dhaka, Bangladesh</li>
                        <li className="hover:text-[#00bde5]"><a href="tel:+880 017XXXXXXXX"><FaPhone className="inline"/>  +880 17********</a></li>
                        <li className="hover:text-[#00bde5]"><a href="mailto: abusalehmd65@gmail.com"><IoMdMail className="inline"/>  abusalehmd65@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t py-5">
                <p className="text-white text-center">Copyright © 2023. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;