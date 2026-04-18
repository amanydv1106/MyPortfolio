import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const isEmailConfigured = publicKey && serviceId && templateId;

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, [publicKey]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isEmailConfigured) {
      toast.error("Email service is not configured yet. Please update your .env file.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current)
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section
      id="contact"
      className="section-shell flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24"
    >
      <ToastContainer />

      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mx-auto mt-4 max-w-3xl text-base font-semibold text-gray-400 sm:text-lg">
          I&apos;d love to hear from you. Reach out for any opportunities or questions.
        </p>
      </div>

      <div className="mt-2 w-full max-w-xl rounded-2xl border border-gray-700 bg-[#0d081f] p-5 shadow-lg sm:p-6">
        <h3 className="text-center text-xl font-semibold text-white">
          Connect With Me
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full rounded-md border border-gray-600 bg-[#131025] p-3 text-white focus:border-purple-500 focus:outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full rounded-md border border-gray-600 bg-[#131025] p-3 text-white focus:border-purple-500 focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full rounded-md border border-gray-600 bg-[#131025] p-3 text-white focus:border-purple-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full rounded-md border border-gray-600 bg-[#131025] p-3 text-white focus:border-purple-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={isLoading || !isEmailConfigured}
            className={`w-full rounded-md bg-gradient-to-r from-purple-600 to-pink-500 py-3 font-semibold text-white transition ${
              isLoading || !isEmailConfigured
                ? "cursor-not-allowed opacity-70"
                : "hover:opacity-90"
            }`}
          >
            {isLoading ? "Sending..." : isEmailConfigured ? "Send" : "Configure EmailJS"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
