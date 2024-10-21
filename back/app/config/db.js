/**
 * Plutôt que créer et connecté un Client
 * On va plutôt créer un "pool" de client et
 * laisser notre module manager les connexions
 * de plusieurs client en fonction des besoins.
 *
 * Le package pg étant bien fait, pas besoin de changer aurtre chose.
 * l'objet de pool à aussi une méthode query donc le reste de notre code
 * continuera de fonctionner
 *
 * Comme pour Client les informations de connexion
 * sont lu soit directement à partir de l'env soit donnée en paramêtre
 */
// const debug = require('debug')('SQL:log');
// const { Pool } = require('pg');

// const pool = new Pool({
//     host: process.env.PGHOST, // or 'localhost'
//     // user: 'postgres',//'actiively', // db user
//     user: process.env.PGUSER,
//     max: 20,
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000,
//   });

// module.exports = {
//     // On expose quand même le client original "au cas ou"
//     originalClient: pool,

//     // On fait une méthode pour "intercepter"
//     // les requêtes afin de pouvoir les afficher
//     // L'opérateur de "rest" permet de transformer
//     // ici X variables en param. en un tableau
//     async query(...params) {
//         debug(...params);

//         // L'opérateur ici fait l'effet inverse on transforme
//         // un tableau en une liste
//         // de variables / paramétre ce qui fait que la méthode query du client sera
//         // appelé exactement de la même façon que celle de notre module
//         return this.originalClient.query(...params);
//     },
// };


const { Client } = require('pg');
require('dotenv').config();

const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;