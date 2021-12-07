import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../App';
import { api } from '../services/api';
import '../styles/home.scss';

import { Navbar } from './Nav';

export function Home() {
    const { user } = useContext(AuthContext);

    const [league, setLeague] = useState([]);

    useEffect(() => {
        api.get("/leagues/").then(response => {
            console.log(response.data)
            setLeague(response.data['data']);
        })
    }, []);

    function renderDados() {
        if (user) {
            return (
                <>
                    <Navbar/>
                    <div className="cards-content">
                        <h2>Ligas</h2>
                    </div>
                    <div className="leagues-container">
                        <div className="list">
                            {league.map(leagues => (
                                <div className="list-row" key={leagues.id}>
                                    <ul>
                                        <img src={leagues.logos['light']} alt={leagues.name} />
                                        <li>{leagues.name}</li>

                                        <li>{leagues.abbr}</li>
                                    </ul>
                                </div>))}
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <div style={{ opacity: 0}}>
                    <div className="cards-content">
                        <h2>Ligas</h2>
                    </div>
                    <div className="leagues-container">
                        <div className="list">
                            {league.map(leagues => (
                                <div className="list-row" key={leagues.id}>
                                    <ul>
                                        <img src={leagues.logos['light']} alt={leagues.name} />
                                        <li>{leagues.name}</li>

                                        <li>{leagues.abbr}</li>
                                    </ul>
                                </div>))}
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {renderDados()}
        </>
    )
}