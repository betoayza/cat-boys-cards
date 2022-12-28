import React from "react";
import { useGetGIFs } from "../../hooks/useGetImages";

export const Home = () => {
  let gifs = useGetGIFs();  

  return (
    <div className={"text-center"}>
      <h1>Cat Boys Cards</h1>
      <div className={"container"}>
        <div
          className={"row row-cols-auto"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {gifs.gifs.length ? (
            gifs.gifs.map((gif, index) => {
              return (
                <img
                  key={index}
                  src={gif}
                  className="img-fluid img-thumbnail m-2"
                  alt="GIF"
                  style={{ height: "300px", width: "300px" }}
                />
              );
            })
          ) : (
            <div className={"text-center w-100"} style={{ color: "#ff7f50" }}>
              <h2>Loading...</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
