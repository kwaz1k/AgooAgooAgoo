export const getPartners = async () => {
    const res = await global.dbclient.query('select * from partners');
    return res.rows;
}

export const getCount = async (event, id) => {
    const res = await global.dbclient.query('select count from partners_products where id_partners = $1', [id]);
    return res.rows;
}

export const createPartners = async (event, data) => {
    const {type_partners, name, ceo, email, phone, addres, inn, rating} = data;
    const res = await global.dbclient.query('insert into partners (type_partners, name, ceo, email, phone, addres, inn, rating) values($1, $2, $3, $4, $5, $6, $7, $8);', [type_partners, name, ceo, email, phone, addres, inn, rating]);
    return res.rows;
}

export const updatePartners = async (event, data) => {
    const {type_partners, name, ceo, email, phone, addres, inn, rating, id} = data;
    const res = await global.dbclient.query('update partners set type_partners = $1, name = $2, ceo = $3, email = $4, phone = $5, addres = $6, inn = $7, rating = $8 where id = $9', [type_partners, name, ceo, email, phone, addres, inn, rating, id])
}