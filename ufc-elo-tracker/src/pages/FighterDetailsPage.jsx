import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FighterDetailPage = () => {
  const { fighterId } = useParams(); // Get the fighterId from the URL
  const [fighter, setFighter] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch fighter details based on fighterId
    axios
      .get(`http://localhost:5000/api/fighters/${fighterId}`)
      .then((response) => {
        if (response.data) {
          setFighter(response.data);
        } else {
          setError("Fighter not found");
        }
      })
      .catch(() => {
        setError("Failed to fetch fighter details");
      });
  }, [fighterId]);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!fighter) {
    return <p className="text-gray-500 text-center">Loading...</p>;
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col p-4 md:p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 text-white">
        {fighter.name}'s Details
      </h2>
      <div className="mt-6 flex flex-col lg:flex-row shadow-lg p-4 md:p-6 rounded-lg border border-gray-300 bg-gray-800">
        <div className="flex flex-col items-center lg:flex-row lg:basis-5/6 lg:w-1/3 mb-4 lg:mb-0">
          <img
            src={fighter.profileImage}
            alt={`${fighter.name}'s profile`}
            className="w-32 md:w-48 rounded-lg border-2 border-gray-300 mb-4 lg:mb-0 lg:mr-16"
          />
          <div className="text-center lg:text-left">
            <h4 className="text-xl md:text-2xl font-semibold text-gray-200 mb-2">
              Biography
            </h4>
            <p className="text-white">{fighter.biography}</p>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 lg:w-2/3 flex flex-wrap justify-around">
          <div className="bg-gray-700 p-3 rounded-lg shadow-md w-full sm:w-1/2 m-2">
            <p className="text-white">Country: {fighter.flag}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg shadow-md w-full sm:w-1/2 m-2">
            <p className="text-white">Rating: {fighter.eloRating}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg shadow-md w-full sm:w-1/2 m-2">
            <p className="text-white">Age: {fighter.age}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg shadow-md w-full sm:w-1/2 m-2">
            <p className="text-white">UFC Record: {fighter.record}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FighterDetailPage;
