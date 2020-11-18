import React from "react";
import { Link, generatePath } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [company, setCompany] = React.useState("");
  const [filter, setFilter] = React.useState("lemoncode");
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filter.toLocaleLowerCase()}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json))
      .finally(() => setDisabled(false));
  }, [filter]);

  const loadCompany = (company: string) => {
    setDisabled(true);
    setFilter(company);
  };

  return (
    <>
      <h2>Hello from list page !</h2>
      <input value={company} onChange={(e) => setCompany(e.target.value)} />

      <button
        disabled={disabled}
        type="button"
        onClick={() => loadCompany(company)}
      >
        Search
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr>
              <td>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={generatePath("detail/:id", { id: member.login })}>
                  {member.login}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
