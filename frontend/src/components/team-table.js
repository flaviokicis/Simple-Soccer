import React, { useRef } from 'react';
import './table.css';
import TeamRow from './team-row';

const TableComponent = ({ teamData, setOrderName }) => {

    const clickable = useRef(null);

    const toggle = () => {
        if (clickable.current.classList.contains('grayed')) {
            clickable.current.classList.remove('grayed')
        } else {
            clickable.current.classList.add('grayed')
        }
    };

    return (
        <section className="tableContainer">
            <table className="tableWrapper">
                <tbody>
                <tr className="tableHeader">
                    <td className="headerRow"> 
                        <p ref={clickable} className="clickableName" onClick={ () => 
                        {
                             setOrderName()
                             toggle()
                        }}>Nome</p>
                        <p>Posição</p>
                        <p>PG</p>
                        <p>V</p>
                        <p>E</p>
                        <p>D</p>
                    </td>
                </tr>
                </tbody>
                <tbody className="tableChildren">
                {
                    
                    (teamData && teamData.length !== 0 ? teamData.map(teamData => {
                    return (
                        <tr className="child-row" key={teamData.posicao}>
                            <td key={teamData.posicao}>
                                <TeamRow key={teamData.posicao} teamData={teamData}/>
                            </td>
                        </tr>
                    )
                    })
                    : 
                    <>
                    {
                       
                       [...Array(20)].map((i, e) => 
                       {
                       return (
                       <tr key={e}>
                           <td className="loading-row">
                               <p>...</p>
                           </td>
                       </tr>
                       )}
                       )
                       
                    }
                    </>
                    )
                    
                }
                </tbody>
            </table>
        </section>
    );
};

export default TableComponent;