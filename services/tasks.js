const Task = require('../models/Task');
require('../database');
const mongoose = require('mongoose');

class TasksService {

        async obtenerTareas(){
            try{
                const tasks = await Task.find();
                return tasks;
            }
            catch(err)
            {
                return err.message;
            }
        }

        async obtenerTarea(id){
            try{
                const task = await Task.findById(mongoose.Types.ObjectId(id));
                return task;
            }
            catch(err)
            {
                return err.message;
            }
        }

        async guardarTarea(body){
            try{
                const tarea = new Task(body)
                await tarea.save();
                return {message: "Nota Guardada"};
            }
            catch(err)
            {
                return err.message;
            }
        }

        async actualizarTarea(id, body){
            try{
                const objid = mongoose.Types.ObjectId(id);
                const task = await Task.findOneAndUpdate(objid,body,{new: true});
                return task;
            }
            catch(err)
            {
                return err.message;
            }
        }

        async eliminarTarea(id){
            try{
                const task = await Task.findByIdAndRemove(mongoose.Types.ObjectId(id));
                return task;
            }
            catch(err)
            {
                return err.message;
            }
        }

        

    }



module.exports = TasksService;