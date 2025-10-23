import productController from './controller/productController';
import userController from './controller/userController';
import express from "express";

export const router = express.Router()

router.get('/', productController.getAll)

router.get('/produto/:id', productController.getById)

router.post('/produto', productController.NewProduct)

router.put('/:produto/:id', productController.editProduct)

router.patch('/:produto/:id', productController.editPartial)

router.delete('/:produto/:id', productController.removeProduct)

router.get('/usuario', userController.getAll)

router.get('/usuario/:id', userController.getById)

router.post('/usuario', userController.newUser)

router.put('/usuario/:id', userController.editUser)

router.delete('/usuario/:id', userController.removeUser)
