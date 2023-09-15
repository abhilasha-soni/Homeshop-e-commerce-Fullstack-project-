import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import User from "../models/User";
import { createUserService, findByEmailService, updateUserService} from "../services/users";
import { UnauthorizedError } from "../helpers/apiError";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string


export const createNewUser = async (request:Request, response:Response, next:NextFunction) => { 
  try{
  const salt =await bcrypt.genSalt(10);
  const hashedPassword = await  bcrypt.hash(request.body.password, salt);
 const userInformation = new User({
    name: request.body.name,
    email: request.body.email,
    password: hashedPassword,
  });
  const user = await createUserService (userInformation);
  response.status(201).json({user})
}catch (error){
  next(error);
}
};

export const logInWithPassword = async (request:Request, response:Response, next:NextFunction)=>{
  try{
    const userData = await findByEmailService (request.body.email);
    if (!userData){
     response.status(403).json({message: "User does not exist."})
     return
    }
    const hashedPassword = userData.password;
    const isCorrectPasword = await bcrypt.compare(request.body.password, hashedPassword);
    if(!isCorrectPasword){
      throw new UnauthorizedError("incorrect credentials");
    }
    const token = jwt.sign({
      name: userData.name,
      email: userData.email, _id:userData._id,
    }, JWT_SECRET, {expiresIn:"1h"}
   ); response.json ({userData, token})
  }catch(error)
  {next(error);
  }
}

export const updateUserInfo = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userId = request.params._id;
    const update = request.body;
    const user = await updateUserService(userId, update);

    response.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

