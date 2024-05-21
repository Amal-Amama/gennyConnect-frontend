"use client";
const companyPage = () => {
  const localStorageUserString = localStorage.getItem("user");
  const localStorageUser = localStorageUserString
    ? JSON.parse(localStorageUserString)
    : null;

  const localStorageUserName = localStorageUser.lastName;

  return (
    <div>
      <h1>Company Page</h1>
      <p> welcome {localStorageUserName}</p>
    </div>
  );
};

export default companyPage;
