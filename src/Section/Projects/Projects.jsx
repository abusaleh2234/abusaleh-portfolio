
import unifood from "../../assets/uni-food-hub.png"
import jobdraft from "../../assets/job-draft.png"
import brandshop from "../../assets/brand-shop.png"
import "../../../src/index.css"
const Projects = () => {
    return (
        <div id="projects" className="py-12 ">
            <h2 className="uppercase text-4xl font-bold text-[#00bfe7] text-center">Projects</h2>
            <div className=" pt-5 space-y-16">
                <div className="rounded-lg md:flex">
                    <div className="md:w-6/12 w-full relative md:h-auto h-80 rounded-lg bg-no-repeat bg-top bg-cover hover:bg-bottom ease-out duration-[8000ms]" style={{ backgroundImage: `url(${unifood})` }}>
                        <a href="https://uni-food-hub-417c0.web.app" target="blank" className="btn bg-black bg-opacity-50 text-[#5ad5ee] border-[#5ad5ee] hover:text-black hover:bg-[#5ad5ee] absolute right-2 top-2">Visit</a>
                    </div>
                    <div className="px-5 md:w-6/12 space-y-2 py-5">
                        <h3 className="text-2xl font-bold text-white">UniFoodHub</h3>
                        <h4 className="text-lg font-semibold text-[#5ad5ee]">MERN Stack Projects</h4>
                        <p className="text-[#6c757d]">This is a Full stack E-Commerce website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform provides a secure authentication system, efficient product exploration, cart management, a seamless checkout process with stripe payment system and ADMIN DASHBOARD.</p>
                        <h5 className="text-[#6c757d]">Uses Tech : <span className="font-bold">React, Node, Firebase, tailwind, Express, Mongodb</span></h5>
                        <p className="font-bold text-[#6c757d] ">Features:</p>
                        <div className="flex items-center justify-between">
                            <ul className="text-[#6c757d]  pl-4">
                                <li>&#9755; Admin Dashboard,User Dashboard</li>
                                <li>&#9755; Cart System,Payment System</li>
                                <li>&#9755; Order Management</li>
                                <li>&#9755; Fully Responsive</li>
                            </ul>
                            <div className="flex flex-col justify-center gap-1">
                                <a href="https://github.com/abusaleh2234/unifoodhub-client" target="blank" className="  btn btn-outline text-[#5ad5ee]">Client</a>
                                <a href="https://github.com/abusaleh2234/unifoodhub-server" target="blank" className="  btn btn-outline text-[#5ad5ee]">Server</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg md:flex flex-row-reverse">
                    <div className="md:w-6/12 w-full h-80 relative md:h-auto rounded-lg bg-no-repeat bg-top bg-cover hover:bg-bottom ease-out duration-[8000ms]" style={{ backgroundImage: `url(${jobdraft})` }}>
                        <a href="https://job-draft-deb43.web.app/" target="blank" className="btn bg-black bg-opacity-50 text-[#5ad5ee] border-[#5ad5ee] hover:text-black hover:bg-[#5ad5ee] absolute left-2 top-2">Visit</a>
                    </div>
                    <div className="px-5 md:w-6/12 space-y-2 py-5 text-right">
                        <h3 className="text-2xl font-bold text-white">JobDraft</h3>
                        <h4 className="text-lg font-semibold text-[#5ad5ee]">MERN Stack Projects</h4>
                        <p className="text-[#6c757d]">This is a Full stack E-Commerce website built using the React (MongoDB, Express.js, React.js) . The platform provides a secure authentication system, efficient product exploration. User route, Admin Route</p>
                        <h5 className="text-[#6c757d]">Uses Tech : <span className="font-bold">React, Node, Firebase, tailwind, Express, Mongodb</span></h5>
                        <p className="font-bold text-[#6c757d] ">Features:</p>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col justify-center gap-1">
                                <a href="https://github.com/abusaleh2234/JobDraft-client" target="blank" className="  btn btn-outline text-[#5ad5ee]">Client</a>
                                <a href="https://github.com/abusaleh2234/JobDraft-server" target="blank" className="  btn btn-outline text-[#5ad5ee]">Server</a>
                            </div>
                            <ul className="text-[#6c757d]  pl-4">
                                <li > Different type Job  &#9754;</li>
                                <li> See Job Details  &#9754;</li>
                                <li> Admin Route, User Route &#9754;</li>
                                <li>Fully Responsive &#9754;</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg md:flex">
                    <div className="md:w-6/12 w-full h-80 relative md:h-auto rounded-lg bg-no-repeat bg-top bg-cover hover:bg-bottom ease-out duration-[5000ms]" style={{ backgroundImage: `url(${brandshop})` }}>
                        <a href="https://brand-shop-5b25c.web.app/" target="blank" className="btn bg-black bg-opacity-50 text-[#5ad5ee] border-[#5ad5ee] hover:text-black hover:bg-[#5ad5ee] absolute right-2 top-2">Visit</a>
                    </div>
                    <div className="px-5 md:w-6/12 space-y-2 py-5">
                        <h3 className="text-2xl font-bold text-white">BrandShop</h3>
                        <h4 className="text-lg font-semibold text-[#5ad5ee]">MERN Stack Projects</h4>
                        <p className="text-[#6c757d]">This is a Full stack E-Commerce website built using the React (MongoDB, Express.js, React.js). The platform provides a secure authentication system, efficient product exploration, cart management..</p>
                        <h5 className="text-[#6c757d]">Uses Tech : <span className="font-bold">React, Node, Firebase, tailwind, Express, Mongodb</span></h5>
                        <p className="font-bold text-[#6c757d] ">Features:</p>
                        <div className="flex items-center justify-between">
                            <ul className="text-[#6c757d]  pl-4">
                                <li>&#9755; Category product</li>
                                <li>&#9755; Product details</li>
                                <li>&#9755; Add to cart</li>
                                <li>&#9755; Fully Responsive</li>
                            </ul>
                            <div className="flex flex-col justify-center gap-1">
                                <a href="https://github.com/abusaleh2234/brand-shop-client" target="blank" className="  btn btn-outline text-[#5ad5ee]">Client</a>
                                <a href="https://github.com/abusaleh2234/brand-shop-server" target="blank" className="  btn btn-outline text-[#5ad5ee]">Server</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="uppercase text-4xl font-bold text-[#00bfe7] text-center pt-12">Contuct</h2>
        </div>

    );
};

export default Projects;