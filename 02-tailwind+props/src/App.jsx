import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl  m-3 ">
        Tailwind Project + Props
      </h1>
      <div className="flex gap-4">
        <Card userName="Priyanka" btn="Add Friend" img="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fHww" />
        <Card userName="Gauri" btn="Remove Friend" img="https://images.unsplash.com/photo-1464863979621-258859e62245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww"  />
        <Card userName="Suhana" btn="Add Friend" img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGdpcmxzfGVufDB8fDB8fHww" />
      </div>
    </>
  );
}

export default App;
