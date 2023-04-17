exports.authorization = (...roles) => {

    return (req,res,next) => {
        
        const userRole = req.headers.role;

        if(!roles.includes(userRole)){
            
            res.status(403).json(`Role: ${req.user.role} is not allowed to access`)
        }

        next()

    }
}