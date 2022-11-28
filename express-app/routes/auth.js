const express=require('express')
const db=require('../database')
const utils=require('../utils')
const CryptoJS=require('crypto-js')

const router=express.Router()

router.post('/signup',(request,response)=>{
    const {Username,email,Upassword}=request.body
    const connection=db.openConnection()
    const encryptedPassword=CryptoJS.SHA256(Upassword)
    const statement=`insert into users(Username,email,Upassword) values ('${Username}','${email}','${encryptedPassword}')`
    connection.query(statement,(error,signupResult)=>{
        connection.end()
        const result=utils.createResult(error,signupResult)
        response.send(result)
     })
})
router.post('/signin',(request,response)=>{
    const {email,Upassword}=request.body
    const connection=db.openConnection()
    const encryptedPassword=CryptoJS.SHA256(Upassword)
    const statement=`select id,Username,email from users where email='${email}'and Upassword='${encryptedPassword}'`
    connection.query(statement,(error,signinResult)=>{
        connection.end()
        const result=utils.createResult(error,signinResult)
        response.send(result)
     })
})
module.exports= router