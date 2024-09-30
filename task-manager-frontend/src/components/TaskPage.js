import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../api';
import TaskCard from './TaskCard';
import { useNavigate } from 'react-router-dom';

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getTasks = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/'); // Redirect to login if no token
                } else {
                    const data = await fetchTasks(token);
                    const sortedTasks = data.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
                    setTasks(sortedTasks);
                }
            } catch (err) {
                setError('Failed to fetch tasks. Please login again.');
                localStorage.removeItem('token');
                navigate('/');
            }
        };
        getTasks();
    }, [navigate]);

    return (
        <div>
            <h2>My Tasks</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                {tasks.map((task) => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskPage;
