const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Clientes Registration'

function index(req, res){
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
}

async function add(req, res){
    const {
        name,
        age, 
        email, 
        password,
    } = req.body


    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name, 
        age,
        email,
        password: passwordCrypto,
     })

    register.save()

    res.render('register', {
        title: defaultTitle,
        message: 'Successful Registration!'
    })
}

async function list(req, res){

    const users = await CustomersModel.find()

    res.render('list', {
        title: "User's list",
        users,
    })
}

async function formEdit(req, res){
    const {id} = req.query
    const user = await CustomersModel.findById(id)
    

    res.render('edit', {
        title: 'Editar Usuário',
        user,
    })

}

module.exports = {
    add, 
    index,
    list,
    formEdit,
}