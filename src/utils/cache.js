const cache = new Map();
const withCache = (key, ttlSeconds, fn) => {
  return async (...args) => {
    const now = Date.now();
    const cached = cache.get(key);

    if (cached && now - cached.timestamp < ttlSeconds * 1000) {
      cached.response.headers['X-Cache'] = 'HIT';
      return cached.response;
    }

    const response = await fn(...args);
    response.headers['X-Cache'] = 'MISS';

    cache.set(key, { response, timestamp: now });

    return response;
  };
};

module.exports = { withCache };