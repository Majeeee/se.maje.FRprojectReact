import { CounterProps } from "../types/Counter";

const Home: React.FC<CounterProps> = ({ count, setCount }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Home;
