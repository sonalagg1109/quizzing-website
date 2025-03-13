import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions ,{answers} from '../database/data.js';



//get all questions
export async function getQuestions(req,res){
    try {
       const q= await Questions.find()
       res.json(q)
    } catch (error) {
        res.json({error})
    }
}


//insert questions

// export async function insertQuestions(req,res){
//    try {
// //  Questions.insertMany({questions : [0],answers :[1]},function(err,data){
// //         res.json({msg :"data saved successfully..."})
// //     })
// Questions.insertMany({ questions: [0], answers: [1] }, function (err, data) {
//     if (err) {
//       return res.json({ error: err });
//     }
//     res.json({ msg: "data saved successfully..." });
//   });
    
//    } catch (error) {
//     res.json({error})
//    }
// }

export function insertQuestions(req, res) {
    Questions.insertMany([{ questions: questions , answers: answers }])
      .then(data => {
        res.json({ msg: "Data saved successfully...", data });
      })
      .catch(error => {
        res.json({ error });
      });
  }

//delete all questions
export async function dropQuestions(req,res){
    try {
       await Questions.deleteMany();
       res.json({msg : "Questions Deleted Successfully..!"})
    } catch (error) {
        res.json(error)
    }
}

export async function getResult (req,res){
    try {
        const r =await Results.find()
        res.json(r)

    } catch (error) {
        res.json({error})
    }
}

// export async function storeResult(req, res) {
//     try {
//         const { username ,result,attempts,points,achieved}=req.body;
//         if(!username && !result)throw new Error('Data not provided');

//         Results.create({ username ,result,attempts,points,achieved},function(err,data){
//             res.json("result added successfully");
//         });
       
//     }
//      catch (error) {
//         res.json({error})
//     }
    
//   }

export async function storeResult(req, res) {
    try {
      const { username, result, attempts, points, achieved } = req.body;
      if (!username && !result) throw new Error('Data not provided');
  
      // Await the creation of the result document
      await Results.create({ username, result, attempts, points, achieved });
      res.json({ msg: "result saved successfully" });
    } catch (error) {
      res.json({ error });
    }
  }
  
  
  

export async function dropResult(req,res){
  try {
   await Results.deleteMany();
   res.json({msg: "result deleted successfully...!"})
  } catch (error) {
    res.json({error})
  }
}
