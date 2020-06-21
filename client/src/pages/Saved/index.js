import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchResults from "../../components/SearchResults";

const Saved = () => {
  const [books, setBooks] = useState([{}]);

  useEffect(() => {
    getbooks()
  }, []);

  const getbooks = () => {
    API.findAll()
      .then(res => setBooks(res.data))
      .catch(err => setError(err));
  }

  const deleteBook = i => {
    API.deleteBook(books[i]._id)
      .then(res => getbooks())
      .catch(err => console.log(err))
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search Google Books</h1>
        {books.map((book,index) =>
          <SearchResults
            key ={index}
            title={book.title}
            subtitle ={book.subtitle}
            author ={book.author}
            description ={book.description}
            image = {book.image}
            link={book.link} 
            deleteBook={() => deleteBook(index)}
          />
          )}
      </Container>
    </div>
  );
};

export default Saved;
