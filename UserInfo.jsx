import { useState } from 'react';

function UserInfo({ user, isEditing, onSave, onCancel }) {
    const [editData, setEditData] = useState({
        nombre: user.nombre,
        email: user.email,
        biografia: user.biografia
    });

    const handleSave = () => {
        onSave({
            ...user,
            ...editData
        });
    };

    if (isEditing) {
        return (
            <div className="user-info editing">
                <input
                    type="text"
                    value={editData.nombre}
                    onChange={(e) => setEditData({...editData, nombre: e.target.value})}
                    className="edit-input"
                />
                <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({...editData, email: e.target.value})}
                    className="edit-input"
                />
                <textarea
                    value={editData.biografia}
                    onChange={(e) => setEditData({...editData, biografia: e.target.value})}
                    className="edit-textarea"
                />
                <div className="edit-actions">
                    <button className="btn btn-save" onClick={handleSave}>
                        Guardar
                    </button>
                    <button className="btn btn-cancel" onClick={onCancel}>
                        Cancelar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="user-info">
            <h2 className="user-name">{user.nombre}</h2>
            <p className="user-email">{user.email}</p>
            <p className="user-bio">{user.biografia}</p>
        </div>
    );
}

export default UserInfo;