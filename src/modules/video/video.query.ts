// import { Injectable } from "@nestjs/common";
// import { TableName } from "src/common/constants/app.constants";
// import { DBQuery } from "src/common/interfacr/dbquery.interfacr";


// @Injectable()
// export class VideoQuery {

//     insertData(tableName: string, key: string, value: string): DBQuery {
//         const query = `INSERT INTO ${tableName} (${key}) values (${value})`;
//         console.log('query...', query);
//         return {
//             name: 'insertdata',
//             type: 'INSERT',
//             query: query,
//         };
//     } 
    
//     getAllData(): DBQuery {
//         const query = `SELECT * FROM ${TableName.Table_Banner} ORDER BY id DESC;`;
//         console.log('query...', query);
//         return {
//             name: 'getdata',
//             type: 'SELECT',
//             query: query,
//         };
//     }
// }