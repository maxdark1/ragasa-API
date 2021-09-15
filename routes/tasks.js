const express = require('express');
const TasksService = require('../services/tasks');


function taskApi(app){
    const router = express.Router();
    app.use('/api/tasks', router);
    router.use(express.json());
    const tasksService = new TasksService();

    router.get('/', async function(req, res, next){
        try{
            const tasks = await tasksService.obtenerTareas();
            res.send(tasks);
        }
        catch(err){
            next(err);
        }
    });

    router.get('/:taskID', async function(req, res, next){
        try{
            const id = req.params.taskID;
            const task = await tasksService.obtenerTarea(id);
            res.send(task);
        }
        catch(err){
            next(err);
        }
    });

    router.post('/', async function(req, res, next){
        try{
            res.send(await tasksService.guardarTarea(req.body));
        }
        catch(err){
            next(err);
        }
    })

    router.put('/:taskID', async function(req, res, next){
        try{
            const id = req.params.taskID;
            const task = await tasksService.actualizarTarea(id,req.body)
            res.send(task);
        }
        catch(err){
            next(err);
        }
    })

    router.delete('/:taskID', async function(req, res, next){
        try{
            const id = req.params.taskID;
            const task = await tasksService.eliminarTarea(id);
            res.send(task);
        }
        catch(err){
            next(err);
        }
    });

    
}

module.exports = taskApi;