import { useState } from "react"
import { FaPlus } from "react-icons/fa"

function NewGoal({ onAddGoal }) {
    const [newGoal, setNewGoal] = useState("")

    const addGoal = () => {
        onAddGoal(newGoal)
        setNewGoal("")
    }

    return (
        <div className="new-goal">
            <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                onKeyDown={e => {
                    if(e.key === "Enter") addGoal()
                }}
            />
            <div
                className="add-button"
                onClick={addGoal}
            >
                <FaPlus />
            </div>
        </div>
    )
}

export default NewGoal