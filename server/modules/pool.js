const pg = require("pg");
const Pool = pg.Pool;
const pool = new Pool({
     database: "weekend-to-do-app",
     user: "dalton",
     password: "dalton",
     host: "127.0.0.1",
     port: 5432,
     max: 10,
     idleTimeoutMillis: 30000,
});
pool.on("connect", () => {
     console.log("Postgresql Connected Successfully");
});
pool.on("error", (error) => {
     console.log("There was an error in postgres", error);
});

module.exports = pool;
