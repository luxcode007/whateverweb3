const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = "your_secret_key_here";  // Please use a strong, unique key in production

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // In a real app, you would get the user's hashed password from the database
    const hashedPasswordFromDB = "...";

    if (username === "admin" && await bcrypt.compare(password, hashedPasswordFromDB)) {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send("Invalid username or password");
    }
});
