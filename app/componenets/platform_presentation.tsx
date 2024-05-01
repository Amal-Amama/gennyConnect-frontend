import Image from "next/image";
import React from "react";

const Platform = () => {
  const benefits = [
    {
      description: (
        <p>
          <strong>Request Management: </strong> <br />
          Submission and tracking of requests in real time with optimal
          selection of technicians.
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
  return (
    <div className="flex flex-col justify-between w-1/3 pl-40 pr-8  pb-32 font-serif ">
      <Image
        src="/multi_views.jpeg"
        alt="logo"
        width={300}
        height={300}
        className="mb-6 shadow-2xl"
      />
      <p>
        <span className="ml-6"></span> With CennyConnect, benefit from proactive
        and efficient management of your medical equipment, optimize your
        operations and ensure continuity of care.
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
  );
};

export default Platform;
