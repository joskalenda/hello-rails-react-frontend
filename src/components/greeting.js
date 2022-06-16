import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsFromApi } from '../redux/greetings/greetingReducer';

const Greeting = () => {
  const allGreetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  const [greetingData, setGreetingData] = React.useState([{
    id: 0,
    content: 'Hello, world!',
  }]);

  const handleRandomMessage = () => {
    const newGreetings = allGreetings[Math.round((allGreetings.length - 1) * Math.random())];
    setGreetingData([newGreetings]);
  };

  useEffect(() => {
    dispatch(fetchGreetingsFromApi());
  }, []);

  return (
    <div>
      <h1>Greetings</h1>
      {greetingData.map((greeting) => (
        <div key={greeting.id}>
          <p>{greeting.content}</p>
        </div>
      ))}
      <button type="button" onClick={handleRandomMessage}>Next Message</button>
    </div>
  );
};

export default Greeting;