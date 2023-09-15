import { NotFoundError } from '../helpers/apiError';
import User, { UserDocument } from '../models/User';

export const createUserService = async (
  user:UserDocument
): Promise <UserDocument> =>{
  return user.save();
};

export const findByEmailService = async (
  userEmail:string
):Promise <UserDocument> =>{
  const foundUser = await User.findOne({email:userEmail})
  if (!foundUser){
    throw new NotFoundError(`User  ${userEmail} not found.`)
  } return foundUser;
};


export const updateUserService = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> => {
  const user = await User.findByIdAndUpdate(
    userId,
    update,
    { new: true }
  );
  if (!user) {
    throw new NotFoundError(`could not find the user with the _id ${userId}`);
  }
  return user;
};

export const findUserByEmailService = async (userEmail: string): Promise<UserDocument> => {
  const user = await User.findOne({ email: userEmail });
  if (!user) {
    throw new NotFoundError(
      `could not find the user with the email ${userEmail}`
    );
  }
  return user;
};
