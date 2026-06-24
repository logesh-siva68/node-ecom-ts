import {Router} from "express";

import authRoutes from "./auth.routes";
import productRoutes from "./products.routes";
import { authMiddleware } from "../utils/auth.middleware";

const router = Router();


router.use("/auth", authRoutes);
router.use("/products/list", productRoutes);

router.use(authMiddleware); // Apply auth middleware to all routes below this line

router.use("/profile", authMiddleware); // Apply auth middleware to all /admin routes
router.use("/admin/profile", authRoutes);
router.use("/admin/products", productRoutes);


export default router;