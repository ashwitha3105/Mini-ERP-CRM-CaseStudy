import { Router } from 'express';
import * as c from '../controllers/customer.controller';
import { authenticate } from '../middleware/auth';
import { allowRoles } from '../middleware/roles';
import { validate } from '../middleware/validator';
import { customerRules } from '../validations';

const r = Router();

r.use(authenticate);

r.get('/', c.list);

// KEEP THIS BEFORE /:id
r.get('/pending-followups', c.pendingFollowups);

r.get('/:id', c.get);

r.post('/', allowRoles('Admin', 'Sales'), customerRules, validate, c.create);

r.put('/:id', allowRoles('Admin', 'Sales'), customerRules, validate, c.update);

r.post('/:id/followup', allowRoles('Admin', 'Sales'), c.followup);

r.get('/:id/followups', c.followups);

export default r;