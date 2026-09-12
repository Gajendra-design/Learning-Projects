export const testController = (req,res)=>{
    console.log("testing sucessfull on server side");
    
    res.status(200).json({
        message:"tesing sucessfull on client side"
    })
}