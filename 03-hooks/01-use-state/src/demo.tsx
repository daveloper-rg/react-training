import React from "react";

interface UserState {
  name: string,
  lastname: string;
}

interface Action {
  type: string;
  payload: any;
}

const actionsIds = {
  setName: 'setname',
  setLastname: 'setlastname',
};

// action creator:
const setLastname = (lastname: string): Action => ({
  type: actionsIds.setLastname,
  payload: lastname,
});

const setName = (setName: string): Action => ({
  type: actionsIds.setName,
  payload: name,
});

const userInfoReducer = (state: UserState, action: Action): UserState => {
  switch(action.type)
  {
    case actionsIds.setName:
      return {
       ...state,
       name: action.payload,
      };
    case actionsIds.setLastname:
      return {
        ...state,
        lastname: action.payload,
      };
  }
  return state;
}

interface Props {
  name: string;
  onChange: (value: string) => void;
}

const EditUsername: React.FC<Props> = React.memo((props) => {
  console.log(
    "Hey I'm only rerendered when name gets updated, check React.memo"
  );

  return (
    <input
      value={props.name}
      onChange={(e) =>
        props.dispatch({type: actionsIds.setLastname, payload: e.target.value})
      }
    />
  );
});

export const MyComponent = () => {
  const [userInfo, dispatch] = React.useReducer(userInfoReducer,
     {
       name: 'John',
       lastname: 'Doe',
      });

  return (
    <>
      <h3>
        {userInfo.name} {userInfo.lastname}
      </h3>
      <EditUsername
        name={userInfo.name}
        onChange={(name) =>
          setInfo({
            ...userInfo,
            name,
          })
        }
      />
      <input
        value={userInfo.lastname}
        onChange={(e) =>
          dispatch({type: actionsIds.setLastname, payload: e.target.value})
        }
      />
    </>
  );
};