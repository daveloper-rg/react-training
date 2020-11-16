import React from "react";
import { useDebounce } from "use-debounce";

const useUserCollection = () => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
  const [userCollection, setUserCollection] = React.useState([]);

  const retrieveData = async (filter) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${filter}`
    );

    const json = await response.json();
    json.results ? setUserCollection(json.results) : [];
  };
  React.useEffect(() => {
    retrieveData(filter);
  }, [debouncedFilter]);

  return {filter, setFilter, userCollection};
}

export const MyComponent = () => {
  const {filter, setFilter, userCollection} = useUserCollection();

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>
            <img src={user.image} width="50px" />
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
// instalamos debounce con: npm install use-debounce --save
