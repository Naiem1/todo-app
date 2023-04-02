import Todo from './components/Todo/Todo';

const App = () => {
  return (
    <div className="">
      <h1 className="fixed left-0 right-0 top-3 text-center text-3xl underline">
        Todo List
      </h1>
      <div
        className="
      bg-gradient-to-r
     from-cyan-500
      to-blue-500 
      flex justify-center
       h-screen overflow-hidden"
      >
        <Todo />
      </div>
    </div>
  );
};

export default App;
