function UserAvatar({ avatar, nombre, activo }) {
    return (
        <div className="user-avatar">
            <img 
                src={avatar} 
                alt={`Avatar de ${nombre}`}
                className="avatar-img"
            />
            <div className={`status-indicator ${activo ? 'active' : 'inactive'}`}>
                {activo ? '🟢' : '⚫'}
            </div>
        </div>
    );
}

export default UserAvatar;