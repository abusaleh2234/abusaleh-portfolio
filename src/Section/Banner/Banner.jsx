import porfilepic from "../../assets/profile-pic (4).png"
import  "../../../src/index.css"
const Banner = () => {
    return (
        <div className="">
            <div className="md:pt-12 pt-32 md:flex justify-around items-center gap-6 min-h-screen bg-gradient-to-t from-[#100028] via-[#100028] to-[#00bde5] md:px-16">
                <div className="space-y-3 px-4 md:px-0">
                    <h1 className="md:text-6xl text-4xl font-bold text-white head">HEY, I&apos;m Abu Saleh</h1>
                    <h2 className="md:text-4xl text-3xl font-semibold text-[#00bfe7]">Web Developer </h2>
                    {/* <h2>Web Designer</h2>
                    <h2>React Developer</h2>
                    <h2>MERN stack Developer</h2> */}
                    <p className="text-[#827e88]">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                    <button className="px-10 py-1 text-xl  text-white btn rounded-none border-none bg-[#00bfe7] hover:bg-[#1372cb]">Projects</button>
                    {/* <button style={{backgroundColor: '#3a0ca3',
  boxShadow: 'inset 15px 15px 40px #00bfe7, inset -120px -10px 40px #00bfe7'}} className="focus:outline-none focus:shadow-outline-purple active:bg-purple-900 transition duration-150 ease-in-out">projects</button> */}
                </div>
                <div className="">
                    <img className="md:w-11/12 w-8/12 mx-auto" src={porfilepic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;