import React from "react";
// import Yojna from "../yojna/Yojna";
import useFetch from "../../useFetch";

const url = "https://schema-eight.vercel.app/api/allyojna";

export default function Home() {
  const { data: yojnas, error, isPending } = useFetch(url);
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {yojnas && <div>loded</div>}
    </div>
  );
}
