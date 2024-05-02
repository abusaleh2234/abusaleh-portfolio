import fblogo from "../../assets/facebook.png"
const About = () => {
    return (
        <div id="about" className="text-center space-y-4">
            <h2 className="uppercase text-4xl font-bold text-[#00bfe7] ">About Me</h2>
            <p className="text-[#827e88]">I&apos;m a Junior Web Developer with intermediate skills in the MERN stack . I&apos;m passionate about creating dynamic and user-friendly web applications. I&apos;m well in HTML, CSS, tailwind, bootstrap, JavaScript ,React JS, Firebase and basic knowledge in Node JS, Express JS and MongoDB. My journey into the world of web development began with curiosity when i was a student of intermediate, and I&apos;m eager to expand my skills into full-stack development, exploring the intricacies of both frontend and backend technologies with a keen interest in software development. I&apos;m committed to continuous learning and staying abreast of industry trends to contribute effectively to innovative projects.</p>
            <div className="flex justify-center items-center gap-5">
                <a href="https://github.com/abusaleh2234" target="blank">
                    <img className="w-12" src="https://skillicons.dev/icons?i=github" alt="github-icon" />
                </a>
                <a href="https://www.linkedin.com/in/md-abusaleh-77b2822a4/" target="blank">
                    <img className="w-12" src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/LinkedIn.svg" alt="github-icon" />
                </a>
                <a href="https://www.facebook.com/abusaleh.abusaleh.397501" target="blank">
                    <img className="w-14" src={fblogo} alt="github-icon" />
                </a>


            </div>
            <button className="px-8 py-1 text-lg  text-white btn rounded-none border-none bg-[#00bfe7] hover:bg-[#1372cb]">See More About Me</button>
        </div>
    );
};

export default About;