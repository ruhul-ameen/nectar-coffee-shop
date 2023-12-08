"use client";
import Link from "next/link";
import React, { useState } from "react";

interface SignUpFormData {
  userName: string;

  email: string;

  password: string;
}

const SignUp = () => {
  const initialFormData: SignUpFormData = {
    userName: "",

    email: "",

    password: "",
  };

  const [formData, setFormData] = useState<SignUpFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...(formData as any),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setFormData(initialFormData);
  };
  return (
    <section className="my-14">
      <h1 className="text-3xl font-bold text-center my-5 uppercase">Login</h1>
      <div className="flex justify-center items-center">
        <div className="max-w-max px-14 py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-28 border-2 border[#C08261] rounded">
          <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white text-base font-bold mb-2"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full text-[#6C3428] font-bold outline-none border rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-base font-bold mb-2"
              >
                Email/Mobile
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-[#6C3428] font-bold outline-none border rounded-md p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white text-base font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full text-[#6C3428] font-bold outline-none border rounded-md p-2"
                required
              />
            </div>
            <p className="text-center my-4 text-xs italic">
              {" "}
              Haven't an account?{" "}
              <Link href={"/signup"} className="text-black text-sm">
                signup
              </Link>
            </p>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-white px-6 py-2 rounded-md border-2 border-white hover:bg-white hover:text-red-900 uppercase"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
