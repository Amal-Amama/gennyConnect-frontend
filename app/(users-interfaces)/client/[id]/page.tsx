"use client";
import Card from "@/app/shared/componenets/Card";
import MaintenanceItem from "../form_elements/maintenanceItem";
const ClientHome = ({ params }: { params: { id: string } }) => {
  const newMaintenanceString = localStorage.getItem("New_maintenance");
  const newMaintenance = newMaintenanceString
    ? JSON.parse(newMaintenanceString)
    : null;
  return (
    <div>
      {/* <Card className="w-96 h-56 flex flex-col justify-center items-center center mt-20 ml-16 text-wrap font-serif">
        <h1 className=" font-bold mb-4">GennyConnect!</h1>
        <p>
          Welcome back to GennyConnect! Let's get those devices humming again!
        </p>
        <br />
        <h3>
          Empowering you to take control of your maintenance needs.
          <span className="underline"> Add a new request today!</span>
        </h3>
      </Card>
      <MaintenanceItem /> */}
      {newMaintenance ? (
        <MaintenanceItem maintenance={newMaintenance} />
      ) : (
        <Card className="w-96 h-56 flex flex-col justify-center items-center center mt-20 ml-16 text-wrap font-serif">
          <h1 className="font-bold mb-4">GennyConnect!</h1>
          <p>
            Welcome back to GennyConnect! Let's get those devices humming again!
          </p>
          <br />
          <h3>
            Empowering you to take control of your maintenance needs.
            <span className="underline"> Add a new request today!</span>
          </h3>
        </Card>
      )}
    </div>
  );
};

export default ClientHome;
