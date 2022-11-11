function createResult(error,blogs){
    const result={}
        if(error){
            result['status']='error'
            result['data']=error
        }
        else{
            result['status']='Success'
            result['data']=blogs

        }
        return result
}
module.exports={
    createResult,
}