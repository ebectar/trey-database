module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/tracy_posts_db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
