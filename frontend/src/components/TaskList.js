
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, selectTasks } from '../redux/taskSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="p-4 border-b border-gray-200">
                        <h2 className="text-xl">{task.title}</h2>
                        <p>{task.description}</p>
                        <span>Priority: {task.priority}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
