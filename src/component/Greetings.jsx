import { useEffect, useState } from "react";

const Greetings = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 4) setGreeting("Good Night");
    else if (hour < 11) setGreeting("Good Morning");
    else if (hour < 16) setGreeting("Good Afternoon");
    else if (hour < 19) setGreeting("Good Evening");
    else setGreeting("Good Night");
  }, []);

  return <div className='greeting'>{greeting}</div>;
};
export { Greetings };
