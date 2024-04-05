
const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');

const app = express();
const port = 3000;

// Set up SQLite database
const db = new sqlite3.Database('userdata.db');

// Create users table if it doesn't exist
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.post('/signup', (req, res) => {
    const { username, password, confirmPassword } = req.body;

    // Validate passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if username already exists
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (row) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Insert user into the database
        const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        stmt.run(username, password);
        stmt.finalize();

        res.status(200).json({ message: "Signup successful" });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON requests
app.use(express.static('public'));

// Oracle Database connection
async function initialize() {
    try {
        await oracledb.createPool({
            user: 'system',
            password: '1111',
            connectString: 'y ',
            poolMax: 5,
            poolMin: 0,
            poolIncrement: 1,
            poolTimeout: 4,
        });

        console.log('Connected to Oracle Database');
    } catch (err) {
        console.error('Database connection error:', err.message);
    }
}

initialize();

// ... (rest of the code)

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
