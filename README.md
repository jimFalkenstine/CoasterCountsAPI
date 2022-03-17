# CoasterCountsAPI

Sample API with a selection of roller coasters

All measurements based on the English system

## Endpoints

| HTTP Method | URI Path              | Description                                       |
|-------------|-----------------------|---------------------------------------------------|
| GET         | /                     | Returns a list of all coasters                    |
| GET         | /:id                  | Returns a single coaster                          |
| GET         | /search?id=n&name=str | Search for coasters by 'id' and/or 'name'         | 
| POST        | /                     | Adds a new coaster to list                        |                              |
| PUT         | /:id                  | Updates all of the properties of a single coaster |
| DELETE      | /:id                  | Deletes a single coaster                          |
| PATCH       | /:id                  | Updates specific properties of a single coaster   |

## JSON response format

```json
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
    "otherNames": [
        "Italian Job: Stunt Track"
    ],
    "country": "United States"
}
```

## JSON response data types
| Property     | Data type |
|--------------|-----------|
| `id`         | Number    |
| `park`       | String    |
| `type`       | String    |
| `design`     | String    |
| `length`     | Number    |
| `height`     | Number    |
| `inversions` | Number    |
| `status`     | String    |
| `otherNames` | Array     |
| `country`    | String    |