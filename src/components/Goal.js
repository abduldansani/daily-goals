import { useState } from "react"
import { FaEdit, FaTrashAlt, FaSave } from "react-icons/fa"

const Goal = ({ goal }) => {
    const [isEditing, setIsEditing] = useState(false)
    return (
        <>
            {isEditing ? (
                <div className="goal-editing">
                    <input 
                        type="text"
                        value={goal.title}
                    />
                    <div className="save-button">
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
                    <div className="edit-button">
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