export const calculateAge = async(req, res) =>{
    const query = await req.query
    
    if ("dob" in query == false){
        return res.status(424).json({
            status: false,
            message: "Dob does not exist in query"
        })
    }
    
    const dateOfBirth = await query.dob

    const current_year = new Date().getFullYear()
    const user_year = new Date(dateOfBirth * 1000).getFullYear()
    

    const user_age = current_year - user_year;
    
    if(user_age < 0){
        return res.status(424).json({
            status: false,
            message: "Timestamp is invalid"
        })
    }
    
    return res.status(200).json({
        status: true,
        message: `user's age is ${user_age}`
    })
    
}