import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import H2P2Ruse from '../../reuse/Heading2'

export const Form = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setSuccess(true);
  };

  return (
    <div className="w-11/12 mx-auto py-20 sm:w-11/12 md:w-10/12 lg:w-9/12">
      <div className="grid gap-4 grid-cols-4 sm:grid-cols-6 lg:grid-cols-10">
        <div className="col-span-4 grid content-center">
          <div className="flex items-center mb-8">
            <div className="w-14 h-14 border-2 rounded-full mr-5 flex justify-center items-center border-slate-600">
              <MdLocationPin className="h-6 w-6" />
            </div>
            <div className="text-left">
              <H2P2Ruse 
              heading4="Location:" 
              para2="Dhamusa, Dasar, Madaripur-7900."/>
              
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-14 h-14 border-2 rounded-full mr-5 flex justify-center items-center border-slate-600">
              <MdEmail className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-medium">Email:</h1>
              <p className="">bepariprantosh360@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-14 h-14 border-2 rounded-full mr-5 flex justify-center items-center border-slate-600">
              <MdPhone className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-medium">Call:</h1>
              <p className="">+880 1833-078059</p>
            </div>
          </div>
        </div>



        <div className="col-span-6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex mb-7">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                className="w-full mr-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your E-mail*"
                className="w-full ml-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject*"
              className="w-full mb-7 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              required
              placeholder="Message*"
              rows="5"
              className="w-full mr-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <div className="flex mt-3">
              <input
                type="submit"
                value="Send Message"
                className="border border-slate-800 px-6 py-3 rounded font-medium text-white cursor-pointer  transition bg-slate-800 hover:bg-slate-700 hover:rounded-none hover:border-slate-700"
              />
            </div>
            {success && (
              <div className="p-4 mt-7 rounded text-white text-xl font-bold bg-green-600">
                Your message was sent Successfully.
              </div>
            )}
          </form>
        </div>



        
      </div>
    </div>
  );
};
