import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";

const getAll = async (req: Request, res: Response) => {
    const listaUser = await userModel.getAll();
    return res.status(200).json(listaUser);
}

const getById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await userModel.getById(Number(id));
    return res.status(200).json(user);
}

const newUser = async (req: Request, res: Response) => {
    const { password, ...userData } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newU = await userModel.newUser({ ...userData, password: hashedPassword });
    return res.status(201).json(newU);
}

const editUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const edit = await userModel.editUser(id, req.body);
    return res.status(200).json(edit);
}

const removeUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await userModel.removeUser(id);
    return res.status(200).json({ message: 'Usuário removido com sucesso' });
}

export default {
    getAll,
    getById,
    newUser,
    editUser,
    removeUser
}