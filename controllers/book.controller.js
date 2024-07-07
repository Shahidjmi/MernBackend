 import book from "../models/book.model.js";
 
 export const getBook = async (req,res) => {

    try {
        const bookinfo = await book.find()
        res.status(200).json(bookinfo)
    } catch (error) {
        res.status(500).json({massage:error.message});
    }
  
 }