import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log("Form submitted:", response.data);
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error("API submission error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "400px", margin: "20px auto" }}
    >
      <h2 className="text-base/7 font-semibold text-white-900">Contact Us</h2>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* <div className="sm:col-span-4"> 
      <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                Username
              </label>
        <input
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div> */}

        <div className="sm:col-span-4">
          <label
            htmlFor="username"
            className="block text-sm/6 font-medium text-white-900"
          >
            Username
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="username"
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-white-900"
          >
            Email
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="email"
                type="text"
                placeholder="Enter your email id"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="message"
            className="block text-sm/6 font-medium text-white-900"
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              defaultValue={""}
            />
          </div>
          {errors.message && (
            <p style={{ color: "red" }}>{errors.message.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>

      {isSubmitSuccessful && (
        <p style={{ color: "green" }}>Form submitted successfully!</p>
      )}
    </form>
  );
};

export default ContactForm;
