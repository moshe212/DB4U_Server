const sql = require("mssql/msnodesqlv8");

const getSqldata = async () => {
  console.log("getdata");
  const sqlConfig = {
    user: "moshe",
    password: "4351",
    database: "Yad2",
    server: "localhost",
    port: 1433,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true,
    },
    // options: {
    //   // encrypt: true, // for azure
    //   trustServerCertificate: true, // change to true for local dev / self-signed certs
    // },
  };

  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(sqlConfig);
    const result = await sql.query`select top 5 City from mainposts`;
    console.log("result", result);
    return result;
  } catch (err) {
    // ... error checks
    console.log(err);
    return err;
  }
};

module.exports = { getSqldata };
