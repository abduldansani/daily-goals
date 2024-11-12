import { useState } from "react"
import Goal from "./Goal"

const Goals = ({ goals }) => {
    const [editingGoal, setEditngGoal] = useState(null)

    const handleChangeEditingGoal = (goalId) => {
        setEditngGoal(goalId)
    }
    
    return (
        <div className="goals">
            {goals.map(goal => (
                <Goal 
                    key={goal.id}
                    goal={goal}
                    editingGoal={editingGoal}
                    onChangeEditingGoal={handleChangeEditingGoal}
                />
            ))}
        </div>
    )
}

export default Goals