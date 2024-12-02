import { useState } from "react";
import Goal from "./Goal";

const Goals = ({ goals, onCompleteGoal, onDeleteGoal, onEditGoal }) => {
  const [editingGoal, setEditngGoal] = useState(null);

  const handleChangeEditingGoal = (goalId) => {
    setEditngGoal(goalId);
  };

  if (!goals.length) {
    return <p className="no-goals">No goals added...</p>;
  }

  return (
    <div className="goals">
      {goals.map((goal) => (
        <Goal
          key={goal.id}
          goal={goal}
          editingGoal={editingGoal}
          onChangeEditingGoal={handleChangeEditingGoal}
          onCompleteGoal={onCompleteGoal}
          onDeleteGoal={onDeleteGoal}
          onEditGoal={onEditGoal}
        />
      ))}
    </div>
  );
};

export default Goals;
