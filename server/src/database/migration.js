const db = require("../app/models");

async function reset() {
    console.log('Will rewrite the Mysql database, adding some data.');
    await db.sync({force: true})
    // await db.sync({alter: true})
    await require("./seeders/DatabaseSeeder")(db);
}

reset().then(() => console.log('Done, Database drop and re-sync!'));