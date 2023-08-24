import { DataProvider } from "./Context/Context";
import RouteLayout from "./layout/RouteLayout/RouteLayout";


function App() {
  return (
    <>
    {/* Routes pages */}
    <DataProvider>
    <RouteLayout/>
    </DataProvider>
    
    </>
  );
}

export default App;
