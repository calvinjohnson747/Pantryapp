const mysql= require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'pantry'
  });
  
mysqlConnection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
});


const GroupName = (req, res) => {
    try {
            const query = `
            select h.groupname from house h 
            inner join association a on h.groupid = a.groupid
            inner join users u on a.userid = u.userid
            where u.name = ?;
            `;
            const username = req.params.username;
            mysqlConnection.query(query, [username], (error, results) => {
                if (error) {
                    console.error('Error fetching group name:', error);
                    res.status(500).send('Internal Server Error');
                    return;
                }
      
                if (results.length === 0) {
                    res.status(404).send('Group not found');
                    return;
                }
      
                const groupName = results[0].groupname;
                res.status(200).json({ groupName });
            });
    } catch (error) {
            console.error('Error in GET /api/:username:', error);
            res.status(500).send('Internal Server Error');
        }   
}


module.exports = {GroupName};
