"use client";
import { FC, useEffect, useState } from "react";
import Navbar from "../../components/header";
import Footer from "../../components/Footer";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import About from "@/components/About";
import {useSession , signIn, signOut} from 'next-auth/react'
interface ConnectProps {}

const Connect: FC<ConnectProps> = () => {

  
  const {data:session , status} = useSession()
// console.log(session)
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

    toast.success("Message send successfully ");
    reset();


  };
 

  return (
    <>
      <Navbar />
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mt-6">
         
          
          <About/>

          <form onSubmit={handleSubmit(Submission)} className="space-y-8">
          <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                {...register("subject")}
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
               
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
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
                className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
                placeholder=""
                required
              />
            </div>
           
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium  "
              >
                Your Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center bg-blue-500 dark:bg-gray-800 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  disabled:bg-gray-800"
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
