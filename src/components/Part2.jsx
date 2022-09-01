import React from "react";
export default function Part2({ barChartData }) {
  let maxEpisodeCount = barChartData[0].episodes;
  let minEpisodeCount = barChartData[0].episodes;
  barChartData.forEach((obj) => {
    if (obj.episodes < minEpisodeCount) minEpisodeCount = obj.episodes;
    if (obj.episodes > maxEpisodeCount) maxEpisodeCount = obj.episodes;
  });

  return (
    <>
      <div className="barChartContainer">
        {barChartData.map((obj) => (
          <div className="bar" key={obj.name}>
            <h1 className="barName">{obj.name}</h1>
            <h2
              className="barValue"
              style={{
                background: "#96ceb4",
                width:
                  ((obj.episodes - minEpisodeCount) * 40) /
                    (maxEpisodeCount - minEpisodeCount) +
                  50 +
                  "%",
              }}
            >
              {obj.episodes}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}
