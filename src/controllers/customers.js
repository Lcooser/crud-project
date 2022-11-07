const CustoemrsModel = require('../models/customers')


function add(req, res){
    const {
        name,
        age, 
        email, 
        password,
    } = req.body


    const register = new CustoemrsModel({
        name, 
        age,
        email,
        password,
     })

    register.save()

    res.send('Registration performed')
}

module.exports = {
    add
}