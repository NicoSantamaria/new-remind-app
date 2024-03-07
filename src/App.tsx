import "./output.css";
import Calendar from './pages/Calendar';
import Reminders from './pages/Reminders';

function App() {

  return (
    <main className="bg-neutral-700 h-max">
      <div className="w-full h-full p-5 flex flex-row">
        <Reminders />
        <Calendar />
      </div>
    </main>
  );
}

export default App;
