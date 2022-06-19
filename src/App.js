import "./App.css";
import { MainPage, WelcomePage } from "./pages/index";
import { useCommonContext } from "./context/CommonContext";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [imageUrl, setImageUrl] = useState();
  const { name, setName } = useCommonContext();
  const fetchUnsplashApi = async () => {
    try {
      const { data } = await axios.get(
        "https://api.unsplash.com/photos/random/?client_id=zJ9f9avxrS-Tt2UYC4hK1eh7vRmny7QUiLxMQN9l4S8&&orientation=landscape&&query=travel%20dark"
        // https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&&orientation=landscape&&query=stars%20dark
      );

      setImageUrl(data?.urls?.regular);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUnsplashApi();
  }, []);
  useEffect(() => {
    setName(localStorage.getItem("username"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className='h-100'
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
      }}
    >
      {name ? <MainPage /> : <WelcomePage />}
    </div>
  );
}

export default App;
