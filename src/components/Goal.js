import { FaEdit, FaTrashAlt, FaSave } from "react-icons/fa"

const Goal = ({ goal, editingGoal, onChangeEditingGoal, onCompleteGoal, onDeleteGoal, onEditGoal }) => {
    return (
        <>
            {goal.id === editingGoal ? (
                <div className="goal-editing">
                    <input 
                        type="text"
                        value={goal.title}
                        onChange={(e) => onEditGoal(goal.id, e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === "Enter") onChangeEditingGoal(null)
                        }}
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
                        onChange={() => onCompleteGoal(goal.id)}
                    />
                    <p>{goal.title}</p>
                    <div 
                        className="edit-button"
                        onClick={() => onChangeEditingGoal(goal.id)}
                    >
                        <FaEdit />
                    </div>
                    <div 
                        className="delete-button"
                        onClick={() => onDeleteGoal(goal.id)}
                    >
                        <FaTrashAlt />
                    </div>
                </div>
            )}
        </>
    )
}

export default Goal