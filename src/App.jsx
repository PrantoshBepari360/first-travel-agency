import { useEffect, useState } from "react";
import Main from "./Share/Main/Main";
import SpinnerLoader from "./Share/Loader/SpinnerLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);
  return(
    <>
    {
      loading ? (
        <SpinnerLoader /> 
      )
      : (
        <Main />
      )
    }
    </>
  )
 
}

export default App;
