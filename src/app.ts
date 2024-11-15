import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import redis from './config/db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', async (req: Request, res: Response) => {
	// Set a key in Redis
	await redis.set('name', 'Redis');

	// Get the value of the key
	const name = await redis.get('name');

	res.send(`Hello, ${name}`);
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
