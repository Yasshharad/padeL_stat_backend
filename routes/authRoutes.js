const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require("passport");

// initial google ouath login
router.get("/google",passport.authenticate("google",{scope:["profile","email"]}));

router.get("/google/callback",passport.authenticate("google",{
    successRedirect:"https://statapp.in/",
    failureRedirect:"https://statapp.in/login"
}))

router.get("/login/success", async (req, res) => {
    if (req) {
        res.status(200).json({
          success: true,
          message: "successfull",
          user: req.user
        });
      } else {
        res.status(400).json({ message: "Not Authorized" });
    }
});


router.get('/logoutGoogle', function(req, res, next){
    req.logout(function(err) {
      if (err) {
        return next(err);
      }
      setTimeout(() => {
        res.redirect('https://statapp.in');
    }, 3000);
    });
  });

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

// Forgot password route
router.post('/forgot-password', authController.forgotPassword);

// Reset password route
router.post('/reset-password', authController.resetPassword);

module.exports = router;
