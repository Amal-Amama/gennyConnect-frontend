"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { TbReportSearch, TbReport } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FiLogOut } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import AddMaintenance from "../form_elements/form-add-maintenance";
const Header = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row bg-slate-300 z-10 h-14 w-full p-4 justify-between border-b-2 border-slate-400">
        <p className=" font-bold">Maintenance Order</p>
        <div className="flex flex-row justify-between items-center  w-32  p-2 ">
          <RiMessengerLine className=" size-7 text-gray-700" />
          <IoMdNotificationsOutline className="size-8  text-gray-700" />
          <CgProfile className=" size-7  text-gray-700" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between bg-slate-300 pt-4 pb-4 pl-8 pr-8">
        <div className="flex flex-row gap-2">
          <div className="flex flex-row justify-center items-center bg-white pl-2 pr-4 rounded-2xl ">
            <BiSearchAlt />
            <input
              type="text"
              placeholder="Search..."
              className=" border-none"
            />
          </div>
          <button className="rounded-2xl bg-white text-black pl-4 pr-4 pb-2 pt-2">
            Search
          </button>
        </div>
        <button
          onClick={() => {
            setOpenForm(true);
          }}
        >
          <Image src="/ajouter.png" alt="" width={40} height={40} />
        </button>
      </div>
      {openForm && <AddMaintenance setOpenForm={setOpenForm} />}
    </div>
  );
};

export default Header;
