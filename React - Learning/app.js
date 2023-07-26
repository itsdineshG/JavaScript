const rootElement = document.getElementById('root');

function HelloWorld(){
  return (
    <div>
      <h1>Hello World</h1>
      <button>Click Here to Change Color</button>
    </div>
  );
}

ReactDOM.render(<HelloWorld />, rootElement);