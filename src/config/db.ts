import Redis from 'ioredis';

// Create a new Redis client
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

// Handle Redis connection events
redis.on('connect', () => {
	console.log('Connected to Redis');
});

redis.on('error', err => {
	console.error('Redis error:', err);
});

// Export the Redis client so you can use it in other parts of your app
export default redis;
