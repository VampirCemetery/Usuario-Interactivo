import { useState } from 'react';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import UserStats from './UserStats';
import UserSkills from './UserSkills';
import '../styles.css';

function UserProfile({ user, onEdit, onFollow }) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(user);

    const handleSave = (updatedUser) => {
        setCurrentUser(updatedUser);
        setIsEditing(false);
        if (onEdit) onEdit(updatedUser);
    };

    const handleFollow = () => {
        const updatedUser = {
            ...currentUser,
            seguidores: currentUser.seguidores + 1
        };
        setCurrentUser(updatedUser);
        if (onFollow) onFollow(updatedUser);
    };

    return (
        <div className="user-profile">
            <UserAvatar 
                avatar={currentUser.avatar} 
                nombre={currentUser.nombre} 
                activo={currentUser.activo} 
            />
            <UserInfo 
                user={currentUser} 
                isEditing={isEditing}
                onSave={handleSave}
                onCancel={() => setIsEditing(false)}
            />
            <UserStats 
                seguidores={currentUser.seguidores}
                siguiendo={currentUser.siguiendo}
            />
            <UserSkills 
                habilidades={currentUser.habilidades}
                isEditing={isEditing}
            />
            <div className="user-actions">
                <button 
                    className="btn btn-edit"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? 'Cancelar' : 'Editar'}
                </button>
                <button 
                    className="btn btn-follow"
                    onClick={handleFollow}
                >
                    Seguir
                </button>
            </div>
        </div>
    );
}

export default UserProfile;     