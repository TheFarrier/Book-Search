import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + query
    );
  },
  findAll: function() {
    return axios.get("/api/books/")
  },
  saveBook: function(bookData) {
    return axios.post("/api/books/", bookData)
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/"+ id)
  },
};
