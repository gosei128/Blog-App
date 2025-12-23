import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchBlog = async (link) => {
      const response = await fetch(link);
      const json = await response.json();

      if (response.ok) {
        setLoading(false);
        setData(json);
      }
    };
    fetchBlog(url);
  }, [url]);
  console.log(data);
  return { data, error, loading };
};

export default useFetch;
