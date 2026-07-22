import {db} from '../config/database';
export async function listCustomers(query:any){const page=Math.max(1,Number(query.page)||1),limit=Math.min(100,Math.max(1,Number(query.limit)||10));const search=query.search?`%${query.search}%`:null;const where=search?'WHERE name ILIKE $1 OR mobile ILIKE $1 OR business_name ILIKE $1':'';const params=search?[search]:[];const count=await db.query(`SELECT count(*) FROM customers ${where}`,params);const rows=await db.query(`SELECT * FROM customers ${where} ORDER BY created_at DESC LIMIT $${params.length+1} OFFSET $${params.length+2}`,[...params,limit,(page-1)*limit]);return {items:rows.rows,pagination:{page,limit,total:Number(count.rows[0].count),pages:Math.ceil(Number(count.rows[0].count)/limit)}};}
export const customerById=async(id:number)=>{const {rows}=await db.query('SELECT * FROM customers WHERE id=$1',[id]);if(!rows[0]){const e:any=new Error('Customer not found');e.status=404;throw e;}return rows[0];};
export const createCustomer=async(body:any)=>{const {rows}=await db.query(`INSERT INTO customers(name,mobile,email,business_name,gst_number,customer_type,address,status,follow_up_date,notes) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,[body.name,body.mobile,body.email||null,body.businessName||null,body.gstNumber||null,body.customerType,body.address||null,body.status||'Active',body.followUpDate||null,body.notes||null]);return rows[0];};
export const updateCustomer=async(id:number,b:any)=>{await customerById(id);const {rows}=await db.query(`UPDATE customers SET name=$1,mobile=$2,email=$3,business_name=$4,gst_number=$5,customer_type=$6,address=$7,status=$8,follow_up_date=$9,notes=$10,updated_at=now() WHERE id=$11 RETURNING *`,[b.name,b.mobile,b.email||null,b.businessName||null,b.gstNumber||null,b.customerType,b.address||null,b.status,b.followUpDate||null,b.notes||null,id]);return rows[0];};

export const addFollowup=async(customerId:number,body:any,userId:number)=>{

await customerById(customerId);

const {rows}=await db.query(
`
INSERT INTO follow_ups
(customer_id,follow_up_date,notes,status,created_by)
VALUES($1,$2,$3,$4,$5)
RETURNING *
`,
[
customerId,
body.followUpDate,
body.notes,
body.status || "Pending",
userId
]
);

return rows[0];

};

export const getFollowups = async(customerId:number)=>{

    const {rows}=await db.query(
        `
        SELECT *
        FROM follow_ups
        WHERE customer_id=$1
        ORDER BY follow_up_date DESC
        `,
        [customerId]
    );

    return rows;

};
export const getPendingFollowups = async () => {

    const {rows} = await db.query(
        `
        SELECT 
            f.id,
            f.follow_up_date,
            f.notes,
            f.status,
            c.name,
            c.mobile,
            c.business_name
        FROM follow_ups f
        JOIN customers c
        ON c.id = f.customer_id
        WHERE f.status = 'Pending'
        ORDER BY f.follow_up_date ASC
        `
    );

    return rows;

};