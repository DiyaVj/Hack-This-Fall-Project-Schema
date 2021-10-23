import React from "react";
import { useParams } from "react-router";

export default function YojnaDetails() {
  const { yojna_name } = useParams();
  return <div>yojna details {yojna_name}</div>;
}
