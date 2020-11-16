import React from "react";
import { useDebounce } from "use-debounce";

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
  const [userCollection, setUserCollection] = React.useState([]);

  const retreiveData = async (filter) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${filter}`
    );
    const json = await response.json();

    if (json.results) {
      setUserCollection(json.results);
    } else {
      setUserCollection([]);
    }
  };

  React.useEffect(() => {
    retreiveData(filter);
  }, [debouncedFilter]);

};
// instalamos regenerator-runtime: npm install regenerator-runtime --save
// add "babel-regenerator-runtime" en webpack-config.js