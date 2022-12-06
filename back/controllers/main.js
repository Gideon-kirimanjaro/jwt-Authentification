const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const logIn = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomAPIError("Please enter email & password", 400);
  }
  const tokenObj = {
    id: new Date().getDate(),
    email,
  };
  const token = jwt.sign(tokenObj, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({
    msg: "User Logged In",
    token,
  });
  res.send("Log in Successful");
};
const dashBoard = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("UnAuthorized Token sent", 401);
  }
  const token = authHeader.split(" ")[1];
  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({
      msg: `Hello User, your auth number is ${Math.random()}`,
      data: decodedData,
    });
  } catch (error) {
    throw new CustomAPIError("Not Authorized ", 401);
  }
};
module.exports = { logIn, dashBoard };
