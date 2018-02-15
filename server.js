const express = require('express'),
      bodyParser = require('body-parser'),
      port = 3000,
      ctrl = require('./usersCtrl'),
      cors = require('cors'),
      app = express();

      app.use(bodyParser.json());
      app.use(cors());

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:id', ctrl.getUserById)
app.get('/api/admins', ctrl.getAdmins)
app.get('/api/nonadmins', ctrl.getNonAdmins)
app.get('/api/user_type/:type', ctrl.getUserType)

app.put('/api/users/:id', ctrl.updateUser)

app.post('/api/users', ctrl.addNew)

app.delete('/api/users/:id', ctrl.deleteUser)


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    })