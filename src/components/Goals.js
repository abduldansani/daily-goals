import Goal from "./Goal"

const Goals = () => {
    return (
        <div className="goals">
            {goals.map(goal => (
                <Goal 
                    key={goal.id}
                    goal={goal}
                />
            ))}
        </div>
    )
}

const goals = [
    {
        id: 1,
        title: "Practice code",
        done: true
    },
    {
        id: 2,
        title: "Iron clothes",
        done: false
    },
    {
        id: 3,
        title: "Go to school",
        done: true
    },
]
export default Goals