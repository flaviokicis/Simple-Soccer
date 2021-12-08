import { useEffect, useState } from 'react';
import axios from 'axios';
import BlankModal from '../components/modal';
import './styles.css';
import Header from '../components/header';
import {IoMdFootball, IoIosSad} from 'react-icons/io'
import TableComponent from '../components/team-table';

export default function Home() {

    const [isLoading, setLoading] = useState(true);
    
    const [data, setData] = useState([]);

    const [orderName, setOrderName] = useState(false);

    const [error, setError] = useState(false);

    const loadData = async() => {
        try {
        const returnData = await axios.post(process.env.REACT_APP_API_ENDPOINT + "/api/tabela", {
            sortByName: orderName
        });
        setData(returnData.data);
        // Load data
        setLoading(false);
        } catch (error) {
            setError(true);
            // ERROR
        }
    };

    const refreshOrderName = () => {
        setLoading(true);
        setOrderName(!orderName);
    }

    useEffect(() => {
        loadData();
    }, [orderName]);

    useEffect(() => {
        loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
        <section className="main-bg">
        <Header/>
        <BlankModal isOpen={isLoading}>
            {
            !error ?
            <><h2> Carregando dados...  </h2>
            <IoMdFootball className="ballIcon" size={45} style={{
                justifySelf: 'center'}}/>
            
            </>
            : 
             <>
             <h2> Eita! Não conseguimos carregar os dados!  </h2>
             <IoIosSad size={45}/>
             </>
            }
        </BlankModal>
        <TableComponent teamData={data}
        setOrderName={refreshOrderName}/>
        </section>
        <footer>
            <p>Feito por Flávio Kicis</p>
        </footer>
        </>
    );
}