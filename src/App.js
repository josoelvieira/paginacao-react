import './App.css';
import { useEffect, useState  } from 'react';
import { wait } from '@testing-library/user-event/dist/utils';
import Paginatio from './components/Pagination';
import PaginationSelect from './components/PaginationSelect'



function App() {
  const [itens, setItens] = useState([])
  const [itensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => (data))

      setItens(result)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])


  return (
    <div className="App">
        <PaginationSelect itensPerPage={itensPerPage} setItensPerPage={setItensPerPage}/>
      
      {currentItens.map(item => {
        return <div className='item'><span>{item.id}</span><span>{item.title}</span><span>{item.completed}</span></div>
        
      })}
      <Paginatio pages={pages} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
