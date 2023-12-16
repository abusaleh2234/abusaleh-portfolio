import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../../../src/index.css"


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
    return (
        <div id="contuct" className="bg-[#FFFFFF1A] contuctbg rounded-xl md:flex items-center gap-6 p-8">
            <div className="md:w-1/2">
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
            <div className="md:w-1/2 hidden md:block">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d542.6643907916415!2d90.37241016064095!3d23.797384943930165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1702748057822!5m2!1sen!2sbd" className="min-w-full min-h-full" width="450" height="500" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Contuct;