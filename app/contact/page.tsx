"use client";
import { FC, useState } from "react";
import Navbar from "../../components/header";
import Footer from "../../components/Footer";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from 'react-icons/fi';
import Link from "next/link";

interface ConnectProps {}

const Connect: FC<ConnectProps> = () => {
  const [isSubtting, setIsSubtting] = useState(false);
  const [sucessmsg, setSucessmsg] = useState(false);
  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const Submission = async (data: FieldValues) => {
    const domain = "https://protfolio-with-next-js-dfx1.vercel.app/";
    const res = await fetch(`${domain}/api/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    });
    let respone = await res.json();
    setIsSubtting(true);

    toast.success("Happy to connect with you");
    reset();
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mt-24">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-600 dark:text-gray-800  mt-2">
            Connect
          </h2>
          <div className="text-gray-600 dark:text-gray-800 hover:cursor-pointer flex text-xl mb-4 hover:text-purple-500">
            <FiMail/>
            <p className="text-sm ml-4">dipakhade214@gmail.com</p>  
          </div>
          <div>
            <ul className="flex mt-4 space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium text-gray-600 dark:text-gray-800  sm:mb-0 mb-6">
              <li>
                <Link href={"https://github.com/DipakKhade"} target="_blank">
                  <FaGithub className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>

              <li>
                <Link href={"https://twitter.com/dipakKhade272"} target="_blank">
                  <FaXTwitter className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>

              <li>
                <Link href={"https://www.linkedin.com/in/dipak-khade-715389252/"} target="_blank">
                  <FaLinkedin className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>

              <li>
                <Link
                  href={
                    "https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=="
                  }
                  target="_blank"
                >
                  <FaInstagram className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit(Submission)} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
              >
                Your email
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="text"
                id="email"
                name="email"
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
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
                {...register("subject")}
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
                placeholder="Let me know how i can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                {...register("message")}
                id="message"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center bg-purple-500 dark:bg-gray-800 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  disabled:bg-gray-800"
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
