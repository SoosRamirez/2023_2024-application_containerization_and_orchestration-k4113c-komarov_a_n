import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task }) => {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'red';
            case 'Medium':
                return 'yellow';
            case 'Low':
                return 'green';
            default:
                return 'grey';
        }
    };

    return (
        <div className="task-card" style={{ borderColor: getPriorityColor(task.priority) }}>
            <h3>{task.name}</h3>
            <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
            <p>Priority: {task.priority}</p>
        </div>
    );
};

export default TaskCard;
