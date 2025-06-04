import './App.css'

function App() {

  const hello = () =>{
    alert("hello");
  }

  return (
    <>
      <div className='flex bg-[#212121] text-white text-4xl h-screen w-full justify-center items-center'>
        <h1>hello world</h1>
        <button onClick={hello}>click me</button>
      </div>
    </>
  )
}

export default App
