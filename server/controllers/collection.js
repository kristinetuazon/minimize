const List = require("../models/collectionOfLists")


//add movies to DB

const postList = async (req, res) => {
    const{ nameOfList, listDescription, userEmail, uId, initialList } = req.body 
    try {

        const newList = new List({
            nameOfList: nameOfList,
            listDescription: listDescription,
            userEmail: userEmail,
            uId: uId,
            initialList: initialList
        })

        const savedList = await newList.save()
        res.status(201).json({success:true, data: savedList})
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
    }
    console.log(res)
}


module.exports = {
    postList
}