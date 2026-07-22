import app from './app';import {env} from './config/env';import {db} from './config/database';
async function start(){await db.query('SELECT 1');app.listen(env.port,()=>console.log(`API listening on ${env.port}`));}start().catch(e=>{console.error(e);process.exit(1);});
