//error middleware
const errormiddleware =(err,req,res,next)=>{
        console.log(err);
        res.status(500).send({
            success:false,

            message:"something wrong",
            err
        })
}
export default errormiddleware 