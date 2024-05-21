import React from "react";

const Maintenances = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="underline font-bold mb-4 text-center font-serif">
        Maintenance Requests
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b font-serif">ID</th>
              <th className="py-2 px-4 border-b font-serif">DeviceName</th>
              <th className="py-2 px-4 border-b font-serif">
                Device_Serial_Number
              </th>
              <th className="py-2 px-4 border-b font-serif">Device_Brand</th>
              <th className="py-2 px-4 border-b font-serif">Device_Model</th>
              <th className="py-2 px-4 border-b font-serif">Provider</th>
              <th className="py-2 px-4 border-b font-serif">
                Maintenance_Location
              </th>
              <th className="py-2 px-4 border-b font-serif">Request_Type</th>
              <th className="py-2 px-4 border-b font-serif">Priority</th>
              <th className="py-2 px-4 border-b font-serif">Statut</th>
            </tr>
          </thead>
          <tbody>
            {/* {requests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{request.id}</td>
                <td className="py-2 px-4 border-b">{request.title}</td>
                <td className="py-2 px-4 border-b">{request.description}</td>
                <td className="py-2 px-4 border-b">{request.status}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(request.dateCreated).toLocaleDateString()}
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Maintenances;
