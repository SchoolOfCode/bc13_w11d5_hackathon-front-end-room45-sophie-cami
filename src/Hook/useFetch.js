import { useEffect, useState } from "react";

function useFetch(fetchUrl) {
  //console.log(`this is fetch url: ${fetchUrl}`)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // const [id, setId] = useState("");

  useEffect(() => {
    fetch(fetchUrl, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => setError(err));
  }, [fetchUrl]);

  if (error) {
    console.log(error);
    console.log(data);
    return <p>Error!</p>;
  }
  console.log("If you cannot see any activities it's because you are checking them out before the date or before December. Come back then to get some festive inspo! :)");
  return [data];
}
export default useFetch;
