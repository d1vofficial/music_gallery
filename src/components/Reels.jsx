import React, { useEffect, useState } from "react";

const Reels = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        // Call the serverless function
        const response = await fetch("/api/reels");
        if (!response.ok) throw new Error("Failed to fetch reels");
        const data = await response.json();
        setReels(data); // Array of permalinks
      } catch (error) {
        console.error("Error fetching reels:", error);
      }
    };

    fetchReels();
  }, []);

  return (
    <div id="reels" className="reels-container text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Instagram Reels</h2>
      <div className="reels-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reels.map((reel, index) => (
          <div
            key={index}
            className="relative w-full pb-[125%] overflow-hidden rounded-lg shadow-md"
          >
            <iframe
              src={`${reel}embed`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
              title={`reel-${index}`}
              scrolling="no"
              style={{
                border: "none",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
