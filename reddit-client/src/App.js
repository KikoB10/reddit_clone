import Logo from "./redditlogo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function App() {
  return (
    <div>
      <header className="flex w-full bg-reddit_dark p-2">
        <div className="mx-4">
          <img src={Logo} alt="" className="w-8 h-8 " />
        </div>
        <form
          action=""
          className="flex px-4 rounded-md bg-reddit_dark-brighter border border-gray-600"
        >
          <MagnifyingGlassIcon className="text-gray-300 h-6 w-6 mt-1" />
          <input
            type="text"
            className="h-7 bg-reddit_dark-brighter text-md text-white p-1 pl-2 focus:outline-none "
            placeHolder="Search"
          />
        </form>
      </header>
    </div>
  );
}

export default App;
