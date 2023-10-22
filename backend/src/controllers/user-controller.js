function getUserController(req, res) {
  try {
    const data = {
      users: [
        { name: "joao", age: 23 },
        { name: "leticia", age: 21 },
      ],
    };
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Internal server error: ", err.message);
  }
}

function postUserController(req, res) {
  try {
    const data = req.body;
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Internal server error: ", err.message);
  }
}

function putUserController(req, res) {
  try {
    const data = req.body;
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Internal server error: ", err.message);
  }
}

function deleteUserController(req, res) {
  try {
    const data = req.body;
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Internal server error: ", err.message);
  }
}

export default {
  getUserController,
  postUserController,
  putUserController,
  deleteUserController,
};
