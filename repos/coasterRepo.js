let coasterRepo = {
    get: function() {
      return [
        {
            "id" : 1,
            "name": "Adventure Express",
            "park": "Kings Island",
            "type": "Steel",
            "design": "Sit Down",
            "make": "Arrow Dynamics",
            "length": 2963,
            "height": 63,
            "speed": 35,
            "inversions": 0,
            "year": 1991,
            "status": "Operating",
            "otherNames": null,
            "country": "United States"
          },
          {
            "id": 2,
            "name": "Backlot Stunt Coaster",
            "park": "Kings Island",
            "type": "Steel",
            "design": "Sit Down",
            "make": "Premier Rides",
            "length": 1960,
            "height": 45.2,
            "speed": 40,
            "inversions": 0,
            "year": 2005,
            "status": "Operating",
            "otherNames": [ "Italian Job: Stunt Track" ],
            "country": "United States"
          },
          {
            "id": 3,
            "name": "Banshee",
            "park": "Kings Island",
            "type": "Steel",
            "design": "Inverted",
            "make": "Bolliger & Mabillard",
            "length": 4124,
            "height": 167,
            "speed": 68,
            "inversions": 7,
            "year": 2014,
            "status": "Operating",
            "otherNames": null,
            "country": "United States"
          }
      ];
    }
  };
  
  module.exports = coasterRepo;