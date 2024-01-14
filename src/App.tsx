import { Toaster } from "react-hot-toast";
import { UserList } from "./components/UserList";

const App = () => {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center">
        <UserList />
      </div>
      <Toaster />
    </>
  );
};

export default App;
