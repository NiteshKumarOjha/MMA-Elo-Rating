import React, { useState } from "react";
import axios from "axios";

const MatchManagement = () => {
  const [fighterName, setFighterName] = useState("");
  const [isChampionship, setIsChampionship] = useState(false);
  const [result, setResult] = useState(1); // Default to win
  const [kd, setKd] = useState(0);
  const [head, setHead] = useState(0);
  const [body, setBody] = useState(0);
  const [legs, setLegs] = useState(0);
  const [control, setControl] = useState(0);
  const [takedowns, setTakedowns] = useState(0);
  const [takedownDefended, setTakedownDefended] = useState(0);
  const [subAttempts, setSubAttempts] = useState(0);
  const [knockoutSub, setKnockoutSub] = useState(0); // Default to no

  const handleSubmit = async (e) => {
    e.preventDefault();
    const matchDetails = {
      fighterName,
      isChampionship,
      result,
      kd,
      head,
      body,
      legs,
      control,
      takedowns,
      takedownDefended,
      subAttempts,
      knockoutSub,
    };

    console.log(matchDetails);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/addMatch",
        matchDetails
      );
      console.log(response.data);
      alert("Match added successfully!");
      // Reset the form after successful submission
      setFighterName("");
      setIsChampionship(false);
      setResult(1);
      setKd(0);
      setHead(0);
      setBody(0);
      setLegs(0);
      setControl(0);
      setTakedowns(0);
      setTakedownDefended(0);
      setSubAttempts(0);
      setKnockoutSub(0);
    } catch (error) {
      console.error(error);
      alert("Error adding match. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-md border-white rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          Add Match Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block textw-white font-semibold mb-2">
              Fighter Name:
            </label>
            <input
              type="text"
              value={fighterName}
              onChange={(e) => setFighterName(e.target.value)}
              required
              className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={isChampionship}
              onChange={(e) => setIsChampionship(e.target.checked)}
              className="mr-2"
            />
            <label className="textw-white font-semibold">
              Is Championship Match
            </label>
          </div>
          <div className="mb-4">
            <label className="block textw-white font-semibold mb-2">
              Result:
            </label>
            <select
              value={result}
              onChange={(e) => setResult(Number(e.target.value))}
              className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value={1}>Win</option>
              <option value={0}>Loss</option>
              <option value={0.5}>Draw</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block textw-white font-semibold mb-2">
                Knockdowns:
              </label>
              <input
                type="number"
                value={kd}
                onChange={(e) => setKd(Number(e.target.value))}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block textw-white font-semibold mb-2">
                Head Strikes:
              </label>
              <input
                type="number"
                value={head}
                onChange={(e) => setHead(Number(e.target.value))}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block textw-white font-semibold mb-2">
                Body Strikes:
              </label>
              <input
                type="number"
                value={body}
                onChange={(e) => setBody(Number(e.target.value))}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block textw-white font-semibold mb-2">
                Leg Strikes:
              </label>
              <input
                type="number"
                value={legs}
                onChange={(e) => setLegs(Number(e.target.value))}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block textw-white font-semibold mb-2">
                Control Time (in seconds):
              </label>
              <input
                type="number"
                value={control}
                onChange={(e) => setControl(Number(e.target.value))}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block textw-white font-semibold mb-2">
                Takedowns:
              </label>
              <input
                type="number"
                value={takedowns}
                onChange={(e) => setTakedowns(Number(e.target.value))}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Takedown Defended:
              </label>
              <input
                type="number"
                value={takedownDefended}
                onChange={(e) => setTakedownDefended(Number(e.target.value))}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block textw-white font-semibold mb-2">
                Submission Attempts:
              </label>
              <input
                type="number"
                value={subAttempts}
                onChange={(e) => setSubAttempts(Number(e.target.value))}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block textw-white font-semibold mb-2">
              Knockout/Sub:
            </label>
            <select
              value={knockoutSub}
              onChange={(e) => setKnockoutSub(Number(e.target.value))}
              className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Add Match
          </button>
        </form>
      </div>
    </div>
  );
};

export default MatchManagement;
