/**
 * Part 2: Simple CRUD Operations Using HTTP
 * -------------------------------------------
 * Uses ONLY the core "http" and "fs" modules.
 * Data is stored/read from a JSON file (users.json) - no database used.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'users.json');

// Make sure the data file exists before the server starts
if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
}

// Read all users from the JSON file
function readUsers() {
    const raw = fs.readFileSync(dataFilePath, 'utf8');
    return raw ? JSON.parse(raw) : [];
}

// Write the users array back to the JSON file
function writeUsers(users) {
    fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2));
}

// Send a JSON response with a status code
function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

// Collect and parse the request body (for POST / PATCH)
function getRequestBody(req) {
    return new Promise((resolve) => {
        let body = '';
        req.on('data', (chunk) => (body += chunk.toString()));
        req.on('end', () => {
            resolve(body ? JSON.parse(body) : {});
        });
    });
}
// Extract the :id segment from a URL like /user/5
function getIdFromUrl(url) {
    const parts = url.split('/').filter(Boolean); // ["user", "5"]
    return Number(parts[1]);
}
const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    // Q1: POST /user - add new user
    if (method === 'POST' && url === '/user') {
        const body = await getRequestBody(req);
        const users = readUsers();

        const emailExists = users.some((u) => u.email === body.email);
        if (emailExists) {
            return sendJSON(res, 400, { message: 'Email already exists.' });
        }

        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name: body.name,
            age: body.age,
            email: body.email,
        };

        users.push(newUser);
        writeUsers(users);

        return sendJSON(res, 201, { message: 'User added successfully.' });
    }
    // Q2: PATCH /user/:id - update user
    if (method === 'PATCH' && url.startsWith('/user/')) {
        const id = getIdFromUrl(url);
        const body = await getRequestBody(req);
        const users = readUsers();

        const userIndex = users.findIndex((u) => u.id === id);
        if (userIndex === -1) {
            return sendJSON(res, 404, { message: 'User ID not found.' });
        }

        const updatedField = Object.keys(body)[0]; // e.g. "age"
        users[userIndex][updatedField] = body[updatedField];
        writeUsers(users);

        return sendJSON(res, 200, { message: `User ${updatedField} updated successfully.` });
    }
    // Q3: DELETE /user/:id - delete user
    if (method === 'DELETE' && url.startsWith('/user/')) {
        const id = getIdFromUrl(url);
        const users = readUsers();

        const userIndex = users.findIndex((u) => u.id === id);
        if (userIndex === -1) {
            return sendJSON(res, 404, { message: 'User ID not found.' });
        }
        users.splice(userIndex, 1);
        writeUsers(users);

        return sendJSON(res, 200, { message: 'User deleted successfully.' });
    }
    // Q4: GET /user - get all users
    if (method === 'GET' && url === '/user') {
        const users = readUsers();
        return sendJSON(res, 200, users);
    }
    // Q5: GET /user/:id - get user by id
    if (method === 'GET' && url.startsWith('/user/')) {
        const id = getIdFromUrl(url);
        const users = readUsers();
        const user = users.find((u) => u.id === id);

        if (!user) {
            return sendJSON(res, 404, { message: 'User not found.' });
        }
        return sendJSON(res, 200, user);
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});