import Firebase from 'firebase';

module.exports = {
  addChat(req, res) {
    console.log('Chat Added!');
    return res.json(req.body);
  }
};
