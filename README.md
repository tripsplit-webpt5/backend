# TripSplit Documentation

## Deployed Backend Site: 
[Heroku TripSplit Backend](https://trip-split-backend.herokuapp.com/)

## API Endpoints

### Authentication

| Method | Endpoint           | Description                                                                                                                                                                             |
| ------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /auth/register | Expects a body with `username` and `password` keys, returns the users `id` and a `token`                                                               |
| POST   | /auth/login    | Expects a body with `username` and `password` keys, if they match-- returns the users `id` and a `token`   |

### Trips
  #### All of the following endpoints will require an authorization header with a user's valid token

| Method | Endpoint          | Description                                                                                                                                                                                                |
| ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /user/trips     | Adds a trip to the user. Expects a body with `title`, `user_id`, `number_travelers`, `destination`, `dates` and `names`. Title, user_id, and destination must be included, the others will default to null if no information is provided (except number_travelers which defaults to 0).      |
| GET    | /user/trips/all/userID     | Returns a list of trips for the user                                                                                                                      |
| GET   | /user/trips/tripID     | Returns a specific trip for the user           |
| PUT    | /user/trips/tripID | Updates information for a trip, can include any of the following values: `title`, `number_travelers`, `destination` `dates` and/or `names`|
| DELETE   | /user/trips/tripID     | Returns a `message` detailing if the delete was successful or not           |
