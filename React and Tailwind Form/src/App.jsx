import Image from "./assets/image.jpg";
function App() {
  return (
    <section className="min-h-screen flex justify-center items-center font-sans bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
      <div className="flex shadow-2xl ">
        <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-tl-2xl rounded-bl-2xl xl:rounded-tr-none rounded-tr-2xl xl:rounded-br-none rounded-br-2xl">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <div className="flex flex-col text-2xl gap-1 text-left">
            <span className="">Username:</span>
            <input
              type="text "
              className="rounded-md p-1 border-2 outline-none bg-gray-300 focus:bg-cyan-50 focus:border-cyan-400 caret-cyan-400"
            />
          </div>
          <div className="flex flex-col text-2xl gap-1 text-left">
            <span className="">Password:</span>
            <input
              type="text "
              className="rounded-md p-1 border-2 outline-none bg-gray-300 focus:bg-cyan-50 focus:border-cyan-400 caret-cyan-400"
            />
            <span className="text-base ">
              <input type="checkbox" /> Remember Password
            </span>
          </div>
          <button className="rounded-md border-2 bg-gradient-to-tr pt-2 pb-2 pl-9 pr-9 text-white text-xl font-bold hover:bg-gradient-to-r hover:from-green-200 hover:from-50% hover:to-blue-200 hover:to-50%">
            Login
          </button>
          <p className="font-bold">
            Dont have an account?
            <a
              href="#"
              className="font-normal ml-3 text-sky-500 hover:underline"
            >
              Registration
            </a>
          </p>
        </div>
        <img src={Image} alt="" className="w-[445.6px] object-cover xl:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden" />
      </div>
    </section>
  );
}

export default App;
