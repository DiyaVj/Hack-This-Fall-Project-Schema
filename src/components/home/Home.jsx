import React from "react";
import Yojna from "../yojna/Yojna";
import useFetch from "../../useFetch";
import "./home.css";

const url = "https://schema-eight.vercel.app/api/allyojna";

export default function Home() {
  const { data: yojnas, isPending } = useFetch(url);
  return (
    <div>
      <div className="tagline">Find Schemes/Yojnas that meet your needs!</div>
      <div className="home">
        {isPending && <div>Loading...</div>}
        {yojnas &&
          yojnas.map((yojna) => (
            <Yojna
              key={yojna._id}
              thumbnail={yojna.Link}
              title={yojna.Name}
              desc={yojna.information}
            ></Yojna>
          ))}
      </div>
    </div>
  );
}
