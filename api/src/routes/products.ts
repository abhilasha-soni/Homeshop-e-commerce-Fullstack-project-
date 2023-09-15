import { Router } from "express";

import { createNewProduct, getAllProducts,getProductById} from "../controllers/products";

const router = Router();

router.post("/", createNewProduct);
router.get ("/", getAllProducts);
router.get ("/:id", getProductById);



export default router;