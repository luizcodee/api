import { IProduct } from "../interfaces/types";
import { connectionModule } from "./connectionModule";


const getAll = async () => {
    const [listaProduto] = await connectionModule.execute('SELECT * FROM Product');
    return listaProduto;
}

const getById = async (id:number) => {
    const [produto] = await connectionModule.execute(`SELECT * FROM Product WHERE id = ${id}`);
    return produto;

}

const NewProduct = async (body:IProduct) => {
    const {name,description,price,stock,createAt,updateAt} = body
    const query = 'INSERT INTO Product (name,description,price,stock,createAt,updateAt) VALUES (?,?,?,?,?,?)'
    const newP = await connectionModule.execute(query,[name,description,price,stock,createAt ?? new Date(),updateAt ?? new Date()])
    return newP;
}


const editProduct = async (id:number, body:IProduct) => {
    const {name,description,price,stock,createAt,updateAt} = body
    const query = 'UPDATE Product SET name = ?, description = ?, price = ?, stock = ?, createAt = ?, updateAt = ? WHERE id = ?'
    const [edit] = await connectionModule.execute(query,[name,description,price,stock,createAt,updateAt,id])
    return edit;
}

const editPartial = async (id:number,updates:Partial<IProduct>) => {
    delete updates.createAt;
    if(!updates.updateAt) {
        updates.updateAt = new Date();
    }

    const fields = Object.keys(updates) 
    const values = Object.values(updates)

    const setclaus = fields.map(field => `${field} = ?`).join(', ')
    const query  = `UPDATE Product SET ${setclaus}, updateAt=NOW() WHERE id = ?`
    const [result] = await connectionModule.execute(query, [...values, id])
    return result;
}

const removeProduct = async (id:number) => {
    const [product] = await connectionModule.execute(`DELETE FROM Product WHERE id=${id}`);
    return product;

}

export default {
    getAll,
    getById,
    NewProduct,
    editProduct,
    editPartial,
    removeProduct

}