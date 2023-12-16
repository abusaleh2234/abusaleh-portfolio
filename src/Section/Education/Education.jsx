import { LuGraduationCap } from "react-icons/lu";
const Education = () => {
    return (
        <div>
            <h2 className="uppercase text-4xl font-bold text-[#00bfe7] text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 ">
                <div className="relative rounded-lg group hover:border-[#00bfe7] border border-[#6c757d] ease-in duration-1000 p-5">
                    <div className= "absolute -top-8 group-hover:left-12 ease-in duration-1000  bg-[#0dcaf0] inline-block p-3 rounded-full border border-[#00bfe7] group-hover:bg-[#100028] group-hover:border-[#00bfe7]">
                        <LuGraduationCap className="text-4xl text-white group-hover:text-[#0dcaf0]"/>
                    </div>
                    <div className="pt-3">
                        <h4 className="text-xl font-semibold text-white">Diploma in Computer Engineering</h4>
                        <div className="text-[#6c757d]">
                            <p>Status: Finished</p>
                            <p>Duration: 2018-22</p>
                            <p>Institution: patuakhali polytechnic institute</p>
                            <p>CGPA: 3.61</p>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-lg group hover:border-[#00bfe7] border border-[#6c757d] ease-in duration-1000 p-5">
                    <div className= "absolute -top-8 group-hover:left-12 ease-in duration-1000  bg-[#0dcaf0] inline-block p-3 rounded-full border border-[#00bfe7] group-hover:bg-[#100028] group-hover:border-[#00bfe7]">
                        <LuGraduationCap className="text-4xl text-white group-hover:text-[#0dcaf0]"/>
                    </div>
                    <div className="pt-3">
                        <h4 className="text-xl font-semibold text-white"> Secondary School Certificate </h4>
                        <div className="text-[#6c757d]">
                            <p>Status: Finished</p>
                            <p>Duration: 2017-18</p>
                            <p>Institution: Amtali AK Pilot High School</p>
                            <p>GPA: 4.71</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;