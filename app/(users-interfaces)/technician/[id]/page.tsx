"use client";
import React from "react";

const technicianInterface = () => {
  const localStorageUserString = localStorage.getItem("user");
  const localStorageUser = localStorageUserString
    ? JSON.parse(localStorageUserString)
    : null;

  const localStorageUserName = localStorageUser.lastName;
  return <div>welcome {localStorageUserName}</div>;
};

export default technicianInterface;
