import { useCommonContext } from "../../context/CommonContext";
import "./mainPage.css";
import { Greetings } from "../../component/Greetings";

const MainPage = () => {
  const { name, setName, mainFocus, setMainFocus } = useCommonContext();

  const mainFocusHandler = (e) => {
    localStorage.setItem(
      "focus",
      `${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`
    );
    setMainFocus(
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    );
  };

  const editNameHandler = () => {
    setName(null);
    localStorage.setItem("username", null);
  };

  const editFocusHandler = () => {
    setMainFocus(null);
    localStorage.setItem("focus", null);
  };

  return (
    <div className='h-100 main-page-container'>
      {/* <Clock /> */}
      <div className='greeting-wrapper'>
        <Greetings />, {name}.
      </div>
      <div className='main-focus-wrapper'>
        {mainFocus ? (
          <div className='main-focus'>My main focus is : {mainFocus} </div>
        ) : (
          <input
            className='main-focus-input'
            type='text'
            placeholder='Enter your main focus'
            onKeyDown={(e) =>
              e.code === "Enter" && e.target.value !== "" && mainFocusHandler(e)
            }
          />
        )}
      </div>
      {/* <Weather />
      <Quotes />
      <Todo /> */}
      {name !== null && (
        <button className='btn btn-name' onClick={() => editNameHandler()}>
          Edit Name
        </button>
      )}
      {mainFocus !== null && (
        <button className='btn btn-focus' onClick={() => editFocusHandler()}>
          Edit Focus |
        </button>
      )}
    </div>
  );
};
export { MainPage };
