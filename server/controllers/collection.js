const List = require("../models/collectionOfLists")


const getMemberLatestList= async (req,res) => {
    const uId = req.params.uId;
    try {
        const list = await List.find({ uId: uId })
        res.status(200).json(list[list.length-1].initialList);
    }catch(error) {
        res.status(409).json({success: false, data: [], error: error});
    }
}

const getMemberListById= async (req,res) => {
    const uId = req.params.uId;
    const listId = req.params.id;
    try {
        const list = await List.find({ uId: uId, _id: listId })
        res.status(200).json({success:true, data: list});
    }catch(error) {
        res.status(409).json({success: false, data: [], error: error});
    }
}

//get List from DB

const getMemberLists= async (req,res) => {
    const uId = req.params.uId;
    try {
        const lists = await List.find({ uId: uId })
        res.status(200).json({success:true, data: lists});
    }catch(error) {
        res.status(409).json({success: false, data: [], error: error});
    }
}

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
        console.log(res)
        res.status(201).json({success:true, data: savedList})
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
    }
    console.log(res)
}


module.exports = {
    postList,
    getList,
    getMemberLists,
    getMemberLatestList,
    getMemberListById
}