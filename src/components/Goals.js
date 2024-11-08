import Goal from "./Goal"

function Goals({ onDeleteGoal, goals, onEditGoal, onGoalComplete }) {
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