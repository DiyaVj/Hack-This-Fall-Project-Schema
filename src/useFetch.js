import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  const callApi = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setIsPending(false);
  };

  useEffect(() => {
    callApi();
  });

  return { data, isPending, error };
};

export default useFetch;
