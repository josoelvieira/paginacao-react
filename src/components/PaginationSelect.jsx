import React from "react";

const PaginationSelect = ({itensPerPage, setItensPerPage}) => {
    return (
      <div className="select">
        <div>
      <span>Itens por página: </span>
      </div>
      <div>
        
        <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
      </div>
      </div>
    )
}
export default PaginationSelect