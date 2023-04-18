import React from 'react';
import MyButton from "./UI/button/MyButton";



const BookItem = (props) => {

    return (
        <div className="book">
            <div className="book__content" key={props.index+1}>
                
                     <p class= "name"><u><b> {props.book.book_title}</b></u></p>
                    {/*<strong><p classname = "name">{props.index+1}. {props.book.book_title}</p></strong>*/}
                    <div>
                        <div><p class ="description"><u><span>Автор:</span></u> {props.book.author_name}</p></div>
                        {props.book.section_title ? <div><p class ="description"><u><span>Раздел:</span></u> {props.book.section_title}</p></div> : null}
                        {props.book.publishing_house_title ? <div><p class ="description"><u><span>Издательство:</span></u> {props.book.publishing_house_title}</p></div> : null}
                        {props.book.book_description ? <div><p class ="description"><u><span>Описание:</span></u> {props.book.book_description}</p></div> : null}
                    </div>
                
            </div>
        </div>
    );
};

export default BookItem;
