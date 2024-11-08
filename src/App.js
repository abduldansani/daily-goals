import { useState } from "react";
import NewGoal from "./components/NewGoal";
import Goals from "./components/Goals";

function App() {
    const [goals, setGoals] = useState(initialGoals)

    const handleAddGoal = (newGoal) => {
        if(!newGoal) {
            return
        }

        const updatedGoals = [
            ...goals,
            {
                id: goals[goals.length -1].id + 1,
                name: newGoal,
                done: false
            }
        ]
        setGoals(updatedGoals)
    }

    const handleCompleteGoal = (goalId) => {
        const updatedGoals = goals.map(goal => goal.id === goalId ? {...goal, done: !goal.done} : goal)
        setGoals(updatedGoals)
    }
    const handleDeleteGoal = (id) => {
        const updatedGoals = goals.filter(goal => goal.id !== id)
        setGoals(updatedGoals)
    }

    const handleEditGoal = (editedGoal) => {
        const updatedGoals = goals.map(goal => goal.id === editedGoal.id ? editedGoal : goal )
        setGoals(updatedGoals)
    }
    return (
        <div className="app">
            <header>
                <h1>DAILY GOALS</h1>
            </header>
            <main>
                <NewGoal 
                    onAddGoal={handleAddGoal}
                />
                <Goals 
                    goals={goals}
                    onDeleteGoal={handleDeleteGoal}
                    onEditGoal={handleEditGoal}
                    onGoalComplete={handleCompleteGoal}
                />
            </main>
            <footer>
                <p>&copy; Flowdiary 2024</p>
            </footer>
        </div>
    );
}

const initialGoals = [
    {
        id: 1,
        name: "Read quran",
        done: true
    },
    {
        id: 2,
        name: "Practice code",
        done: false
    },
    {
        id: 3,
        name: "Play ball",
        done: false
    }
]

export default App;
