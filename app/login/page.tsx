import Image from "next/image";
import React from "react";
const benefits = [
  {
    description: (
      <p>
        <strong>Request Management: </strong> <br />
        Submission and tracking of requests in real time with optimal selection
        of technicians.
      </p>
    ),
  },
  {
    description: (
      <p>
        <strong>Direct Communication: </strong> <br />
        Direct contact with technicians for personalized follow-up and total
        peace of mind
      </p>
    ),
  },
  {
    description: (
      <p>
        <strong> Accurate diagnosis :</strong>
        <br />
        Accurate diagnostics and reporting detailed at each stage for informed
        decisions.
      </p>
    ),
  },
  {
    description: (
      <p>
        <strong>Analysis and Optimization : </strong> <br />
        Advanced analysis for proactive maintenance and reduced operational
        costs.
      </p>
    ),
  },
];
const Login = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-16">
        <div className="flex flex-row justify-between items-center  w-40 pb-4">
          <Image
            src="/logo_gennyconnect.png"
            alt="logo"
            width={50}
            height={50}
          />
          <h1 className=" text-cyan-800 font-bold">GennyConnect</h1>
        </div>
        <h3 className="font-bold text-base text-gray-800">
          #1 Software of Maintenance and Reliability Teams
        </h3>
      </div>
      <div className="flex flex-row justify-between items-start  bg-red-400 ">
        <div className="flex flex-col justify-between w-1/4 pl-16 pr-8 pt-16 pb-32 font-serif">
          <Image
            src="/multi_views.jpeg"
            alt="logo"
            width={300}
            height={300}
            className="mb-6 shadow-2xl"
          />
          <p>
            <span className="ml-6"></span> With CennyConnect, benefit from
            proactive and efficient management of your medical equipment,
            optimize your operations and ensure continuity of care.
          </p>
          <ul>
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex flex-row justify-between items-start w-60 py-2 mt-5 "
              >
                <Image
                  src="/checkbtn.png"
                  alt="checkLoginbnt"
                  width={20}
                  height={20}
                  className="mr-4"
                />
                {benefit.description}
              </li>
            ))}
          </ul>
        </div>

        <div className=" max-w-3xl w-full  relative flex flex-col p-4 rounded-md text-black h-full bg-white mr-40">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome back to
            <span className="text-[#7747ff]">Genny_Connect</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Log in to your account
          </div>
          <form className="flex flex-col gap-3">
            <div className="block relative">
              <label
                htmlFor="email"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="password"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div>
              <a className="text-sm text-[#7747ff]" href="#">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Don’t have an account yet?{" "}
            <a className="text-sm text-[#7747ff]" href="#">
              Sign up for free!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
