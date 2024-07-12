
const Skills = () => {
    return (

        <div id="skills" className="p-10 space-y-4">
            <h2 className="uppercase text-4xl font-bold text-[#00bfe7] text-center">Skills</h2>
            <h2 className="uppercase text-2xl font-bold text-[#00bfe7] text-center">Front-End</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className=" bg-[#22223b] rounded-t-lg flex gap-2">
                    <div className="w-full">
                        <div className="p-2 flex gap-2 items-center">
                            <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg" alt="" />
                            <h3 className="text-xl font-medium text-white">HTML 5</h3>
                        </div>
                        <div className="h-3 text-center bg-[#48cae4] text-[12px] leading-none font-bold" style={{ width: "90%" }}>95%</div>
                    </div>

                </div>
                <div className=" bg-[#22223b] rounded-t-lg">
                    <div className="p-2 flex gap-2 items-center">
                        <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg" alt="" />
                        <h3 className="text-xl font-medium text-white">CSS 3</h3>
                    </div>
                    <div className="h-3 text-center bg-[#48cae4] text-[12px] leading-none font-bold" style={{ width: "85%" }}>85%</div>
                </div>
                <div className=" bg-[#22223b] rounded-t-lg">
                    <div className="p-2 flex gap-2 items-center">
                        <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Bootstrap.svg" alt="" />
                        <h3 className="text-xl font-medium text-white">Bootstrap</h3>
                    </div>
                    <div className="h-3 text-center bg-[#48cae4] text-[12px] leading-none font-bold" style={{ width: "75%" }}>75%</div>
                </div>
                <div className=" bg-[#22223b] rounded-t-lg">
                    <div className="p-2 flex gap-2 items-center">
                        <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" alt="" />
                        <h3 className="text-xl font-medium text-white">Tailwindcss</h3>
                    </div>
                    <div className="h-3 text-center bg-[#48cae4] text-[12px] leading-none font-bold" style={{ width: "85%" }}>85%</div>
                </div>
                <div className=" bg-[#22223b] rounded-t-lg">
                    <div className="p-2 flex gap-2 items-center">
                        <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg" alt="" />
                        <h3 className="text-xl font-medium text-white">JavaScript</h3>
                    </div>
                    <div className="h-3 text-center bg-[#48cae4] text-[12px] leading-none font-bold" style={{ width: "60%" }}>60%</div>
                </div>
                <div className=" bg-[#22223b] rounded-t-lg">
                    <div className="p-2 flex gap-2 items-center">
                        <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" alt="" />
                        <h3 className="text-xl font-medium text-white">React JS</h3>
                    </div>
                    <div className="h-3 text-center bg-[#48cae4] text-[12px] leading-none font-bold" style={{ width: "75%" }}>75%</div>
                </div>


            </div>
            <h2 className="uppercase text-2xl font-bold text-[#00bfe7] text-center">Back-End</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className=" bg-[#22223b] rounded-t-lg">
                    <div className="p-2 flex gap-2 items-center">
                        <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/ExpressJS-Dark.svg" alt="" />
                        <h3 className="text-xl font-semibold text-white">Express</h3>
                    </div>
                    <div className="h-3 text-center bg-[#48cae4] text-[12px] leading-none font-bold" style={{ width: "60%" }}>60%</div>
                </div>
                <div className=" bg-[#22223b] rounded-t-lg">
                <div className="p-2 flex gap-2 items-center">
                        <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg" alt="" />
                        <h3 className="text-xl font-semibold text-white">MongoDB</h3>
                    </div>
                    <div className="h-3 text-center bg-[#48cae4] text-[12px] leading-none font-bold" style={{ width: "70%" }}>70%</div>
                </div>
                <div className=" bg-[#22223b] rounded-t-lg">
                <div className="p-2 flex gap-2 items-center">
                        <img className="w-8" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg" alt="" />
                        <h3 className="text-xl font-semibold text-white">Node.js</h3>
                    </div>
                    <div className="h-3 text-center bg-[#48cae4] text-[12px] leading-none font-bold" style={{ width: "40%" }}>40%</div>
                </div>
            </div>
            <h2 className="uppercase text-2xl font-bold text-[#00bfe7] text-center p-4">Tools</h2>
            <div className=" flex flex-wrap justify-center items-center gap-3">
                <img className="w-16" src="https://skillicons.dev/icons?i=firebase" alt="firebase-icon" />
                <img className="w-16" src="https://skillicons.dev/icons?i=vercel" alt="vercel-icon" />
                <img className="w-16" src="https://skillicons.dev/icons?i=figma" alt="figma-icon" />
                <img className="w-16" src="https://skillicons.dev/icons?i=git" alt="git-icon" />
                <img className="w-16" src="https://skillicons.dev/icons?i=github" alt="github-icon" />
                <img className="w-16" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VSCode-Dark.svg" alt="vscode-icon" />
            </div>
        </div>
    );
};

export default Skills;