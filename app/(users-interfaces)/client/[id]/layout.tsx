// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { CgProfile } from "react-icons/cg";
// import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
// import { TbReportSearch, TbReport } from "react-icons/tb";
// import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
// import { FiLogOut } from "react-icons/fi";
// import { RiMessengerLine } from "react-icons/ri";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { BiSearchAlt } from "react-icons/bi";

// import AddMaintenance from "../form_elements/form-add-maintenance";

// const clientInterface = ({ params }: { params: { id: string } }) => {
//   const [openForm, setOpenForm] = useState(false);
//   const localStorageUserString = localStorage.getItem("user");
//   const localStorageUser = localStorageUserString
//     ? JSON.parse(localStorageUserString)
//     : null;

//   const localStorageUserName = localStorageUser.firstName;

//   return (
//     <div className="flex flex-row">
//       <nav>
//         <ul className="flex flex-col justify-between items-start gap-12 bg-slate-700  h-full p-8 text-white">
//           <Image src="/logoInterface.png" alt="" width={170} height={120} />
//           <p className=" border-b-2"> Welcome {localStorageUserName}</p>
//           <li>
//             <Link
//               href={`/client/${params.id}/profil`}
//               className="flex flex-row gap-2 justify-center items-center hover:bg-gray-50 hover:text-black hover:p-2 hover:w-52  active:bg-slate-500"
//             >
//               <CgProfile />
//               Profil
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/maintenance"
//               className="flex flex-row gap-2 justify-center items-center hover:bg-gray-50 hover:text-black hover:p-2 hover:w-52  active:bg-slate-500"
//             >
//               <HiMiniWrenchScrewdriver />
//               Maintenance_Orders
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/diagnostics"
//               className="flex flex-row gap-2 justify-center items-center  hover:bg-gray-50 hover:text-black hover:p-2 hover:w-52  active:bg-slate-500"
//             >
//               <TbReportSearch />
//               Diagnostic_Reports
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/reports"
//               className="flex flex-row gap-2 justify-center items-center  hover:bg-gray-50 hover:text-black hover:p-2 hover:w-52  active:bg-slate-500"
//             >
//               <TbReport /> Maintenance_Reports
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/factures"
//               className="flex flex-row gap-2 justify-center items-center  hover:bg-gray-50 hover:text-black hover:p-2 hover:w-52 active:bg-slate-500"
//             >
//               <LiaFileInvoiceDollarSolid />
//               Factures
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/"
//               className="flex flex-row gap-2 justify-center items-center mt-12  hover:bg-gray-50 hover:text-black hover:p-2 hover:w-52  active:bg-slate-500"
//             >
//               <FiLogOut />
//               Logout
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="flex flex-col w-full">
//         <div className="flex flex-row bg-slate-300 z-10 h-14 w-full p-4 justify-between border-b-2 border-slate-400">
//           <p className=" font-bold">Maintenance Order</p>
//           <div className="flex flex-row justify-between items-center w-28  p-2 ">
//             <RiMessengerLine className=" size-6" />
//             <IoMdNotificationsOutline className="size-7" />
//             <CgProfile className=" size-6" />
//           </div>
//         </div>
//         <div className="flex flex-row items-center justify-between bg-slate-300 pt-4 pb-4 pl-8 pr-8">
//           <div className="flex flex-row gap-2">
//             <div className="flex flex-row justify-center items-center bg-white pl-2 pr-4 rounded-2xl ">
//               <BiSearchAlt />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className=" border-none"
//               />
//             </div>
//             <button className="rounded-2xl bg-white text-black pl-4 pr-4 pb-2 pt-2">
//               Search
//             </button>
//           </div>
//           <button
//             onClick={() => {
//               setOpenForm(true);
//             }}
//           >
//             <Image src="/ajouter.png" alt="" width={40} height={40} />
//           </button>
//         </div>
//         {openForm && <AddMaintenance setOpenForm={setOpenForm} />}
//       </div>
//     </div>
//   );
// };
import Header from "../componenets/Header";
import Navbar from "../componenets/Navbar";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-row">
      <div>
        <Navbar params={{ id: "" }} />
      </div>
      <div className="flex flex-grow flex-col">
        <div className="w-full h-32 ">
          <Header />
        </div>
        <div className=" flex flex-col pt-4 pl-4 h-full ">{children}</div>
      </div>
    </div>
  );
};

export default ClientLayout;
