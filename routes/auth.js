const router = require("express").Router();
const passport = require("passport");
const validator = require("../middleware/auth");
const User = require('../models/User');
const Event = require('../models/Event');

// @route   GET auth/google
// @desc    Gets the Google login screen
// @access  Private
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ['profile']
  })
);

// @route   GET auth/google/redirect
// @desc    Callback for google to redirect to. Grabs code from Google.
// @access  Private
router.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    console.log(req.session);
    res.redirect('http://localhost:3000/home')
  }
);

// @route   GET auth/validate
// @desc    Check auth and send back user and timeline data
// @access  Private
router.get("/validate", validator, async (req, res) => {
  const {user: userId} = req.session.passport;

  try {
    const user = await User.findById(userId);
    const userEvents = await Event.find({userId: userId});
    // Create an array, which will hold events sorted by year
    const sortedEvents = [];
    const years = [];

    // Set unique years
    userEvents.forEach(event => {
      const year = new Date(event.date).getFullYear();
      const month = new Date(event.date).getMonth();
      
      if (years.indexOf(year) === -1) {
        years.push(year);
        sortedEvents.push({
          year: year,
          months: []
        })
      }
      
      // Cool technique here to make working with an array of objects more flexible
      const yearIdx = sortedEvents.map(e => e.year).indexOf(year);
      let monthIdx = sortedEvents[yearIdx].months.map(e => e.month).indexOf(month);
      
      if (!sortedEvents[yearIdx].months[monthIdx]) {
        sortedEvents[yearIdx].months.push({
          month: month,
          events: []
        })
      }

      monthIdx = sortedEvents[yearIdx].months.map(e => e.month).indexOf(month);
      sortedEvents[yearIdx].months[monthIdx].events.push(event);
    });

    // const filteredEvents = userEvents.filter(event => new Date(event.date).getFullYear() === 2020)

    console.log('FILTERED: ', JSON.stringify(sortedEvents, null, 2));

    const payload = {
      user: user,
      events: sortedEvents
    }

    res.status(200).json(payload);
  } catch(err) {
    console.log(err);
  }

  // try {
  //   const user = await User.findById(userId);
  //   const events = await Event.find({userId: userId});
  //   const sortedEvents = [];
    
  //   events.forEach(eventX => {
  //     const eventX_Year = new Date(eventX.date).getFullYear();
  //     let noMatch = false;

  //     // Check if the event is empty, and if not, try to match a year
  //     if (sortedEvents.length === 0) {
  //       noMatch = true;
  //     } else {
  //       sortedEvents.forEach(year => {
  //         const eventY_Year = year.year;

  //         if (eventX_Year === eventY_Year) {
  //           year.events.push(eventX);
  //           return;
  //         } else {  
  //           noMatch = true;
  //         }
  //       })
  //     }

  //     // If no year was matched, make a new one.
  //     if (noMatch) {
  //       noMatch = false;

  //       const obj = {
  //         year: eventX_Year,
  //         events: [eventX]
  //       }

  //       sortedEvents.push(obj);
  //     }
  //   })

  //   console.log('EVENTS SORTED: ', sortedEvents)

  //   const payload = {
  //     dbUser: user,
  //     dbEvents: events,
  //     sortedEvents: sortedEvents
  //   }

  //   // console.log('Validation payload for redux: ', payload);

  //   res.status(200).json(payload);
  // } catch(err) {
  //   console.log(err);
  // }
});

router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

module.exports = router;
