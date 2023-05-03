import {
  v4 as uuidv4,
  validate as uuidValidate,
  version as uuidVersion,
} from "uuid";


import Router from "./Router.js";
import validator from "./Validator.js";
import userDB from "../db/user.js";

const router = new Router();

const uuidValidateV4 = (res, uuid) => {
  const isValid = uuidValidate(uuid) && uuidVersion(uuid) === 4;

  if (!isValid) {
    res.statusCode = 400;
    res.write("The user id is not valid uuid");
    res.end();
  }

  return isValid;
};

router.get("/api/users", async (req, res) => {
  res.statusCode = 200;
  res.write(JSON.stringify(await userDB.getUsers()));
  res.end();
});

router.get("/api/users/{userId}", async (req, res) => {
  const { userId } = req.parameters;
  const user = JSON.stringify(await userDB.getUserById(userId));

  if (!user) {
    res.statusCode = 404;
    res.write("The user is not found");
  } else {
    res.write(user);
  }
  res.end();
});

router.post("/api/users", async (req, res) => {
  const body = req.body;

  if (!validator.isUserDataValid(body)) {
    res.statusCode = 400;
    res.write("Invalid data for request");
    res.end();
    return;
  };

  const user = {
    id: uuidv4(),
    userName: body.userName,
    age: body.age,
    hobbies: body.hobbies,
  };

  const userInDB = await userDB.addUser(user);

  res.statusCode = 201;
  res.end(JSON.stringify(userInDB));
});

router.put("/api/users/{userId}", async (req, res) => {
  const { userId } = req.parameters;
  const body = req.body;
  const isUserExists = await userDB.getUserById(userId);

  if (!uuidValidateV4(res, userId)) {
    return;
  }

  if (isUserExists) {

    if (!validator.isUserDataValid(body)) {
      res.statusCode = 400;
      res.write("Invalid data for request");
      res.end();
      return;
    };

    await userDB.updateUser(userId, body);

    res.statusCode = 200;
    res.end(JSON.stringify(isUserExists));
  } else {
    res.statusCode = 404;
    res.write("The user is not found");
  }
  res.end();
});

router.delete("/api/users/{userId}", async (req, res) => {
    const { userId } = req.parameters;

    if (!uuidValidateV4(res, userId)) {
      return;
    }

    const deletedUser = await userDB.deleteUser(userId);

    if (deletedUser) {
      res.statusCode = 204;
      res.write("The user has been deleted");
    } else {
      res.statusCode = 404;
      res.write("The user is not found");
    }

    res.end();
});

export default router;