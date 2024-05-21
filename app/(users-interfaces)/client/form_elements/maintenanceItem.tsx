import React from "react";
import Image from "next/image";

const MaintenanceItem = (props: any) => {
  console.log(props);
  return (
    <div>
      <div className="div h-[23em] w-[20em] bg-white  rounded-[1em] overflow-hidden relative group p-2 z-0 flex flex-col justify-between pl-4 ">
        <div className="circle absolute h-[10em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1em]">
          Maintenace_Request
        </h1>
        <Image src="/ajouter.png" alt="" width={40} height={40} />
        <div className="flex flex-row gap-4">
          <h2>{props.maintenance.deviceName}</h2>
          <h2>{props.maintenance.deviceSerialNumber}</h2>
        </div>
        <div className="flex flex-row gap-4">
          <h2>{props.maintenance.deviceBrand}</h2>
          <h2>{props.maintenance.deviceModel}</h2>
        </div>
        <h2>{props.maintenance.provider}</h2>
        <h2>{props.maintenance.description}</h2>

        <h2>{props.maintenance.maintenanceLocation}</h2>
        <div className="flex flex-row gap-8">
          <h2 className=" bg-[#ffd9ad] pt-1 pb-1 pr-4 pl-4 rounded-2xl shadow-md shadow-orange-500 border-none">
            {props.maintenance.requestType}
          </h2>
          <h2 className=" bg-blue-400 pt-1 pb-1 pr-4 pl-4 rounded-2xl shadow-md shadow-blue-500 border-none">
            {props.maintenance.priority}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceItem;
