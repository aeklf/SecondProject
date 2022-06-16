const router = require('express').Router();
const User = require('../../models/User');



//POST to create a new user
router.post('/' , async (req, res) => {
  try {
   const newUser =  await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
})



// GET to bring one user
router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// POST method for user's login
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
                             
        //Here I give to checkPassword Method the users input in order to validate the password
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      res.json({ user: userData, message: 'You are now logged in!' });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;