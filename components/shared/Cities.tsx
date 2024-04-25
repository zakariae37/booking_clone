import { getLocations } from "@/lib/actions/location.action";
import React from "react";

const Cities = async () => {
  const result = await getLocations({});
  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-4 text-2xl font-bold">Destinations we love</h1>
      <div className="grid grid-cols-2 gap-4  lg:grid-cols-4">
        {result?.locations && result.locations.length > 0 ? (
          result.locations.map((location) => (
            <div
              key={location.name}
              className="rounded-lg bg-white p-4 shadow-md transition duration-300 hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-semibold">{location.name}</h3>
              <p className="text-gray-600">
                {location.services.length} Properties
              </p>
            </div>
          ))
        ) : (
          <p>No locations found.</p>
        )}
      </div>
    </div>
  );
};

export default Cities;
