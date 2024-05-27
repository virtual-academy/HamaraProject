const userModel = require('../../models/user')
exports.Signup = async(req, res)=>{
    const user = {
        ...req.body
    }
    let u = await userModel.create(user);
    //console.lodg(user)
    console.log(u);
    res.status(200).json(u);
}
exports.getAllUsers = async(req, res)=>{
    const users = await userModel.find();
    // console.log(users);
    if(users){
        res.status(200).json(users)
    }
    res.satus(404).json('Something Went Wrong....')
}