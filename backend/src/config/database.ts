import {Pool} from 'pg'; import {env} from './env';
export const db=new Pool({connectionString:env.databaseUrl,ssl:env.databaseUrl.includes('localhost')?false:{rejectUnauthorized:false}});
