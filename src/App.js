import NewGoal from "./components/NewGoal";
import Goals from "./components/Goals";

function App() {
  return (
    <div className="app">
        <header>
            <h1>DAILY GOALS</h1>
        </header>
        <main>
            <NewGoal />
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

export default App;
