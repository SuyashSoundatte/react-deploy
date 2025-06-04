import './App.css'

function App() {
  const hello = () => {
    alert("hello");
  }

  return (
    <>
      <div className='flex flex-col bg-[#212121] text-white text-4xl h-screen w-full justify-center items-center gap-8'>
        <h1>hello world</h1>
        <div className='flex items-center'>
          <button
            className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-colors duration-300 p-3 rounded-3xl shadow-lg'
            onClick={hello}
          >
            click me
          </button>
        </div>
      </div>
    </>
  )
}

export default App
