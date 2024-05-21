"use client";
import Input from "@/app/shared/FormElements/Input";
import useForm from "@/app/shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "@/app/shared/util/validators";
import React from "react";
import MaintenancePriority from "./priorityInput";
import MaintenanceType from "./requestType";
import ImageUpload from "../../../shared/FormElements/ImageUpload";

const AddMaintenance = ({ setOpenForm }: any) => {
  const accessToken = localStorage.getItem("accessToken");
  const [formState, inputHandler, setFormData] = useForm(
    {
      deviceName: { value: "", isValid: false },
      deviceSerialNumber: { value: "", isValid: false },
      deviceBrand: { value: "", isValid: false },
      deviceModel: { value: "", isValid: false },
      provider: { value: "", isValid: false },
      description: { value: "", isValid: false },
      imageMaintenance: { value: null, isValid: false },
      maintenanceLocation: { value: "", isValid: false },
      requestType: { value: "", isValid: false },
      priority: { value: "", isValid: false },
    },
    false
  );
  const addMaintenanceHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("deviceName", formState.inputs.deviceName?.value);
      formData.append(
        "deviceSerialNumber",
        formState.inputs.deviceSerialNumber?.value
      );
      formData.append("deviceBrand", formState.inputs.deviceBrand?.value);
      formData.append("deviceModel", formState.inputs.deviceModel?.value);
      formData.append("provider", formState.inputs.provider?.value);
      formData.append("description", formState.inputs.description?.value);
      formData.append("image", formState.inputs.imageMaintenance?.value);
      formData.append(
        "maintenanceLocation",
        formState.inputs.maintenanceLocation?.value
      );
      formData.append("requestType", formState.inputs.requestType?.value);
      formData.append("priority", formState.inputs.priority?.value);

      const response = await fetch(
        "http://localhost:5000/maintenance-requests",

        {
          method: "POST",
          headers: { Authorization: `Bearer ${accessToken}` },
          body: formData,
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      localStorage.setItem(
        "New_maintenance",
        JSON.stringify(responseData.createdMaintenanceRequest)
      );
      if (!response.ok) {
        //setError(responseData.message);
        //     throw new Error(responseData.message);
      } else {
        //  setMessage(responseData.message);
        //  setError(null);
      }
    } catch (err: any) {
      // setError(err.message || "Something went wrong, please try again.");
    }
    console.log(formState.inputs);
  };
  return (
    <form
      onSubmit={addMaintenanceHandler}
      className=" flex flex-col p-2 w-[26rem] bg-white  ml-auto mt-2 mr-1 z-10"
    >
      <button
        onClick={() => {
          setOpenForm(false);
        }}
        className="ml-96"
      >
        x
      </button>
      <p className="text-center font-bold"> Add a new Maintenance request</p>
      <div className="flex flex-row gap-2">
        <Input
          element="input"
          id="deviceName"
          type="deviceName"
          label="Device_Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a real and valid device name"
          onInput={inputHandler}
          className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
        />
        <Input
          element="input"
          id="deviceSerialNumber"
          type="deviceSerialNumber"
          label="Device_Serial_Number"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the serail number of the device"
          onInput={inputHandler}
          className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
        />
      </div>
      <div className="flex flex-row gap-2">
        <Input
          element="input"
          id="deviceBrand"
          type="deviceBrand"
          label="Device_Brand"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the brand of the device"
          onInput={inputHandler}
          className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
        />
        <Input
          element="input"
          id="deviceModel"
          type="deviceModel"
          label="Device_Model"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the model of the device"
          onInput={inputHandler}
          className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
        />
      </div>

      <Input
        element="input"
        id="provider"
        type="provider"
        label="Provider"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter the provider of the device"
        onInput={inputHandler}
        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
      />

      <Input
        element="textarea"
        id="description"
        label="Description"
        rows={3}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a detailed description"
        onInput={inputHandler}
      />
      <div className="flex items-center justify-center">
        <ImageUpload
          center
          id="imageMaintenance"
          onInput={inputHandler}
          errorText="provide a valid image"
        />
      </div>
      <Input
        element="input"
        id="maintenanceLocation"
        type="maintenanceLocation"
        label="Maintenance_Location"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter the Location of the device"
        onInput={inputHandler}
        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 mb-4"
      />
      <div className="flex flex-row gap-2">
        <MaintenanceType id="requestType" inputHandler={inputHandler} />
        <MaintenancePriority id="priority" inputHandler={inputHandler} />
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
    </form>
  );
};

export default AddMaintenance;
