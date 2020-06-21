import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

function Search() {
  const [search, setSearch] = useState("Wikipedia");
  const [books, setBooks] = useState([{
    volumeInfo: {
    title: "",
    authors: ["author", "author"],
    description: "",
    imageLinks: {
      thumbnail:""
    },
    link: ""
  }}
]);

  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.items)
        setBooks(res.data.items);
      })
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const saveBook = (i) =>{ 
    const newbook = {
      title: books[i].volumeInfo.title,
      subtitle: books[i].volumeInfo.subtitle,
      author: books[i].volumeInfo.authors,
      description: books[i].volumeInfo.description,
      image: books[i].volumeInfo.imageLinks.thumbnail,
      link: books[i].volumeInfo.previewLink
    }
    API.saveBook(newbook)
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search Google Books</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
        />
        {books.map((book,index) =>
          <SearchResults
            index ={index}
            title={book.volumeInfo.title}
            subtitle ={book.volumeInfo.subtitle}
            author ={book.volumeInfo.authors}
            description ={book.volumeInfo.description}
            image = {book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
            link={book.volumeInfo.previewLink}
            saveBook={() => saveBook(index)}
          />
          )}
      </Container>
    </div>
  );
}

export default Search;
