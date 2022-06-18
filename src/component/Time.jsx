const Time = () => {
  const getime = () => {
    return (
      new Date()
        .getHours()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
      ":" +
      new Date()
        .getMinutes()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 })
    );
  };
  return <div className='time-wrapper'>{getime()}</div>;
};
export { Time };
