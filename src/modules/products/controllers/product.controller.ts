
import { registerCategoryUseCase } from "../useCase/registerCategory.useCase";
import { registerProductUseCase } from "../useCase/registerProduct.useCase";
import { getProductsUseCase } from "../useCase/getProducts.useCase";
import express, { Request, Response, NextFunction } from "express";
import {RegisterCategoryDTO} from "../dtos/registerCategory.dto";
import {RegisterProductDTO} from "../dtos/registerProduct.dto";
import {GetProductDTO} from "../dtos/getProduct.dto";


const routeProducts = express.Router();

routeProducts.get("/products", async function (req: Request<undefined, undefined, undefined, GetProductDTO>, res: Response, next: NextFunction) {
    const product = req.query;
    try{
      const response = await getProductsUseCase(product);
      res.send(response);
    }catch (error){
      next(error);
    }
})


routeProducts.post("/products/category/register", async function (req: Request<RegisterCategoryDTO>, res: Response, next: NextFunction) {
  const registerCategory = req.body; 
  try{
    const response = await registerCategoryUseCase(registerCategory)
    res.send(response)
  }catch (error){
    next(error)
  }
})


routeProducts.post("/products/register", async function (req: Request<RegisterProductDTO>, res: Response, next: NextFunction) {
    const registerProduct = req.body; 
    try{
      const response = await registerProductUseCase(registerProduct)
      res.send(response)
    }catch (error){
      next(error)
    }
})


export default routeProducts