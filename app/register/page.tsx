"use client";
import Image from "next/image";
import React, { useState } from "react";
import Input from "../shared/FormElements/Input";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../shared/util/validators";
import Platform from "../componenets/platform_presentation";
import useForm from "../shared/hooks/form-hook";
import PhoneForm from "./componenets/phone";
import LanguageForm from "./componenets/language";
import ImageUpload from "../shared/FormElements/ImageUpload";
import PDFUpload from "../shared/FormElements/PDFUpload";
import InstitutionType from "./componenets/medInstituteType";

const ROLES = [
  { id: "technician", role: "technician", imageSrc: "/technician_role.png" },
  { id: "company", role: "company", imageSrc: "/company.png" },
  {
    id: "medical_institute",
    role: "medical_institute",
    imageSrc: "/medical_institute_role.png",
  },
];

const Register = () => {
  const [selectedOption, setselectedOption] = useState<string>("");
  const getInitialFormState = (role: string) => {
    switch (role) {
      case "technician":
        return {
          diplome: { value: "", isValid: false },
          speciality: { value: "", isValid: false },
          certifications: { value: [], isValid: false },
          yearsOfExperiens: { value: "", isValid: false },
        };
      case "company":
        return {
          nomcompany: { value: "", isValid: false },
          file: { value: null, isValid: false },
        };
      case "medical_institute":
        return {
          nomInstitution: { value: "", isValid: false },
          activityDomaineofInstitute: { value: "", isValid: false },
          typeOfmedicalInstitute: { value: "", isValid: false },
          file: { value: null, isValid: false },
        };
      default:
        return {};
    }
  };
  const [formState, inputHandler, setFormData] = useForm(
    {
      role: { value: "", isValid: false },
      firstName: { value: "", isValid: false },
      lastName: { value: "", isValid: false },
      password: { value: "", isValid: false },
      email: { value: "", isValid: false },
      location: { value: "", isValid: false },
      languages: { value: "", isValid: false },
      phoneNumber: { value: "", isValid: false },
      ...getInitialFormState(selectedOption),
    },
    false
  );

  const registerSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // await fetch("http://localhost:5000/auth/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: formState.inputs.email.value,
    //     password: formState.inputs.password.value,
    //     role: formState.inputs.inputs.role.value,
    //   }),
    // });
    console.log(formState.inputs);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setselectedOption(event.target.value);
    inputHandler("role", event.target.value, true);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-14">
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
      <div className="flex flex-row justify-between items-start pt-16">
        <Platform />
        <form
          onSubmit={registerSubmitHandler}
          className=" flex flex-col gap-3 max-w-3xl bg-[#fff]  relative rounded-lg w-full h-full  mr-40 p-32 mb-16"
        >
          <p className=" text-2xl text-[royalblue] font-semibold tracking-tighter relative flex items-center pl-8">
            <span className="absolute h-5 rounded-full left-0 w-5 bg-[royalblue]"></span>
            Register
            <span className="absolute h-5 w-5 rounded-full left-0 bg-[royalblue] animate-ping"></span>
          </p>
          <p className=" text-gray-500 text-sm">
            Signup now and get full access to our app.
          </p>
          <p className="text-gray-500 font-serif mt-2">Are you ?:</p>
          <div>
            <ul className="flex justify-center gap-12 items-center w-full">
              {ROLES.map((role) => (
                <li
                  key={role.id}
                  className={`flex flex-col w-24 h-20 p-1 justify-between border rounded-md hover:shadow-2xl ${
                    selectedOption === role.role
                      ? "bg-cyan-800"
                      : " bg-slate-300"
                  }`}
                >
                  <input
                    id="role"
                    type="radio"
                    value={role.role}
                    checked={selectedOption === role.role}
                    onChange={handleOptionChange}
                  />
                  <Image
                    src={role.imageSrc}
                    alt=""
                    width={45}
                    height={45}
                    className="ml-8"
                  />
                </li>
              ))}
            </ul>
          </div>
          <Input
            id="firstName"
            element="input"
            type="text"
            label="LastName"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your Firstname  "
            onInput={inputHandler}
          />
          <Input
            id="lastName"
            element="input"
            type="text"
            label="FirstName"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your lastName  "
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="email"
            type="email"
            label="E-mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a Valid email address"
            onInput={inputHandler}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
          />
          <Input
            element="input"
            id="password"
            type="Password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password,at least 5 characters"
            onInput={inputHandler}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
          <Input
            element="input"
            id="location"
            type="location"
            label="Location"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your location"
            onInput={inputHandler}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
          />

          <PhoneForm id="phoneNumber" inputHandler={inputHandler} />
          <LanguageForm id="languages" inputHandler={inputHandler} />
          {selectedOption === "technician" && (
            <div>
              <p className=" text-orange-600 font-mono font-bold underline">
                technician
              </p>
              <PDFUpload center id="diplome" onInput={inputHandler} />
              <PDFUpload center id="certifications" onInput={inputHandler} />
              <Input
                element="input"
                id="speciality"
                type="speciality"
                label="speciality"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your speciality"
                onInput={inputHandler}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
              />
              <Input
                element="input"
                id="yearsOfExperiens"
                type="number"
                label="Years of experience"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your experiences years"
                onInput={inputHandler}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
              />
            </div>
          )}
          {selectedOption === "medical_institute" && (
            <div>
              <p className="  text-orange-600 font-mono font-bold underline">
                medical_institute
              </p>
              <Input
                element="input"
                id="nomInstitution"
                type="nomInstitution"
                label="Name of Institute"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter the name of the medical institute"
                onInput={inputHandler}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
              />

              <Input
                element="input"
                id="activityDomaineofInstitute"
                type="activityDomaineofInstitute"
                label="activityDomaineofInstitute"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your activity domain"
                onInput={inputHandler}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
              />

              <InstitutionType
                id="typeOfmedicalInstitute"
                inputHandler={inputHandler}
              />
              <ImageUpload center id="file" onInput={inputHandler} />
            </div>
          )}
          {selectedOption === "company" && (
            <div>
              <p className=" text-orange-600 font-mono font-bold underline">
                company
              </p>
              <Input
                element="input"
                id="nomcompany"
                type="nomcompany"
                label="Name of comany"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter the name of the medical institute"
                onInput={inputHandler}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
              />
              <ImageUpload center id="file" onInput={inputHandler} />
            </div>
          )}
          <button
            type="submit"
            disabled={!formState.isValid}
            className={`${
              !formState.isValid
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white font-medium py-2 px-4 rounded-full shadow focus:outline-none`}
          >
            Submit
          </button>
          <p className="text-gray-500 text-sm items-center">
            Already have an acount ?
            <a
              className="text-[royalblue] hover:underline hover:text-blue-500 ml-2"
              href="/login"
            >
              Signin
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
