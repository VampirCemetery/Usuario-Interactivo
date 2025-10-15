import { useState } from 'react';

function UserSkills({ habilidades, isEditing }) {
    const [newSkill, setNewSkill] = useState('');
    const [currentSkills, setCurrentSkills] = useState(habilidades);

    const addSkill = () => {
        if (newSkill.trim() && !currentSkills.includes(newSkill.trim())) {
            setCurrentSkills([...currentSkills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const removeSkill = (skillToRemove) => {
        setCurrentSkills(currentSkills.filter(skill => skill !== skillToRemove));
    };

    return (
        <div className="user-skills">
            <h3>Habilidades</h3>
            <div className="skills-list">
                {currentSkills.map((skill, index) => (
                    <div key={index} className="skill-tag">
                        {skill}
                        {isEditing && (
                            <button 
                                className="skill-remove"
                                onClick={() => removeSkill(skill)}
                            >
                                ×
                            </button>
                        )}
                    </div>
                ))}
            </div>
            {isEditing && (
                <div className="add-skill">
                    <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Nueva habilidad"
                        className="skill-input"
                    />
                    <button className="btn btn-add" onClick={addSkill}>
                        Agregar
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserSkills;