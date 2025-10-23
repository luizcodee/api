import { IUser } from "../interfaces/types";
import { connectionModule } from "./connectionModule";

const getAll = async () => {
    const [listaUser] = await connectionModule.execute('SELECT * FROM User');
    return listaUser;
}

const getById = async (id: number) => {
    const [user] = await connectionModule.execute(`SELECT * FROM User WHERE id = ${id}`);
    return user;
}

const newUser = async (body: IUser) => {
    const { email, password, nome, role, createAt } = body;
    const query = 'INSERT INTO User (email, password, nome, role, createAt) VALUES (?, ?, ?, ?, ?)';
    const newU = await connectionModule.execute(query, [email, password, nome, role, createAt ?? new Date()]);
    return newU;
}

const editUser = async (id: number, body: IUser) => {
    const { email, password, nome, role } = body;
    const query = 'UPDATE User SET email = ?, password = ?, nome = ?, role = ? WHERE id = ?';
    const [edit] = await connectionModule.execute(query, [email, password, nome, role, id]);
    return edit;
}

const removeUser = async (id: number) => {
    const [user] = await connectionModule.execute(`DELETE FROM User WHERE id=${id}`);
    return user;
}

export default {
    getAll,
    getById,
    newUser,
    editUser,
    removeUser
}