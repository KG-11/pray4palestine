import NameList from "@/components/name-list";
import "./App.css";
import PoemCard from "./components/poem-card";

function App() {
  return (
    <main className="relative h-svh w-full overflow-hidden">
      <PoemCard />
      <NameList />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </main>
  );
}

export default App;
