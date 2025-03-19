import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const floors = Array.from({ length: 20 }, (_, i) => `Floor ${i + 1}`);
const apartments = Array.from({ length: 6 }, (_, i) => `Apartment ${i + 1}`);
const apartmentPhotos = {
  "Apartment 1": "https://www.uniondevelopers.com/wp-content/uploads/2022/02/Luxury-Apartments-For-Rent-Sale-In-Lahore.jpg",
  "Apartment 2": "https://www.uniondevelopers.com/wp-content/uploads/2022/02/Luxury-Apartments-For-Rent-Sale-In-Lahore.jpg",
  "Apartment 3": "https://www.uniondevelopers.com/wp-content/uploads/2022/02/Luxury-Apartments-For-Rent-Sale-In-Lahore.jpg",
  "Apartment 4": "https://www.uniondevelopers.com/wp-content/uploads/2022/02/Luxury-Apartments-For-Rent-Sale-In-Lahore.jpg",
  "Apartment 5": "https://www.uniondevelopers.com/wp-content/uploads/2022/02/Luxury-Apartments-For-Rent-Sale-In-Lahore.jpg",
  "Apartment 6": "https://www.uniondevelopers.com/wp-content/uploads/2022/02/Luxury-Apartments-For-Rent-Sale-In-Lahore.jpg",
};

const roomPhotos = {
  "Room": "https://mapartments.co.uk/uploads/transforms/b235c4646ab36ef9ae959de20fa459fc/11257/401_topRenders_b_7abbbb2796f27c91ef535646dc2c5299.webp",
  "Living Room": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3udL9nRD6ZsIRlplM4zN2DFHMQ_q-nyxKe1uXiGz8rX3YXR0iydgQPDTOwowubFH5B0&usqp=CAU",
  "Kitchen": "https://www.oppoliahome.com/wp-content/uploads/2022/04/Gray-Blue-Simple-Kitchen-Design-OBK22-17-2-1.jpg",
  "Bathroom": "https://www.courthomemakers.com/wp-content/uploads/2023/04/IMG_8389-scaled-2-768x576.jpg",
};

const App = () => {
  const [selectedFloor, setSelectedFloor] = useState("Floor 1");
  const [selectedApartment, setSelectedApartment] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 text-white p-4 space-y-1">
        <h2 className="text-xl font-bold mb-2">Floors</h2>
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
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{selectedFloor}</h1>
        
        {!selectedApartment ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {apartments.map((apt) => (
              <div
                key={apt}
                className="p-4 bg-gray-100 rounded-lg shadow hover:scale-105 transition cursor-pointer"
                onClick={() => setSelectedApartment(apt)}
              >
                <img src={apartmentPhotos[apt]} alt={apt} className="w-[500px] h-[300px] object-cover rounded-md" />
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
            <img src={apartmentPhotos[selectedApartment]} alt={selectedApartment} className="w-[500px] h-[300px] object-cover rounded-md mt-2" />
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Object.entries(roomPhotos).map(([room, url]) => (
                <div key={room} className="bg-gray-100 p-4 rounded-lg shadow">
                  <img src={url} alt={room} className="w-[800px] h-[300px] object-cover rounded-md" />
                  <h3 className="text-lg font-semibold mt-2">{room}</h3>
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
