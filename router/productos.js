import { Router } from "express";
import * as productosController from "../controllers/ProductMock.js";
export const router = Router();

router.get("/", productosController.getData);