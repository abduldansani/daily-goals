// import { useState } from "react";
import { useReducer, useEffect } from "react";
import NewGoal from "./components/NewGoal";
import Goals from "./components/Goals";

import goalsReducer from "./goalsReducer";

function App() {
  // const [goals, setGoals] = useState(initialGoals)

  const initialGoals = JSON.parse(localStorage.getItem("goals")) || [];

  const [goals, dispatch] = useReducer(goalsReducer, initialGoals);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = (goalTitle) => {
    if (!goalTitle) return;

    // const updatedGoals = [
    //     ...goals,
    //     {
    //         id: goals.length ? goals[goals.length - 1].id + 1 : 1,
    //         title: goalTitle,
    //         done: false
    //     }
    // ]

    // setGoals(updatedGoals)

    dispatch({
      type: "added",
      goalTitle,
    });
  };

  const handleCompleteGoal = (goalId) => {
    // const updatedGoals = goals.map(goal => goal.id === goalId ? { ...goal, done: !goal.done} : goal)

    // setGoals(updatedGoals)

    dispatch({
      type: "completed",
      goalId,
    });
  };

  const handleDeleteGoal = (goalId) => {
    // const updatedGoals = goals.filter(goal => goal.id !== goalId)

    // setGoals(updatedGoals)

    dispatch({
      type: "deleted",
      goalId,
    });
  };

  const handleEditGoal = (goalId, goalTitle) => {
    // const updatedGoals = goals.map(goal => goal.id === goalId ? {...goal, title: goalTitle} : goal)

    // setGoals(updatedGoals)

    dispatch({
      type: "edited",
      goalId,
      goalTitle,
    });
  };

  return (
    <div className="app">
      <header>
        <h1>DAILY GOALS</h1>
      </header>
      <main>
        <NewGoal onAddGoal={handleAddGoal} />
        <Goals
          goals={goals}
          onCompleteGoal={handleCompleteGoal}
          onDeleteGoal={handleDeleteGoal}
          onEditGoal={handleEditGoal}
        />
      </main>
      <footer>
        <p>&copy; Flowdiary 2024</p>
      </footer>
    </div>
  );
}

export default App;
