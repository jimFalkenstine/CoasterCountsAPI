# CoasterCounts API

## Introduction
This repository serves as my final project for the [Code Louisville](https://www.codelouisville.org) Spring 2022 Web Development Course 2.  The purpose of this code is to demonstrated the use of JavaScript and Git.

## Project Desription

**CoasterCounts API**

Coaster Counts API is a sample REST API featuring a selection of roller coasters and thier stats.

All measurements based on the English system

**Endpoints**

| HTTP Method | URI Path              | Description                                       |
|-------------|-----------------------|---------------------------------------------------|
| GET         | /                     | Returns a list of all coasters                    |
| GET         | /:id                  | Returns a single coaster                          |
| GET         | /search?id=n&name=str | Search for coasters by 'id' and/or 'name'         | 
| POST        | /                     | Adds a new coaster to list                        |                              |
| PUT         | /:id                  | Updates all of the properties of a single coaster |
| DELETE      | /:id                  | Deletes a single coaster                          |
| PATCH       | /:id                  | Updates specific properties of a single coaster   |

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
        "country": "United States"
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

## Technical Instructions

 - Requires Visual Studio Code
 - Requires Node.js
 - Requires cors, express, and nodemon npm packages

## Project Requirements

**Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app**


**Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)**

**Post to an external API and show that it has saved/persisted**

**Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value**

**Implement a log that records errors, invalid inputs, or other important events and writes them to a text file**

**Create a web server with at least one route and connect to it from your application using ExpressJS**
