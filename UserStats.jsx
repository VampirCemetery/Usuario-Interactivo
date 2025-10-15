import { useState, useEffect } from 'react';

function UserStats({ seguidores, siguiendo }) {
    const [animatedSeguidores, setAnimatedSeguidores] = useState(seguidores);
    const [animatedSiguiendo, setAnimatedSiguiendo] = useState(siguiendo);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedSeguidores(seguidores);
            setAnimatedSiguiendo(siguiendo);
        }, 300);
        
        return () => clearTimeout(timer);
    }, [seguidores, siguiendo]);

    return (
        <div className="user-stats">
            <div className="stat">
                <span className="stat-number">{animatedSeguidores}</span>
                <span className="stat-label">Seguidores</span>
            </div>
            <div className="stat">
                <span className="stat-number">{animatedSiguiendo}</span>
                <span className="stat-label">Siguiendo</span>
            </div>
        </div>
    );
}

export default UserStats;