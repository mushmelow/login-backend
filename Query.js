'use strict';
const bcrypt = require('bcrypt-as-promised');
const HASH_ROUNDS = 10;


class Query {
    constructor(conn) {
     this.conn = conn;
     }

createUser(user) {
  return bcrypt.hash(user.password, HASH_ROUNDS)
  .then(hashedPassword => {
           return this.conn.query('INSERT INTO users (email,username,password) VALUES (?, ?, ?)', [user.email, user.username, hashedPassword]);
       })
       .then(result => {
           return result.insertId;
       })
       .catch(error => {
           // Special error handling for duplicate entry
           if (error.code === 'ER_DUP_ENTRY'){
               throw new Error('A user with this username already exists');
           }
           else {
               throw error;
           }
       });

}

  //  test(){
  //    return this.conn.query(
  //           `
  //           desc user
  //           `
  //       );
  // }

}

module.exports = Query;
