import { UserModel } from "../db/models/userModel.js"

export default {
    findAll: async (req, res) => {
        const result = await UserModel.findAll();

        return res.status(200).json({
            status: 'success',
            message: 'All users retrived',
            payload: result
        })
    },
    create: async (req, res) => {
        const { 
            name, 
            cpf, 
            email, 
            password, 
            phone, 
            roleId 
        } = req.body;

        const user = new UserModel(
            name, 
            cpf, 
            email, 
            password, 
            phone, 
            roleId 
        );

        const result = await UserModel.create(user);

        return res.status(200).json({
            status: 'success',
            message: 'New user created',
            payload: result
        })
    }
}