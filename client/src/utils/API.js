/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all books
  // getBooksSearch: function(query) {
  //   return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  // },  
  // Saves a book to the database
  savedBooks: function(savedBooks) {
    return axios.post("/api/saved/", savedBooks);
  },
  // Gets the book with the given id
  getSavedBooks: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Deletes the book with the given id
  deleteSavedBooks: function(id) {
    return axios.delete("/api/saved/" + id);
  }

};
