import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../../../src/index.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const Contuct = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f1ogkba', 'template_2qn5bdc', form.current, '0FmtXc3uZNUmsjQBb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    const contacts = [
        {
            id: 1,
            icon: <MdEmail size={30} />,
            title: "Email",
            info: "abusalehmd65@gmail.com",
            link: "mailto:abusalehmd65@gmail.com",
        },
        {
            id: 2,
            icon: <FaLinkedinIn size={30} />,
            title: "LinkedIn",
            info: "Md-Abusaleh",
            link: "https://www.linkedin.com/in/md-abusaleh-77b2822a4",
        },
        {
            id: 3,
            icon: <FaWhatsapp size={30} />,
            title: "WhatsApp",
            info: "+8801719048513",
            link: "https://wa.me/8801719048513",
        },
    ];
    return (
        <div id="contuct" className="bg-[#FFFFFF1A] contuctbg rounded-xl lg:flex items-center gap-6 p-4 md:8 mx-4 xl:mx-0">
            <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold text-center text-white py-5">Get In Touch</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-2">
                    <div className="form-control">
                        <input type="text" name="name" className="bg-transparent inp outline-none border border-[#00bfe7] text-gray-500 text-sm  focus:ring-[#00bfe7] focus:border-[#00bfe7] block w-full p-2.5" placeholder="Your Name" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" className="bg-transparent inp outline-none border border-[#00bfe7] text-gray-500 text-sm  focus:ring-[#00bfe7] focus:border-[#00bfe7] block w-full p-2.5" placeholder="Enter Email" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="subject" className="bg-transparent inp outline-none border border-[#00bfe7] text-gray-500 text-sm  focus:ring-[#00bfe7] focus:border-[#00bfe7] block w-full p-2.5" placeholder="Subject" required />
                    </div>
                    <div className="form-control">
                        <textarea name="message" id="" rows="8" placeholder="Type Your Message" className="bg-transparent inp outline-none border border-[#00bfe7] text-gray-500 text-sm  focus:ring-[#00bfe7] focus:border-[#00bfe7] block w-full p-2.5" ></textarea>                    </div>
                    <div className="form-control pt-3 ">
                        <button className="px-10 py-1 text-xl  inline text-white btn  border-none bg-[#00bfe7] hover:bg-[#1372cb]">Send Message</button>
                    </div>
                </form>

            </div>
            <div className="lg:w-1/2 lg:pt-0 md:pt-10 ">
                <section
                    id="contact"
                    className="py-20 lg:w-2/3 mx-auto"
                >
                    <div className=" mx-auto px-5">
                        <h2 className="text-2xl font-semibold text-center text-white py-5">
                            Talk to Me
                        </h2>

                        <div className="space-y-3">
                            {contacts.map((item) => (
                                <div
                                    key={item.id}
                                    className="group rounded-2xl border border-cyan-400/40 bg-white/10 backdrop-blur-lg p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,191,231,.4)]"
                                >
                                    <div className="flex justify-center text-[#00bfe7] mb-1 group-hover:scale-110 transition">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl font-normal text-white">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-300 mt-1 break-all">
                                        {item.info}
                                    </p>

                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center mt-2 text-[#00bfe7] font-medium hover:text-white transition"
                                    >
                                        Write me
                                        <span className="ml-2 transition-transform group-hover:translate-x-2">
                                            →
                                        </span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d542.6643907916415!2d90.37241016064095!3d23.797384943930165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1702748057822!5m2!1sen!2sbd" className="min-w-full min-h-full lg:w-[450] lg:h-[500]" width="450" height="500" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </div>
    );
};

export default Contuct;