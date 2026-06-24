import http from 'http';
import { app } from './app';
import { mongoClient } from './db/connections';
import { PORT } from './config';


const server = http.createServer(app);

(async () => {
 try {
  console.log('Establishing connection to MongoDB...');
    await mongoClient();
    console.log('MongoDB connection established successfully');
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
})(); 