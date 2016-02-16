module.exports = {
  addUser(req, res) {
    console.log('User Added!');
    return res.json(req.body);
  }
};
