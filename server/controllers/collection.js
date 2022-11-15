const List = require("../models/collectionOfLists")

//get List from DB

const getList = async (req,res) => {
    try {
        const allLists = await List.find();
        res.status(200).json({success:true, data: allLists});
    }catch(error) {
        res.status(409).json({success: false, data: [], error: error});
    }
}


//add List to DB

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
    postList,
    getList
}