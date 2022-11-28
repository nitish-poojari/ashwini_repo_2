const express=require('express')
const db=require('../database')
const utils=require('../utils')

const router=express.Router()
router.get('/',(request,response)=>{
    const connection=db.openConnection()
    const statement=`select id,title,descr,categoryId,status from blogs`
    connection.query(statement,(error,blogs)=>{
       connection.end()
       const result=utils.createResult(error,blogs)
       response.send(result)
    })
})
router.post('/',(request,response)=>{
    const newblog=request.body
    const connection=db.openConnection()
    const statement=`insert into blogs(title,descr,categoryId) values ('${newblog.title}','${newblog.descr}','${newblog.categoryId}')`
    connection.query(statement,(error,blogs)=>{
       connection.end()
       const result=utils.createResult(error,blogs)
       response.send(result)
    })

})
router.get('/:id',(request,response)=>{
    const {id}=request.params
    const connection=db.openConnection()
    const statement=`select id,title,descr,categoryId,status from blogs where id=${id}`
    connection.query(statement,(error,blogs)=>{
       connection.end()
       const result=utils.createResult(error,blogs)
       response.send(result)
    })
})
router.delete('/:id',(request,response)=>{
    const {id}=request.params
    const connection=db.openConnection()
    const statement=`delete from blogs where id=${id}`
    connection.query(statement,(error,blogs)=>{
       connection.end()
       const result=utils.createResult(error,blogs)
       response.send(result)
    })
})
router.patch('/:id/:status',(request,response)=>{
    const {id,status}=request.params
    const connection=db.openConnection()
    const statement=`update blogs set status=${status} where id=${id}`
    connection.query(statement,(error,blogs)=>{
       connection.end()
       const result=utils.createResult(error,blogs)
       response.send(result)
    })
})

module.exports= router