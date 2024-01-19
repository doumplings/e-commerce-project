export type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export const defaultUser = {
  id: 0,
  name: "",
  email: "",
  password: "",
};

export const getAllUser = async (): Promise<UserType[]> => {
  const users = await fetch("/data/user.json").then((res) => res.json());
  return users.data;
};

export const getUser = async (emailUsername: string): Promise<UserType> => {
  const users = await getAllUser();
  const user = users.filter(
    (user) => user.email === emailUsername || user.name === emailUsername
  );

  return user[0];
};

export const getNewUserId = async (): Promise<number> => {
  const users = await getAllUser();
  return users.length + 1;
};

export const setUsertoLocalStorage = (user: UserType) => {
  localStorage.clear();
  const userString = JSON.stringify(user);
  localStorage.setItem("user", userString);
};

export const getUserfromLocalStorage = () => {
  const savedUser = localStorage.getItem("user");

  if (savedUser === null) {
    return null;
  } else {
    const user = JSON.parse(savedUser);
    return user;
  }
};
