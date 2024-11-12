import { FaEdit, FaTrashAlt, FaSave } from "react-icons/fa"

const Goal = ({ goal, editingGoal, onChangeEditingGoal }) => {
    return (
        <>
            {goal.id == editingGoal ? (
                <div className="goal-editing">
                    <input 
                        type="text"
                        value={goal.title}
                    />
                    <div 
                        className="save-button"
                        onClick={() => onChangeEditingGoal(null)}
                    >
                        <FaSave />
                    </div>
                </div>
            ) : (
                <div className="goal">
                    <input 
                        type="checkbox"
                        checked={goal.done}
                    />
                    <p>{goal.title}</p>
                    <div 
                        className="edit-button"
                        onClick={() => onChangeEditingGoal(goal.id)}
                    >
                        <FaEdit />
                    </div>
                    <div className="delete-button">
                        <FaTrashAlt />
                    </div>
                </div>
            )}
        </>
    )
}

export default Goal