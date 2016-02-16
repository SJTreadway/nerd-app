import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import UserCtrl from './server-assets/UserCtrl';
const port = 8080;


let app = express();
app.use(cors(), bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.listen(port, function() {
  console.log('Listening on port:', port);
});

app.post('/api/users', UserCtrl.addUser);
