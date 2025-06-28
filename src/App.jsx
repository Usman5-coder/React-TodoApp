import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <div className="main-container bg-gray-500 w-[100vw] h-[100vh] m-0 p-0 ">
        <Navbar />
        <Todos />
      </div>
    </>
  );
}

export default App;
