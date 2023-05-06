const USERS = [
  {
    id: "b960c3b6-4653-415a-b9d8-8aa23d9fa35b",
    userName: "John",
    age: "10",
    hobbies: "footbal",
  },
  {
    id: "109156be-c4fb-41ea-b1b4-efe1671c5836",
    userName: "Alex",
    age: "15",
    hobbies: "footbal",
  },
];

// check 500 Internal server error
// const getUsers = async () => { throw new Error("test error handling") };

const getUsers = async () => USERS;

const getUserById = async (userId) => USERS.find((user) => user.id === userId);

const addUser = async (user) => {
  USERS.push(user);

  return user;
};

const updateUser = async (userId, data) => {
  let userToUpdate = await getUserById(userId);

  return Object.assign(userToUpdate, {
    userName: data.userName,
    age: data.age,
    hobbies: data.hobbies
  });
};

const deleteUser = async (userId) => {
  let deletedUser;
  const userIndexToDelete = USERS.findIndex((user) => user.id === userId);

  if (userIndexToDelete > -1) {
    deletedUser = USERS.splice(userIndexToDelete, 1)[0];
  }
  return deletedUser;
};

export default {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
