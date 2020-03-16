import React, {useState} from 'react';
import s from './Paginator.module.css';


type PropsType ={
    totalItemsCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(p:number,portionNumber:number)=>void
    portionSize?:number
    curPortionNumber:number
}
let Paginator:React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10,curPortionNumber}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages:Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(curPortionNumber);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>

        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>
        }
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={currentPage === p ? s.selectedPage + ' ' + s.page : s.page}
                             key={p}
                             onClick={() => {
                                 onPageChanged(p,portionNumber);
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>Next</button>}
    </div>
    )
};

export default Paginator;
