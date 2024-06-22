const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./swagger/swagger-documentation.json');

// Import routes, services and controllers
const routes = require('./routes');
const app = express();
const port = 3000;

// Middleware setup
app.use(express.json());
app.use('/api-docs', swaggerUi.serve,
    swaggerUi.setup(openApiDocumentation));
// Apply CORS middleware with custom options
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:1338', 'http://localhost:8444', 'http://localhost:3004'], // Allow requests from these origins
    methods: ['GET', 'POST'], // Allow only specified methods
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// Register routes
app.use('/', routes);

// Setup HTTP server and Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Start the server
server.listen(port, () => {
    console.log('Server running on port ' + port);
});

module.exports = { app };
