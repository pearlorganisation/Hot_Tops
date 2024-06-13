import auth from "../../models/auth/auth.js";
import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import bcrypt, { genSalt } from "bcrypt";

export const signUp = asyncErrorHandler(async (req, res) => {
  const { email, password } = req.body;

  // checking if user exist or not in database, if user will not exist isUserAlreadyExist will give null
  const isUserAlreadyExist = await auth.findOne({ email });
  if (isUserAlreadyExist) {
    return res.json({
      message: "User already exist",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newData = await auth.create({ ...req.body, password: hashedPassword });
  res.status(201).json({
    status: true,
    message: "user created successfully",
  });
});
