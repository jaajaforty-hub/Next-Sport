import pg from "pg";


export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});


// export async function initDb() {
//   try {

//     await db.query(`
//       CREATE TABLE IF NOT EXISTS Days(
//           id  SERIAL ,
//           name VARCHAR(15) PRIMARY KEY
//       )
//   `);

//     await db.query(`
//       CREATE TABLE IF NOT EXISTS Teams (
//         id INTEGER PRIMARY KEY,
//         logo BYTEA, 
//         name VARCHAR(40),
//         country VARCHAR(50),
//         result VARCHAR(10),
//         odd TEXT,
//         time TEXT,
//         dayName VARCHAR(15) REFERENCES Days(name)
//       );
//     `);

//     const days = [['Sunday'],['Monday'],['Tuesday'],['Wednesday'],['Thursday'],['Friday'],['Saturday']]

//     for(const day of days){
//         await db.query(`
//             INSERT INTO Days (name) 
//             VALUES($1) ON CONFLICT (name) DO NOTHING
//         `,day)
//     }


//     console.log("Teams table verified/created successfully.");
//   } catch (err) {
//     console.error("Error creating table:", err);
//   }
 
// };

