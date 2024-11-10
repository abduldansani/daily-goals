import Goal from "./Goal"

function Goals({ onDeleteGoal, goals, onEditGoal, onGoalComplete }) {
    if(!goals.length) {
        return <p className="no-goals">No goals added...</p>
    }

    return(
        <div className="goals">
            {goals.map(goal => (
                <Goal 
                    key={goal.id}
                    goal={goal}
                    onDeleteGoal={onDeleteGoal}
                    onEditGoal={onEditGoal}
                    onGoalComplete={onGoalComplete}
                />
            ))}
        </div>
    )
}

export default Goals