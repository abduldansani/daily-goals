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
            <Goals />
        </main>
        <footer>
            <p>&copy; Flowdiary 2024</p>
        </footer>
    </div>
  );
}

export default App;
