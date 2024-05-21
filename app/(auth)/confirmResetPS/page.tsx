"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Platform from "../../componenets/platform_presentation";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import useForm from "../../shared/hooks/form-hook";
import Link from "next/link";
const confirmResetPasswordForm = () => {
  const [message, setMessage] = useState<null | undefined>(undefined);
  const [error, setError] = useState("");
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: "", isValid: false },
      verificationCode: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );
  const resetSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/auth/reset-password-confirmation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            code: formState.inputs.verificationCode.value,
          }),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      } else {
        setMessage(responseData.message);
        setError("");
      }
    } catch (err) {
      setError(
        "Something went wrong, please check your credentiels or try again later."
      );
      setMessage(null);
      throw err;
    }

    console.log(formState.inputs);
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
        <div className=" max-w-3xl w-full  relative flex flex-col rounded-md text-black h-full bg-white mr-40 p-32 mt-16">
          <p className=" text-2xl text-[#7747ff] font-semibold tracking-tighter relative flex items-center pl-8 mb-4 ">
            <span className="absolute h-5 rounded-full left-0 w-5 bg-[#7747ff]"></span>
            Confirm_Reset_Password"
            <span className="absolute h-5 w-5 rounded-full left-0 bg-[#7747ff] animate-ping"></span>
          </p>

          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome to
            <span className="text-[#7747ff] ml-2 mb-10">Genny_Connect</span>
          </div>

          <div className="text-sm font-normal mb-4 mt-4 text-center text-[#1e0e4b]">
            confirm reset password
          </div>
          <form onSubmit={resetSubmitHandler} className="flex flex-col gap-3">
            <div className="block relative">
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
            </div>
            <div className="block relative">
              <Input
                element="input"
                id="verificationCode"
                type="verificationCode"
                label="Code_OTP"
                validators={[VALIDATOR_MAXLENGTH(5)]}
                errorText="Please enter a valid password, at least 5 characters"
                onInput={inputHandler}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <Input
                element="input"
                id="password"
                type="password"
                label="New_Password"
                validators={[VALIDATOR_MINLENGTH(6)]}
                errorText="Please enter a valid password, at least 6 characters"
                onInput={inputHandler}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div>
              <a className="text-sm text-[#7747ff]" href="/login">
                Login again!
              </a>
            </div>
            <button
              type="submit"
              disabled={!formState.isValid}
              className={`
                  text-white font-medium py-2 px-4 rounded-full shadow focus:outline-none ${
                    !formState.isValid
                      ? "bg-gray-400"
                      : "bg-blue-500  hover:bg-blue-700"
                  }`}
            >
              Submit
            </button>
            {error && (
              <p className=" text-red-600 font-sans text-center mt-8">
                {error}
              </p>
            )}
            {message && (
              <p className=" text-cyan-700  mt-8 font-light text-center">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default confirmResetPasswordForm;
