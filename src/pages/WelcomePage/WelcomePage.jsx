import "./welcomePage.css";
import { useCommonContext } from "../../context/CommonContext";

const WelcomePage = () => {
  const { setName } = useCommonContext();

  const nameInputHandler = (e) => {
    setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
    localStorage.setItem(
      "username",
      `${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`
    );
  };
  return (
    <div className='h-100 welcome-page-container'>
      <div className='welcome-message'>Hi!!👋 Whats your name?</div>
      <input
        className='welcome-input'
        type='text'
        onKeyDown={(e) =>
          e.code === "Enter" && e.target.value !== "" && nameInputHandler(e)
        }
      />
      <small className='press-enter'>Press Enter</small>
    </div>
  );
};
export { WelcomePage };
