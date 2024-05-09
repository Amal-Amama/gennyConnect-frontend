"use client";
import Image from "next/image";
import React, { useState } from "react";
import Platform from "../componenets/platform_presentation";
import Input from "../shared/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validators";
import useForm from "../shared/hooks/form-hook";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const [error, setError] = useState<null | undefined>(undefined);
  const [message, setMessage] = useState<null | undefined>(undefined);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );
  const switchResetHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, password: { value: "", isValid: false } },
        false
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          password: undefined,
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const response = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        } else {
          setMessage(responseData.message);
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong, please try again.");
        throw err;
      }
    } else if (
      !isLoginMode &&
      formState.inputs.email.isValid &&
      formState.isValid
    ) {
      try {
        const response = await fetch(
          "http://localhost:5000/auth/reset-password",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formState.inputs.email.value,
            }),
          }
        );
        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
          throw new Error(responseData.message);
        } else {
          setMessage(responseData.message);
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong, please try again.");
        throw err;
      }
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
            {isLoginMode ? "Login" : "Reset_Password"}
            <span className="absolute h-5 w-5 rounded-full left-0 bg-[#7747ff] animate-ping"></span>
          </p>
          {isLoginMode && (
            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
              Welcome back to
              <span className="text-[#7747ff] ml-2 mb-10">Genny_Connect</span>
            </div>
          )}
          <div className="text-sm font-normal mb-4 mt-4 text-center text-[#1e0e4b]">
            {isLoginMode
              ? " Log in to your account"
              : "reset your password and login again"}
          </div>
          <form onSubmit={loginSubmitHandler} className="flex flex-col gap-3">
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

            {isLoginMode && (
              <div className="block relative">
                <Input
                  element="input"
                  id="password"
                  type="password"
                  label="Password"
                  validators={[VALIDATOR_MINLENGTH(6)]}
                  errorText="Please enter a valid password, at least 6 characters"
                  onInput={inputHandler}
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
            )}
            <div>
              <button
                onClick={switchResetHandler}
                className="text-sm text-[#7747ff]"
              >
                {isLoginMode ? "Forgot your password?" : "Login again"}
              </button>
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
            {!isLoginMode && (
              <p className=" text-center text-orange-600 font-serif">
                Please enter your email again and submit!
              </p>
            )}
          </form>
          {isLoginMode && (
            <div className="text-sm text-center mt-[1.6rem]">
              Don’t have an account yet?<span className="mr-2"></span>
              <a className="text-sm text-[#7747ff]" href="/register">
                Sign up for free!
              </a>
            </div>
          )}
          {isLoginMode && error && (
            <p className=" text-red-600 font-sans text-center mt-8">{error}</p>
          )}
          {message && (
            <p className=" text-cyan-700  mt-8 font-light text-center">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
