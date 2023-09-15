import { Router } from "express";

import { createNewOrder, getOrderById } from "../controllers/orders";

const router = Router();

router.post("/:_id", createNewOrder);
router.get("/:_id",getOrderById);

export default router;
