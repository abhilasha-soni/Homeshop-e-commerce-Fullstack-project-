import { Router } from "express";
import passport, { session } from "passport";

import { createNewUser, logInWithPassword, updateUserInfo} from "../controllers/users";

const router = Router();

router.post ("/registerUser", createNewUser);
router.post("/login", logInWithPassword);
router.put ("/:_id", passport.authenticate("jwt", {session:false}), updateUserInfo)

export default router;