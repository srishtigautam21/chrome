import { quotesDB } from "../../database/quotes";
import "./quotes.css";

const randomQuotes = () => {
  const randomNum = Math.floor(Math.random() * quotesDB.length);
  return quotesDB[randomNum];
};
const Quotes = () => {
  const quote = randomQuotes();
  return (
    <div className='quotes'>
      <div className='quote-text'>{quote.quoteText}</div>
      <div className='quote-author'>{quote.quoteAuthor}</div>
    </div>
  );
};
export { Quotes };
