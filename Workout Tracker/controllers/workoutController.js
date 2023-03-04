const workoutModel=require('../models/workoutModel')
const moment =require('moment')
const getAllWorkout =async(req,res)=>{
    try {
        const { frequency, selectedDate } = req.body;
        const workouts =await workoutModel.find({
            ...(frequency !=='custom' 
            ? {
                date:{
                    $gt : moment().subtract(Number(frequency), "d").toDate(),
                },
              } 
            : {
                date:{
                    $gte : selectedDate[0],
                    $lte : selectedDate[1],
                },
            }),
            
            userid: req.body.userid,
            
        });
        res.status(200).json(workouts);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
};

const deleteWorkout= async(req,res)=>{
    try {
        await workoutModel.findOneAndDelete(
            {_id: req.body.workoutId });
        res.status(201).send('Deleted Successfully');
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const editWorkout = async(req,res)=>{
    try {
        await workoutModel.findOneAndUpdate(
            {_id:req.body.workoutId },
            req.body.payload
            );
        res.status(200).send('Edit Successfully');
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const addWorkout = async(req,res)=>{
    try {
        const newWorkout =new workoutModel(req.body)
        await newWorkout.save()
        res.status(201).send('Your answer is added successfully')
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports ={   getAllWorkout,
                    addWorkout,
                    editWorkout,
                    deleteWorkout};