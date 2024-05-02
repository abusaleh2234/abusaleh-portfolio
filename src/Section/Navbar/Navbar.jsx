import { Link } from "react-scroll";
import logo from "../../assets/abusaleh-high-resolution-logo-transparent.png"
import pdf from "../../assets/Resume_of_Abusaleh-.pdf"

const Navbar = () => {

    const menu = <>
        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={250} className="cursor-pointer px-3">Home</Link></li>
        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={350} className="cursor-pointer px-3">About</Link></li>
        <li><Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} className="cursor-pointer px-3">Skills</Link></li>
        <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000} className="cursor-pointer px-3">Projects</Link></li>
        <li><Link activeClass="active" to="contuct" spy={true} smooth={true} duration={1500} className="cursor-pointer px-3">Contuct</Link></li>
        <li>
            <a href={pdf} className="px-5 py-1  text-white btn rounded-lg border-none bg-[#00bfe7] hover:bg-[#1372cb]" download>Resume</a>
        </li>
    </>
    return (
        <nav className="bg-[#08658c]  border rounded-lg border-[#00bfe7] dark:bg-gray-900"> 
        {/* fixed w-10/12 z-50 */}
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Logo" />
                </a>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm items-center dropdown-content mt-5 -ml-32  z-[1] left-0 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex items-center  p-4 md:p-0 text-white ">
                        {menu}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
