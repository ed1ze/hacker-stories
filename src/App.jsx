import * as  React from 'react';



const welcome = {
  title: 'React',
  greeting: 'Hey'
};



const test = React.createElement('h1',null,'Edon');

function App(){
  return (
    <div>
      {test}
      <h1>{welcome.greeting} {welcome.title}</h1>
      <label htmlFor="search">Search:</label>
      <input id='search' type="text"/>
      {console.log(test)}
    </div>
  );
}






export default App;
