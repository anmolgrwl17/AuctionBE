const { application } = require("express");
var express = require("express");
var router = express.Router();
const db = require('../database');

const cars = [
    {
        "id": "9nYNxZP2",
        "submission_id": "92QyLpO6",
        "main_photo": {
          "base_url": "media.carsandbids.com",
          "path": "171ab1e538119e13fa98382f268326fc825fdc20/photos/92QyLpO6.AmRrYQ4Vq-(edit).jpg?t=164374387831"
        },
        "title": "2017 BMW M4 Coupe",
        "sub_title": "444 Horsepower, Competition and Executive Packages, California-Owned",
        "no_reserve": false,
        "location": "Clovis, CA 93611",
        "mileage": "43,100 Miles",
        "seller": {
          "photo": null,
          "username": "KhaledZ"
        },
        "auction_end": "2022-02-10T21:02:00.000+00:00",
        "current_bid": 27500,
        "watching": false,
        "status": "live"
      },
      {
        "id": "37DMqqNv",
        "submission_id": "rxgLYb1W",
        "main_photo": {
          "base_url": "media.carsandbids.com",
          "path": "1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/rxgLYb1W.MAtjrS1ph-(edit).jpg?t=164314720619"
        },
        "title": "2014 BMW M6 Convertible",
        "sub_title": "Southern- and Western-Owned, Recent Engine Rebuild, Executive Package",
        "no_reserve": false,
        "location": "Denver, CO 80247",
        "mileage": "64,500 Miles",
        "seller": {
          "photo": null,
          "username": "killerpitou"
        },
        "auction_end": "2022-02-09T20:38:00.000+00:00",
        "current_bid": 15432,
        "watching": false,
        "status": "live"
      },
      {
        "id": "3BB60g1d",
        "submission_id": "rwEDgRvw",
        "main_photo": {
          "base_url": "media.carsandbids.com",
          "path": "53c555c200cf6166a2fe45044ae68634ec93f278/photos/rwEDgRvw.2z__m0eJF-(edit).jpg?t=164316160254"
        },
        "title": "2008 Porsche 911 Turbo Coupe",
        "sub_title": "~33,600 Miles, 6-Speed Manual, Unmodified, Sport Chrono Package",
        "no_reserve": false,
        "location": "Mobile, AL 36619",
        "mileage": "33,600 Miles",
        "seller": {
          "photo": null,
          "username": "bg8810"
        },
        "auction_end": "2022-02-08T20:54:00.000+00:00",
        "current_bid": 60500,
        "watching": false,
        "status": "live"
      },
      {
        "id": "9QVYADad",
        "submission_id": "rN1bG4BG",
        "main_photo": {
          "base_url": "media.carsandbids.com",
          "path": "d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/rN1bG4BG.fjT4sAqlO-(edit).jpg?t=164325010652"
        },
        "title": "1988 Porsche 944 Turbo",
        "sub_title": "~20,400 Miles, 5-Speed Manual, Limited-Slip Differential",
        "no_reserve": false,
        "location": "Jacksonville Beach, FL 32250",
        "mileage": "20,400 Miles",
        "seller": {
          "photo": null,
          "username": "ACC121"
        },
        "auction_end": "2022-02-07T20:00:00.000+00:00",
        "current_bid": 33000,
        "watching": false,
        "status": "live"
      }
];


router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

// router.get("/auction", (req, res) => {
//     res.send(cars);
// });

router.get("/auction", async (req, res) => {
    const result = db.query('select * from auction');
    res.status(200).send(result);
});


// router.get("/auction/:id", (req, res) => {
//     const car = cars.find(c=> c.id === parseInt(req.params.id));
//     if(!car) res.status(404).send('The car with id not found!')
// });
// application.listen(7000, ()=> console.log("Listening to 7000")); 
module.exports = router;