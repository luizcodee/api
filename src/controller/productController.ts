import { IProduct } from "../interfaces/types";
import productModel from "../model/productModel"
import { Request, Response } from "express";


const getAll = async (req:Request, res:Response) => {
    const listaProduto = await productModel.getAll()
    return res.status(200).json(listaProduto);
}

const getById = async (req:Request, res:Response) => {
    const  id  = req.params.id
    const produto= await productModel.getById(Number(id))
    return res.status(200).json(produto);
}


const NewProduct = async (req:Request, res:Response) => {

    const newP = await productModel.NewProduct(req.body)
    return res.status(201).json(newP);
}


const editProduct = async (req:Request, res:Response) => {
    const id = Number(req.params.id)
    const edit = await productModel.editProduct(id ,req.body)
    return res.status(200).json(edit);
}

const editPartial = async (req:Request, res:Response) => {
    const id = Number(req.params.id)
    const update : Partial<IProduct> = req.body
    const result = await productModel.editPartial(id, update)
    return res.status(200).json(result);
}

const removeProduct = async (req:Request, res:Response) => {
    const id = Number(req.params.id)

    const product = await productModel.removeProduct(id)
    return res.status(200).json({message: 'Produto removido com sucesso'});
}

export default {

    getAll,
    getById,
    NewProduct,
    editProduct,
    editPartial,
    removeProduct

}
