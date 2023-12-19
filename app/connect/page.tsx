"use client";
import { FC, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ConnectProps {}

const Connect: FC<ConnectProps> = () => {
  const [mounted, setmounted] = useState(false);
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const getInputs = (e ) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "subject") {
      setSubject(e.target.value);
    } else if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit: Function = async (e) => {

e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC__HOST}/api/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, subject, message }),
    });
    let respone = await res.json();
    setEmail("");
    setSubject("");
    setMessage("");
};

useEffect(() => {
    setmounted(true);
}, []);

if (!mounted) {
    return null;
}
console.log(email,subject,message)

  return (
    <>
      <Navbar />
      <Toaster position="top-left" reverseOrder={false} />
      {toast.success("Welcome , happy to connect !")}
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900  mt-2">
            Connect
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
              >
                Your email
              </label>

              <input
              onChange={getInputs}
              value={email}
              type="text"
              id="email"
              name="email"
               
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-800 "
              >
                Subject
              </label>
              <input
               onChange={getInputs}
               value={subject}
               type="text"
               id="subject"
               name="subject"
               
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-blue-100  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how i can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
              >
                Your message
              </label>
              <textarea
               onChange={getInputs}
               value={message}
               type="text"
               id="message"
               name="message"
               
                className="block p-2.5 w-full text-sm text-gray-900 bg-blue-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500   dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center bg-blue-500 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Connect;
