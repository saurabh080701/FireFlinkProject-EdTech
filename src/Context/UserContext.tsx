import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import userReducer, { UsersStateType } from "../Reducer/UserReducer";

type UserCreateType = {
  children: React.ReactNode;
};

type UserContextValueType = {
  userData: UsersStateType; //array of user object and isLoading
  // fetchUsers: () => Promise<void>;
};

export const UsersContextApi = createContext<UserContextValueType | null>(null);

const UsersContextProvider = ({ children }: UserCreateType) => {
  let initialState: UsersStateType = {
    payload: null,
    isLoading: true,
  };
  const [userState, dispatch] = useReducer(userReducer, initialState);

  // fetch all users
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/users");
      dispatch({ type: "FETCHALL", payload: data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  let contextValue: UserContextValueType = {
    userData: userState,
    // fetchUsers:fetchUsers
  };

  return (
    <UsersContextApi.Provider value={contextValue}>
      {children}
    </UsersContextApi.Provider>
  );
};

export default UsersContextProvider;