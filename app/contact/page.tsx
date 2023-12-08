"use client";

import React, { useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

const Contact: React.FC = () => {
  const initialFormData: ContactFormData = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  };

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

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
    <section className="my-32">
      <h1 className="text-3xl font-bold text-center my-10 uppercase">
        Contact us
      </h1>
      <div className="flex justify-center items-center">
        <div className="max-w-max p-10 flex flex-col-reverse md:flex-row items-center justify-center gap-28 border-2 border[#C08261] rounded">
          <div>
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase mb-2">Email</h3>
              <p className="text-xs text-gray-300">nectarcoffee@gmail.com</p>
            </div>
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase mb-2">phone</h3>
              <p className="text-xs text-gray-300 mb-1">+880-000-000-0000</p>
              <p className="text-xs text-gray-300 mb-1">+880-000-000-0000</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">Address</h3>
              <p className="text-xs text-gray-300 capitalize mb-1">
                Mouchak, kaliakair, Gazipur
              </p>
              <p className="text-xs text-gray-300 capitalize mb-1">
                shafipur , kaliakair, Gazipur
              </p>
              <p className="text-xs text-gray-300 capitalize mb-1">
                Konabari, kaliakair, gazipur
              </p>
              <p className="text-xs text-gray-300 capitalize">
                Chandra, kaliakair, gazipur
              </p>
            </div>
          </div>

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
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-red-900 px-3 py-2 rounded-md border-2 border-white hover:bg-white uppercase"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
