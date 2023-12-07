"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    console.log("Form submitted:", formData);
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
          <div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
              <div className="flex gap-8">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-white text-base font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-[#6C3428] font-bold outline-none border rounded-md p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-white text-base font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    value={formData.name}
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
                  htmlFor="email"
                  className="block text-white text-base font-bold mb-2"
                >
                  Phone
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
