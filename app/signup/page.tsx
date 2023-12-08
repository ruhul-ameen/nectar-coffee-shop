"use client";
import Link from "next/link";
import React, { useState } from "react";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
}

const SignUp = () => {
  const initialFormData: SignUpFormData = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
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
      <h1 className="text-3xl font-bold text-center my-5 uppercase">Sign Up</h1>
      <div className="flex justify-center items-center">
        <div className="max-w-max px-14 py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-28 border-2 border[#C08261] rounded">
          <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-white text-base font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full text-[#6C3428] font-bold outline-none border rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-white text-base font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full text-[#6C3428] font-bold outline-none border rounded-md p-2"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-base font-bold mb-2"
              >
                Email
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
                htmlFor="mobile"
                className="block text-white text-base font-bold mb-2"
              >
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
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
              Have an account?{" "}
              <Link href={"/signin"} className="text-black text-sm">
                Log in
              </Link>
            </p>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-white px-6 py-2 rounded-md border-2 border-white hover:bg-white hover:text-red-900 uppercase"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
