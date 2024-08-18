
const StudentsModel = require('../schemas/studentSchema');

const insertStudent= (req,res)=>{

  let reqBody = req.body;

  StudentsModel.create(reqBody,(err,data)=>{
    if (err) {
        res.status(400).json({
            status:"Fail",
            data : err
        })
    } else {
        res.status(200).json({
            status:"Success",
            data : data
        })
    }
  })



}

module.exports = insertStudent;