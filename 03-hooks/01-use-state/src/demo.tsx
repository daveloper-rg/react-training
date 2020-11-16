import React from "react";
import { useDebounce } from "use-debounce";

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
  const [userCollection, setUserCollection] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.results) {
          setUserCollection(json.results);
        } else {
          setUserCollection([]);
        }
      });
  }, [debouncedFilter]);

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
