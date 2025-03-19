import React, { useState } from "react";
import "tailwindcss/tailwind.css";
const floors = Array.from({ length: 20 }, (_, i) => `Floor ${i + 1}`);
const apartments = Array.from({ length: 6 }, (_, i) => `Apartment ${i + 1}`);
const apartmentPhotos = {
  "Apartment 1": "https://newprojects.99acres.com/projects/dra_homes/dra_polaris/images/jl6jsbz_1732701116_533817297_O.jpg",
  "Apartment 2": "https://newprojects.99acres.com/projects/dra_homes/dra_polaris/images/jl6jsbz_1732701116_533817297_O.jpg",
  "Apartment 3": "https://newprojects.99acres.com/projects/dra_homes/dra_polaris/images/jl6jsbz_1732701116_533817297_O.jpg",
  "Apartment 4": "https://newprojects.99acres.com/projects/dra_homes/dra_polaris/images/jl6jsbz_1732701116_533817297_O.jpg",
  "Apartment 5": "https://newprojects.99acres.com/projects/dra_homes/dra_polaris/images/jl6jsbz_1732701116_533817297_O.jpg",
  "Apartment 6": "https://newprojects.99acres.com/projects/dra_homes/dra_polaris/images/jl6jsbz_1732701116_533817297_O.jpg",
};

const roomPhotos = {
  "Room": "https://img.easemytrip.com/EMTHOTEL-1703227/72/gr/l/2102841/137946492_P.jpg",
  "Living Room": "https://aw-d.tripcdn.com/images/0226f12000aldyyy0BB23.jpg",
  "Kitchen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/578170345.jpg?k=60076ce0330e8d8dfb949073e3289fe930243fad7db4c7b57e1da75ecbac2adc&o=&hp=1",
  "Bathroom": "https://images.signaturehardware.com/i/signaturehdwr/summer23-powder-room-hero",
};

const App = () => {
  const [selectedFloor, setSelectedFloor] = useState("Floor 1");
  const [selectedApartment, setSelectedApartment] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-500 text-white p-2 space-y-1">
        <h2 className="text-2xl font-bold mb-4">Floors</h2>
        {floors.map((floor) => (
          <p
            key={floor}
            className={`cursor-pointer p-2 rounded hover:bg-gray-600 ${
              selectedFloor === floor ? "bg-red-500" : ""
            }`}
            onClick={() => {
              setSelectedFloor(floor);
              setSelectedApartment(null);
            }}
          >
            {floor}
          </p>
        ))}
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h1 className="text-xl font-bold mb-4">{selectedFloor}</h1>
        
        {!selectedApartment ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {apartments.map((apt) => (
              <div
                key={apt}
                className="p-4 bg-gray-100 rounded-lg shadow hover:scale-105 transition cursor-pointer"
                onClick={() => setSelectedApartment(apt)}
              >
                <img src={apartmentPhotos[apt]} alt={apt} className="w-[400px] h-[400px] object-cover rounded-md" />
                <h3 className="text-lg font-semibold mt-2">{apt}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setSelectedApartment(null)}>
              Back to {selectedFloor}
            </button>
            <h2 className="text-xl font-bold">{selectedApartment} Details</h2>
            <img src={apartmentPhotos[selectedApartment]} alt={selectedApartment} className="w-[300px] h-[300px] object-cover rounded-md mt-2" />
            <div className="grid grid-cols-2 gap-2 mt-1">
              {Object.entries(roomPhotos).map(([room, url]) => (
                <div key={room} className="bg-gray-100 p-2rounded-lg shadow">
                  <img src={url} alt={room} className="w-[800px] h-[300px] object-cover rounded-md mt-1" />
                  <h3 className="text-lg font-semibold ">{room}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
