import {body} from 'express-validator';
export const loginRules=[body('email').isEmail().normalizeEmail(),body('password').isLength({min:6})];
export const customerRules=[body('name').trim().notEmpty(),body('mobile').trim().notEmpty(),body('customerType').trim().notEmpty(),body('status').optional().isIn(['Active','Inactive','Lead'])];
export const productRules=[body('productName').trim().notEmpty(),body('sku').trim().notEmpty(),body('unitPrice').isFloat({min:0}),body('currentStock').optional().isInt({min:0}),body('minimumStock').optional().isInt({min:0})];
export const inventoryRules=[body('productId').isInt({min:1}),body('movementType').isIn(['IN','OUT']),body('quantity').isInt({min:1}),body('reason').trim().notEmpty()];
export const challanRules=[body('customerId').isInt({min:1}),body('status').optional().isIn(['Draft','Confirmed','Cancelled']),body('items').isArray({min:1}),body('items.*.productId').isInt({min:1}),body('items.*.quantity').isInt({min:1})];
