import { useState } from "react"
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa"

function Goal({ goal, onDeleteGoal, onEditGoal, onGoalComplete }) {
    const [isEditing, setIsEditing] = useState(false)


    const handleSave = () => {
        setIsEditing(false)
    }

    return(
        <>
            {isEditing ? (
                <div className="goal-editing">
                    <input
                        type="text"
                        value={goal.name}
                        onChange={e => onEditGoal({...goal, name: e.target.value})}
                        onKeyDown={e => {
                            if(e.key === "Enter") handleSave()
                        }}
                    />
                    <div
                        className="save-button"
                        onClick={handleSave}
                    >
                        <FaSave />
                    </div>
                </div>
            ) : (
                <div className="goal">
                    <input
                        type="checkbox"
                        checked={goal.done}
                        onChange={() => onGoalComplete(goal.id)}
                    />
                    <p>{goal.name}</p>
                    <div
                        className="edit-button"
                        onClick={() => setIsEditing(true)}
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
