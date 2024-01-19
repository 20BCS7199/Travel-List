import "./App.css";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Header></Header>
      <FormSection />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
