function goalsReducer(goals, action) {
    // added, completed, deleted, edited
    if(action.type === "added") {
        return [
            ...goals,
            {
                id: goals.length ? goals[goals.length - 1].id + 1 : 1,
                title: action.goalTitle,
                done: false
            }
        ]
    } else if(action.type === "completed") {
        return goals.map(goal => goal.id === action.goalId ? { ...goal, done: !goal.done} : goal)
    } else if(action.type === "deleted") {
        return goals.filter(goal => goal.id !== action.goalId)
    } else if(action.type === "edited") {
        return goals.map(goal => goal.id === action.goalId ? {...goal, title: action.goalTitle} : goal)
    } else {
        throw Error("Unknown action: ", + action.type)
    }
}

export default goalsReducer