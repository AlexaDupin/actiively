const client = require('../../config/db');

module.exports = {
    /**
     * Create one organism
     * @param {object} organism
     */
    async createOrganism(organism) {
        const organismQuery = await client.query(`
            INSERT INTO "organism"
            ("email", "name", "password", "description", contact_email, "phone_number")
            VALUES
            ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `, [organism.email, 
            organism.name, 
            organism.password, 
            organism.description, 
            organism.contact_email, 
            organism.phone_number]);
        // console.log("query", organismQuery.rows[0]);
        return organismQuery.rows[0];
    },
    /**
     * Find one code_organism, password by email
     * @param {text} email of the organism (want to connected)
     */
    async findOrganismInfosForLogin(email) {
        const organism = await client.query(`
            SELECT code_organism, password FROM "organism" WHERE email = $1
        `,[email]);
        return organism.rows[0]
    },
    /**
     * Find if one organism is in DB by email
     * @param {object} id of the organism
     */
    async findOneOrganism(id) {
        const organism = await client.query(`
            SELECT * FROM "organism" WHERE code_organism = $1
        `,[id]);
        return organism.rows[0]
    },
    /**
     * Create one organism
     * @param {object} organism
     * @param {object} id of the organism (connected)
     */
    async updateProfile(organism, id) {
        await client.query(`
        UPDATE "organism"
        SET email= COALESCE(NULLIF($1,''), email),
            name= COALESCE(NULLIF($2, ''), name),
            description= COALESCE(NULLIF($3,''), description),
            contact_email= COALESCE(NULLIF($4,''), contact_email),
            phone_number= COALESCE(NULLIF($5,''), phone_number)
        WHERE code_organism = $6
    `, [organism.email, 
        organism.name,  
        organism.description, 
        organism.contact_email, 
        organism.phone_number,
        id]);
    },
    /** Remove one organism
     * @param {string} id of the organism (connected)
     */
    async deleteProfile(id) {
        await client.query(`
        DELETE FROM organism WHERE code_organism = $1;`
        , [id]);
    }
}