var conn = require('./db');

module.exports = {
    save(fields) {
        return new Promise((resolve, reject) => {

            if (!fields.email) {
                reject("Preencha o e-mail");
            } else {
                conn.query(`INSERT INTO tb_emails (email) VALUES(?)`,
                    [fields.email], (err, results) => {
                        if (err) {
                            reject(err.message);
                        } else {
                            resolve(results);
                        }
                    });
            }

        });
    },
    getEmails() {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM tb_emails ORDER BY email", (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    },
    delete(id) {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM tb_emails WHERE id = ?`, [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
};