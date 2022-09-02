# Calculate Age

Calculate age is a service that can be used to calculate a user's date of birth by providing timestamp.

### How it was implemented
- The user's date of birth is gotten from the timestamp that was provided in the query parameter then ``` new Date(dateOfBirth * 1000).getFullYear() ``` was used to get the year the user was born.
- current date is gotten from ``` new Date().getFullYear() ``` 
- The user's age was gotten by subtracting the year the user was born from current year
- To prevent excessive usage from potentially ill-configured or malicious integrators ``` express-rate-limit ``` library was used and the request per second was set to 3.

## Api Reference
 ---
 ### Getting Started
- Base Url: The Base Url of the project is live at https://calculate-age-api.herokuapp.com/
- Authentication: the service does not need authentication

## Endpoints
---
> get /howold?dob=290338991

### General:
- Get age of a user
- use dob as query parameter in the howold endpoint
- insert a unix timestamp
> sample https://calculate-age-api.herokuapp.com/howold?dob=290338991

response sample

```
{
    "status":true,
    "message":"user's age is 43"
}

```
