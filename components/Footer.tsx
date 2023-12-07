import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-10 md:gap-x-6 py-8">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <img src="/images/logo/logo.png" alt="logo" className="w-20 h-20"></img>
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-all"
            viewBox="0,0,256,256"
          >
            <g fill="white" stroke="none">
              <g transform="scale(5.12,5.12)">
                <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-all"
            viewBox="0,0,256,256"
          >
            <g fill="none" stroke="none">
              <g transform="scale(5.33333,5.33333)">
                <path
                  d="M24,4c-11.046,0 -20,8.954 -20,20c0,11.046 8.954,20 20,20c11.046,0 20,-8.954 20,-20c0,-11.046 -8.954,-20 -20,-20z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M36,17.12c-0.882,0.391 -1.999,0.758 -3,0.88c1.018,-0.604 2.633,-1.862 3,-3c-0.951,0.559 -2.671,1.156 -3.793,1.372c-2.418,-2.564 -8.207,-1.617 -8.207,3.628v2c-4,0 -7.9,-3.047 -10.327,-6c-2.254,3.807 1.858,6.689 2.327,7c-0.807,-0.025 -2.335,-0.641 -3,-1c0,0.016 0,0.036 0,0.057c0,2.367 1.661,3.974 3.912,4.422c-0.411,0.113 -0.912,0.521 -2.84,0.521c0.626,1.935 3.773,2.958 5.928,3c-2.617,2.029 -7.126,2.079 -8,1.977c8.989,5.289 22.669,0.513 21.982,-12.477c0.968,-0.682 1.36,-1.396 2.018,-2.38"
                  fill="#8E3200"
                ></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-all"
            viewBox="0,0,256,256"
          >
            <g fill="#ffffff" stroke="none">
              <g transform="scale(5.12,5.12)">
                <path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-all"
            viewBox="0,0,256,256"
          >
            <g fill="#ffffff" stroke="none">
              <g transform="scale(5.12,5.12)">
                <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div>
        <h2 className="uppercase font-semibold mb-4 text-center md:text-left">
          Catch us
        </h2>
        <div className="flex items-center gap-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-white"
            viewBox="0 0 50 50"
          >
            <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
          </svg>
          <p className="text-xs md:text-base text-center md:text-left">
            Mouchak, Gazipur, Dhaka
          </p>
        </div>
        <p className="text-xs md:text-base text-center md:text-left">
          00-000-000-000
        </p>
      </div>
      <div className="w-3/5 lg:w-1/3 flex flex-col items-center md:items-start">
        <h2 className="uppercase font-semibold mb-4 text-center md:text-right">
          subscribe newsletter
        </h2>
        <p className="text-xs md:text-base text-center md:text-left">
          Stay in the loop with the latest updates and exclusive
          content—subscribe to our newsletter for a regular dose of insights
          delivered directly to your inbox. Don't miss out; sign up today!
        </p>
        <div className="flex items-center bg-white w-min h-min py-2 px-2 lg:px-4 mt-4">
          <input
            type="search"
            name="search"
            placeholder="Enter Your Email"
            id=""
            className="text-black outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0,0,256,256"
          >
            <g fill="#000000" stroke="none">
              <g transform="scale(5.12,5.12)">
                <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Footer;
