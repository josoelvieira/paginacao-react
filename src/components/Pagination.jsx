import React from "react";

const Paginatio = ({pages, setCurrentPage}) => {
    return (
        <div className="pagination">
        {Array.from(Array(pages), (item, index) => {
          return <button className='button-pages' value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
        })}
      </div>
    )
}
export default Paginatio