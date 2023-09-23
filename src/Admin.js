import React, { useState } from 'react';
import axios from 'axios';

function Admin() {
    const [headline, setHeadline] = useState('');
    const [link, setLink] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);

    const handleSubmit = () => {
        if (!token) return alert("Please login first.");

        axios.post('http://localhost:3001/news', { headline, link }, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(() => {
                setHeadline('');
                setLink('');
                alert('News added successfully!');
            })
            .catch(error => {
                alert("Failed to add news.");
            });
    };

    const handleLogin = () => {
        axios.post('http://localhost:3001/login', { username, password })
            .then(response => {
                setToken(response.data.token);
                alert("Logged in successfully!");
            })
            .catch(error => {
                alert("Invalid username or password.");
            });
    };

    return (
        <div>
            {!token ? (
                <div>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <input value={headline} onChange={(e) => setHeadline(e.target.value)} placeholder="Headline" />
                    <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link" />
                    <button onClick={handleSubmit}>Add News</button>
                </div>
            )}
        </div>
    );
}

export default Admin;
