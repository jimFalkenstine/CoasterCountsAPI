# CoasterCounts API

## Introduction
This repository serves as my final project for the [Code Louisville](https://www.codelouisville.org) Spring 2022 Web Development Course 2.  The purpose of this code is to demonstrated the use of JavaScript and Git.

## Project Description

**CoasterCounts API**

Coaster Counts API is a sample REST API featuring a selection of roller coasters and thier stats.

All measurements based on the English system

**Endpoints**

| HTTP Method | URI Path                  | Description                                       |
|-------------|---------------------------|---------------------------------------------------|
| GET         | /api/                     | Returns a list of all coasters                    |
| GET         | /api/:id                  | Returns a single coaster                          |
| GET         | /api/search?id=n&name=str | Search for coasters by 'id' and/or 'name'         | 
| POST        | /api/                     | Adds a new coaster to list                        |                              |
| PUT         | /api/:id                  | Updates all of the properties of a single coaster |
| DELETE      | /api/:id                  | Deletes a single coaster                          |
| PATCH       | /api/:id                  | Updates specific properties of a single coaster   |

**JSON response format**

```json
{
    "status": 200,
    "statusText": "OK",
    "message": "All coasters retrieved.",
    "data": {
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
        "otherNames": [
            "Italian Job: Stunt Track"
        ],
        "country": "United States",
        "imageURL": "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kings-island/poi/rides/banners/ki-backlotstuntcoaster-bannerv2.jpg"
    }
}
```

**JSON response data types**
| Property     | Data type |
|--------------|-----------|
| `id`         | Number    |
| `name`       | String    |
| `park`       | String    |
| `type`       | String    |
| `design`     | String    |
| `length`     | Number    |
| `height`     | Number    |
| `inversions` | Number    |
| `status`     | String    |
| `otherNames` | Array     |
| `country`    | String    |
| `imageURL`   | String    |

## Technical Instructions

 - Requires Visual Studio Code
 - Requires Node.js
 - Requires nodemon, express, annd cors npm packages
 - Requires the Handlebars template view engine

## User Instructions

1. Clone/download repository to your local machine.
2. Open CoasterCountsAPI folder in Visual Studio Code.
3. Open a new split terminal with Powershell in Visual Studio Code.
4. In the left terminal, run npm install in the CoasterCountsAPI directory.
5. In the right terminal, change the directory to CoasterCountsWebsite and run npm install there.
6. Run npm start in the left directory to start the API on http://localhost:5000.
7. Run npm start in the right directory to start the Website on http://localhost:3000.
8. Navigate your preferred web browser to http://localhost:3000 to view the CoasterCounts Website.

-You can also access the CoasterCounts API via Heroku https://coaster-counts-api.herokuapp.com/api/

## Project Requirements

**Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app**

On lines 6 - 15 of coasterRepo.js, the get method of the coasterRepo object reads and parses the coasters.json file.   

**Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)**

The async function getSingleCoaster() in the scripts.js file of the CoasterCounts website uses fetch() to retrieve coaster data.

**Implement a log that records errors, invalid inputs, or other important events and writes them to a text file**

The logRepo object in logRepo.js has a write method that logs exceptions to a log.txt file.

**Create a web server with at least one route and connect to it from your application using ExpressJS**

The Express server for the CoasterCounts API is created in index.js.  The server has three get routes as well as post, put, delete, and patch routes.
