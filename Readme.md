# Movie store 
Defines an object and a set of methods that acts as an API for accessing the movie store.

Example:
```javascript
const rentedMovie = movieStore.rent("Batman")
console.log(rentedMovie)
```
An error will be thrown if you try to rent a movie that doesn't exist in the movie store.