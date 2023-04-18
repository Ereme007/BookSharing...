import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import MyInput2 from "../components/UI/input2/MyInput2";
import BookItem from "../components/BookItem"
import BookService from "../API/book/BookService"
import { GiRollingDices } from "react-icons/gi";
import classes from '../components/UI/button/MyButton.module.css';
import '../styles/App.css';
import '../styles/Bookshelf.css';

const Home = () => {
    const [books, setBooks] = useState([])
    const [listOfFoundBooks, setListOfFoundBooks] = useState([])
    const [inputBookTitle, setInputBookTitle] = useState({book_title: ''})
    const router = useHistory()

    async function getBooks () {
        const response = await BookService.getBooks3();
        setBooks(response.data)
    }
    async function getAllInformationAboutBookByPartOfTitle (value) {
        setInputBookTitle({...inputBookTitle, book_title: value})
        let response = await BookService.getAllInformationAboutBookByPartOfTitle(value);
        setListOfFoundBooks(response);
    }

    useEffect(() => {
        getAllInformationAboutBookByPartOfTitle("")
        getBooks()
    }, [])

    return (
        <div className="App">
        <div className="block1">
           <div className="App">
            <p className ="title">BookSharing...</p>
            <div>
                <MyInput2
                    value={inputBookTitle.book_title}
                    onChange={(e) => {
                        getAllInformationAboutBookByPartOfTitle(e.target.value)
                    }}
                    type="text"
                    placeholder="Поиск..."
                />
                {inputBookTitle.book_title ?
                    listOfFoundBooks.map((listOfFoundBooks, index) =>
                        <div className="book_item_box" key={index}>
                            <BookItem book={listOfFoundBooks} index={index} />
                            <MyButton onClick={() => router.push(`/extradition/${listOfFoundBooks.id_book}`)}> Подробнее </MyButton>
                        </div>
                    )
                :null}
            </div>

             <p className ="exserif" style={{display: 'inline-block'}}>Случайная подборка книг</p>
            <div className="dices_button">
                <button className={classes.myBtn2} onClick={getBooks}>
                    <GiRollingDices className={classes.myBtn3}/>
                </button>
            </div>
            {books.map((book, index) =>
                <div className="book_item_box" key={index}>
                    <BookItem book={book} index={index} />
                    <MyButton onClick={() => router.push(`/extradition/${book.id_book}`)}> Подробнее </MyButton>
                </div>
            )}
</div>
</div>
        </div>

    )
};

export default Home;
