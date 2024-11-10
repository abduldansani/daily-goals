import { FaPlus } from "react-icons/fa"
import { useState } from "react"

const NewGoal = () => {
    const [newGoal, setNewGoal] = useState("")

    const addGoal = () => {
        if(!newGoal) return

        console.log(newGoal)
        setNewGoal("")
    }

    return (
        <div className="new-goal">
            <input 
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                onKeyDown={(e) => {
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