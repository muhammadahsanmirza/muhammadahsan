import React, { useState } from "react";
import devBlack from "./Images/devBlack.png";
import linkedin from "./Images/linkedin.png";
import emailjs from "emailjs-com";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_email: email,
      message,
    };

    emailjs
      .send(
        "service_vu8r68e",
        "template_t50baia",
        templateParams,
        "6wPIkC5XVakg8xV1y"
      )
      .then(
        (response) => {
          setSubmitted(true);
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Error sending email!");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 2000);
    }, 2000);
  };

  return (
    <div id="contact" className="dark:bg-slate-900">
    <h2 className="text-indigo-600 font-extrabold  text-4xl mt-10 text-center">
              CONTACT
            </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex-1">
          <div className="flex flex-col gap-3 ml-8">
            
            <h1 className="text-3xl dark:text-white">Have a Question?</h1>
            <p className="w-full text-gray-400">
              Do you have an idea? Let's discuss it and see what we can do
              together.
            </p>
          </div>
          <form className="mt-5 p-8 flex flex-col gap-5" onSubmit={sendEmail}>
            <input
              className="p-2 w-full ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <textarea
              className="p-2 w-full ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800  dark:ring-0 dark:text-white"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full  bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer ${
                isSubmitting ? "animate-pulse" : ""
              }`}
            >
              {submitted
                ? "Email Sent!"
                : isSubmitting
                ? "Submitting..."
                : "Submit"}
            </button>
          </form>
        </div>
        <div className="flex justify-center flex-col space-y-2 items-center md:w-1/3 mt-5 md:mt-0">
          <h2 className="text-indigo-600 text-2xl font-extrabold text-center mt-4">
            Connect With Me
          </h2>
          <p className="text-gray-400 dark:text-gray-300 text-center">
            Let's collaborate! Reach out through these platforms.
          </p>

          <div className="flex space-x-2 items-center mt-4 rounded-full">
            <a
              href="https://dev.to/muhammadahsanmirza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={devBlack}
                alt="Dev.to Icon"
                className="w-20 h-16 object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/in/muhammadahsanramzan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
            >
              <img
                src={linkedin}
                alt="LinkedIn Icon"
                className="w-20 h-16 object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-400 dark:text-gray-300">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:work.muhammadahsan@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                work.muhammadahsan@gmail.com
              </a>
            </p>
            <p className="text-gray-400 dark:text-gray-300">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+923045594554"
                className="text-indigo-600 hover:underline"
              >
                +923045594554
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
