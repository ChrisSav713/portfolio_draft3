const User = require('../models/user.model')
const bcrypt = require('bcrypt');

module.exports.getOne = (req, res) => {
    User.findOne({_id:req.params.id})
        .then(item => res.json(item))
        .catch(err => res.json(err));
}

module.exports.getAll = (req, res) => {
    User.find({}).collation({locale:"en"}).sort({type:1}).exec(function(err, items) {
        if(err) {
            return res.json(err)
        } else {
            return res.json(items)
        }
    })
}

module.exports.comefindme = (req, res) => {
    console.log("found me")
}

module.exports.updateOne = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id}, req.body, {runValidators:true})
    .then(item => res.json(item))
    .catch(err => res.json(err))
    }

module.exports.deleteOne = (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id})
    .then(item => res.json(item))
    .catch(err => res.json(err))
}

async function checkExists(fieldIn, valueIn) {
    const exists = await User.exists({[fieldIn]: valueIn})
    console.log([fieldIn + valueIn])
    if(exists !== null) {            //returned an id, so the name already exists
        console.log(JSON.stringify(exists))
        return true  

    }
    else {                          //returned a null, so that name doesn't already exist
        console.log(JSON.stringify(exists))
        return false  
    } 
}

module.exports.createOne = async (req, res) => {
    // console.log(req.body.first + req.body.last + req.body.email + req.body.password + req.body.confirm)
    // try{
    //     const salt = await bcrypt.genSalt()
    //     const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // const user = {first: req.body.first, last: req.body.last, email: req.body.email, password: hashedPassword}

        // var isError = false
        // var messageBack = {
        //     "name":"ValidationError",
        //     "message":"Validation Failed",
        //     "errors":{}
        // }

    //     console.log(req.body)
    //     if (!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email)) {
    //         isError = true
    //         console.log("email false")
    //         messageBack["errors"]["email"] = {
    //             "name":"ValidationError", 
    //             "message":"Not a valid email format"
    //         }
    //     }
        

    //     const alreadyExists = await checkExists("email", req.body.email)           //Making sure there are no duplicate names
    //     if(alreadyExists) {
    //         console.log("already true")
    //         isError = true
    //         messageBack["errors"]["email"] = {
    //             "name":"ValidationError", 
    //             "message":"That name already exists in database"
    //         }
    //     }

    //     if(req.body.first.length < 3)
    //     {
    //         isError = true
    //         messageBack["errors"]["first"] = {
    //             "name":"ValidationError", 
    //             "message":"First name must be at least 3 characters"
    //         }
    //     }

    //     if(req.body.last.length < 3)
    //     {
    //         isError = true
    //         messageBack["errors"]["last"] = {
    //             "name":"ValidationError", 
    //             "message":"Last name must be at least 3 characters"
    //         }
    //     }

    //     if(req.body.password.length < 8){
    //         isError = true
    //         messageBack["errors"]["password"] = {
    //             "name":"ValidationError", 
    //             "message":"Password must be at least 8 characters long"
    //         }
    //     }

    //     if(/[A-Z]/.test(req.body.password) && /[a-z]/.test(req.body.password) && /[0-9]/.test(req.body.password)){
    //         isError = true
    //         messageBack["errors"]["password"] = {
    //             "name":"ValidationError", 
    //             "message":"Password must contain one upper case letter, one lower, and a digit"
    //         }
    //     }

        // if(req.body.password !== req.body.confirm) {
        //     isError = true
        //     messageBack["errors"]["confirm"] = {
        //         "name":"ValidationError", 
        //         "message":"Password and confirmation do not match"
        //     }
        // }


        // if(!isError) {
        //     console.log("not error")
        const user = {first: req.body.first, last: req.body.last, email: req.body.email, password: req.body.password}
        console.log(user)
        User.create(user)
            .then((item) => res.json(item))
            .catch((err) => res.json(err))
        // } else {
        //     console.log("is error")

        //     res.status(200).json(messageBack)
        // }
        
    // } catch (err) {
    //     console.log(err)
    // }
}

module.exports.login = async (req, res) => {
    //console.log("finding... ")

    var isError = false
    var messageBack = {
        "name":"ValidationError",
        "message":"Validation Failed",
        "errors":{}
    }
    var findUser = {}

    //console.log("--")
    //console.log(req.body.loginPassword)
    //console.log(req.body.loginConfirm)
    //console.log("--")
    if(req.body.loginPassword !== req.body.loginConfirm) {
        isError = true
        console.log("don't match")
        messageBack["errors"]["loginConfirm"] = {
            "name":"ValidationError", 
            "message":"Password and confirmation do not match"
        }
    } else {
        //console.log("they match, keep validating")
        findUser = await User.findOne({"email":req.body.loginEmail})
        if(!findUser) {
            isError = true
            console.log("Email address not found")
            messageBack["errors"]["loginEmail"] = {
                "name":"ValidationError", 
                "message":"Email address not found"
            }
        }else{
           // console.log(findUser)
            //console.log("user found keep validating")
            //console.log('--')
            //console.log(req.body.loginPassword)
            //console.log(findUser.password)
            //console.log('--')
            let match = await bcrypt.compare(req.body.loginPassword, findUser.password)
            
            //console.log(JSON.stringify(match))
            //console.log(match)
            if(!match)
                isError = true
                //console.log(JSON.stringify(isError) + " Password")
                messageBack["errors"]["loginPassword"] = {
                    "name":"ValidationError", 
                    "message":"Password is invalid"
                }
            }
        }
    
    if(isError) {
        console.log("Returning error messages")
        res.status(200).json(messageBack)
    }
    else {
        console.log("Login Success")
        res.status(200).send('Login Success')
    }

}
