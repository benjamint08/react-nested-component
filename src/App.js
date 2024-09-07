import './App.css';
import NestedComponent from './NestedComponent';

function App() {
  return (
    <div>
      <header>
        <p>
          Nested Components Test
        </p>
        <NestedComponent title="Number 1">
          <p>I am expanded</p>
        </NestedComponent>
        <NestedComponent title="Number 2">
          <p>I am expanded</p>
        </NestedComponent>
        <NestedComponent title="Number 3">
          <p>I am expanded</p>
        </NestedComponent>
        <NestedComponent title="Number 4">
          <p>I am expanded</p>
        </NestedComponent>
      </header>
    </div>
  );
}

export default App;
