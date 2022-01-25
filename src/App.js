import './App.css';
import { useEffect, useState  } from 'react';
import { wait } from '@testing-library/user-event/dist/utils';

function App() {
  const [itens, setItens] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => (data))

      setItens(result)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      {itens.map(item => {
        return <div className='item'><span>{item.id}</span><span>{item.title}</span><span>{item.completed}</span></div>

      })}
    </div>
  );
}

export default App;
