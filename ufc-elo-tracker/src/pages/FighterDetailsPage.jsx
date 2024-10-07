// FighterDetailPage.js
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

  // Random biography and image
  const biography =
    "Born into a family of fighters, " +
    `${fighter.name} has trained in multiple disciplines, showcasing unmatched skills in the Octagon. With a relentless spirit and determination, they have risen through the ranks to become one of the top contenders in the UFC. Their fighting style combines agility, power, and a strategic mindset, making them a formidable opponent.`;

  const profileImageUrl = "https://via.placeholder.com/150"; // Placeholder image URL

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col p-6">
      <h2 className="text-4xl font-bold text-center mt-4 text-white">
        {fighter.name}'s Details
      </h2>
      <div className="mt-6  shadow-lg p-6 rounded-lg border border-gray-300">
        <div className="flex items-center mb-4">
          <img
            src={profileImageUrl}
            alt={`${fighter.name}'s profile`}
            className="w-32 h-32 rounded-full border-2 border-gray-300 mr-4"
          />
          <div>
            <h4 className="text-2xl font-semibold text-white mb-4">
              Biography
            </h4>
            <p className="text-white">{biography}</p>
          </div>
        </div>
        <p className="text-white">Country: {fighter.flag}</p>
        <p className="text-white">Rating: {fighter.eloRating}</p>
        <p className="text-white">Age: {fighter.age}</p>
        <p className="text-white">UFC Record: {fighter.record}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default FighterDetailPage;
