import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const rooms = [
  {
    id: 1,
    name: "Cozy Single Room",
    price: "$500/month",
    image: "https://images.squarespace-cdn.com/content/v1/62ba027bc16a6f49a164b7ae/1659903600963-K7N1CRCEWLZ7Q04V63C3/image-asset.jpeg",
    description: "A comfortable single room with a great view and natural lighting.",
    available: true
  },
  {
    id: 2,
    name: "Modern Studio",
    price: "$800/month",
    image: "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
    description: "A stylish studio with all amenities included.",
    available: false
  },
  {
    id: 3,
    name: "Luxury Suite",
    price: "$1200/month",
    image: "https://populusdenver.com/app/uploads/2024/07/Populus_GroveKing_AmandaProudfit_001.jpg",
    description: "A spacious luxury suite with a private balcony.",
    available: true
  },
  {
    id: 4,
    name: "Budget Room",
    price: "$400/month",
    image: "https://nyanzaheritagehotel.rw/wp-content/uploads/sites/2/2023/06/single-bed-720x480.jpg",
    description: "A budget-friendly room for minimalistic living.",
    available: true
  },
  {
    id: 5,
    name: "Penthouse Suite",
    price: "$2000/month",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326442684.jpg?k=d832c69bc2c72a3139d5c1774b1d0fa587d25e275f386a6588c62b32ee3dc1c9&o=&hp=1",
    description: "An exclusive penthouse with panoramic city views.",
    available: false
  },
  {
    id: 6,
    name: "Shared Room",
    price: "$300/month",
    image: "https://cdn.prod.website-files.com/647f003abb4628bf7e34658d/647f003abb4628bf7e346770_pexels-max-vakhtbovych-6585740.jpg",
    description: "A shared room with access to all common areas.",
    available: true
  },
  {
    id: 7,
    name: "Classic Room",
    price: "$600/month",
    image: "https://www.mydomaine.com/thmb/Q8DMDt_CTfdaII3paIXt15piprE=/1278x0/filters:no_upscale():strip_icc()/ashleymontgomerydesign-e6d79f1eba034603a3e110a0f2af330c.png",
    description: "A classic-style room with wooden interiors.",
    available: false
  },
  {
    id: 8,
    name: "Compact Room",
    price: "$450/month",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRdQyMIRUJzQyXo4UxMtYy4fzsjnljPkBcA&s",
    description: "A small yet efficient room for solo travelers.",
    available: true
  },
  {
    id: 9,
    name: "Deluxe Room",
    price: "$1000/month",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOt3cJqVp3o2o89IYPXKQCghZqNwo-jSnIg&s",
    description: "A deluxe room with modern amenities and spacious design.",
    available: true
  }
];

const App = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Rooms for Rent</h1>
      <h1 className="text-2xl font-bold text-center mb-6">Just call me:+249124057309</h1>
      {selectedRoom ? (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <button 
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={() => setSelectedRoom(null)}
          >
            Back to Listings
          </button>
          <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-[200px] object-cover rounded-lg" />
          <h2 className="text-2xl font-bold mt-4">{selectedRoom.name}</h2>
          <p className="text-xl text-green-600 font-semibold">{selectedRoom.price}</p>
          <p className="mt-2 text-gray-700">{selectedRoom.description}</p>
          <p className={`mt-2 font-bold ${selectedRoom.available ? 'text-green-500' : 'text-red-500'}`}>
            {selectedRoom.available ? "Available" : "Not Available"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className={`bg-white p-4 rounded-lg shadow-md cursor-pointer ${!room.available ? 'opacity-50' : ''}`} 
                 onClick={() => room.available && setSelectedRoom(room)}>
              <img src={room.image} alt={room.name} className="w-full h-[200px] object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{room.name}</h3>
              <p className="text-green-600 font-bold">{room.price}</p>
              <p className={`font-bold ${room.available ? 'text-green-500' : 'text-red-500'}`}>
                {room.available ? "Available" : "Not Available"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;