"use client";

import { Service } from "@/types";
import React, { useState } from "react";

const ServiceCategory = ({ service }) => {
  const { image, title, category } = service;

  const [showServiceItems, setShowServiceItems] = useState(false);

  const handleShowItems = () => {
    setShowServiceItems(!showServiceItems);
    if (handleClick) {
      handleClick();
    }
  };
  return (
    <>
      <div className="w-48 h-auto border-4 border-[#BA704F] rounded">
        <div>
          <img
            src={image}
            alt={title}
            className="h-3/4 w-full rounded mb-4"
          ></img>
        </div>
        <h3 className="text-center uppercase text-white text-base font-semibold">
          {title}
        </h3>
        <div className="flex items-center justify-center py-3">
          <button className=" border-white border-2 w-10 h-10 rounded-full p-2 cursor-pointer hover:bg-orange-800">
            <img
              src="/images/our-service/arrow-icon.png"
              alt="arrow-icon"
              className="w-full h-full"
              onClick={handleShowItems}
            />
          </button>
        </div>
      </div>

      {/* <div>
        {showServiceItems && (
          <div className="grid grid-cols-2">
            {category.map((items) => (
              <div key={items.id}>
                <div>
                  <img src={items.image} alt={items.title} />
                </div>
                <div>
                  <h4>{items.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </div> */}

      {/* <div>
        {showServiceItems ? (
          
        ) : (
          <div className="grid grid-cols-2">
            {category.map((items) => (
              <div key={items.id}>
                <div>
                  <img src={items.image} alt={items.title} />
                </div>
                <div>
                  <h4>{items.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </>
  );
};

export default ServiceCategory;
