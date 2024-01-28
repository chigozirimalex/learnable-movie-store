import { MovieStore } from './store.mjs'

const movieStore = new MovieStore()

const rentedMovie = movieStore.rent("Batman")
console.log(rentedMovie)
movieStore.takeBack("Batman")