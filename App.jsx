import UserProfile from './components/UserProfile';
import './styles.css';

const usuario = {
    id: 1,
    nombre: "Ana García",
    email: "ana@email.com",
    avatar: "/avatar.png",
    seguidores: 150,
    siguiendo: 85,
    biografia: "Desarrolladora frontend apasionada por React",
    habilidades: ["JavaScript", "React", "CSS", "Vue"],
    activo: true
};

function App() {
    const handleEdit = (updatedUser) => {
        console.log('Usuario actualizado:', updatedUser);
    };

    const handleFollow = (user) => {
        console.log('Siguiendo a:', user.nombre);
    };

    return (
        <div className="app">
            <h1>Perfil de Usuario Interactivo</h1>
            <UserProfile 
                user={usuario}
                onEdit={handleEdit}
                onFollow={handleFollow}
            />
        </div>
    );
}

export default App;