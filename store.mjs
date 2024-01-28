export class MovieStore {
  constructor() {
    this.movies = ["Batman"];
  }

  /**
   * Rent a movie from our store
   * @param {string} name - Movie name
   * @returns - Rented movie
   */
  rent(name) {
    const movieIndex = this.movies.indexOf(name);
    if (movieIndex < 0) {
      throw new Error("Movie is not in store")
    }

    const movie = this.movies.splice(movieIndex, 1)
    return movie[0]
  }

  /**
  * Purchase a movie from our store
  * @param {string} name - Movie name
  */
  purchase(name) {
    const movieIndex = this.movies.indexOf(name);
    if (movieIndex < 0) {
      throw new Error("Movie is not in store")
    }

    const movie = this.movies.splice(movieIndex, 1)
    return movie[0]
  }

  /**
   * Takes back a movie that was previously rented out.
   * @param {string} movie 
   */
  takeBack(movie) {
    console.log("Took back", movie)
    this.movies.push(movie)
  }



}