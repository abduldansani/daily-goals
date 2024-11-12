import { useState } from "react";
import NewGoal from "./components/NewGoal";
import Goals from "./components/Goals";

function App() {
    const [goals, setGoals] = useState(initialGoals)

    const handleAddGoal = (goalTitle) => {
        if(!goalTitle) return

        const updatedGoals = [
            ...goals,
            {
                id: goals.length ? goals[goals.length - 1].id + 1 : 1,
                title: goalTitle,
                done: false
            }
        ]

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

export default App;
