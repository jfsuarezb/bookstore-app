import React from 'react';
import BookComponent from './BookComponent/BookComponent.js'
import HeaderComponent from './HeaderComponent/HeaderComponent.js'

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      books:[
        {
          id:1,
          name:"Slaughterhouse Five",
          rating:4.5,
          price:5,
          image:"https://s26162.pcdn.co/wp-content/uploads/2019/03/71gdrTOo6EL.jpg"
        },
        {
          id:2,
          name:"One Hundred Years of Solitude",
          rating:5,
          price:20,
          image:"https://i.harperapps.com/covers/9780060883287/x300.jpg"
        },
        {
          id:3,
          name:"Lord of the Flies",
          rating:5,
          price:10,
          image:"http://www.wikisummaries.org/w/images/8/83/Lordoftheflies_1997edition.jpg"
        },
        {
          id:4,
          name:"A Raisin in the Sun",
          rating:3,
          price:5,
          image:"https://images-na.ssl-images-amazon.com/images/I/518qvCGi8vL._SX296_BO1,204,203,200_.jpg"
        },
        {
          id:5,
          name:"The Moral Animal",
          rating:5,
          price:10,
          image:"https://images-na.ssl-images-amazon.com/images/I/51ERYcs+1-L._SY344_BO1,204,203,200_.jpg"
        },
        {
          id:6,
          name:"The Catcher in the Rye",
          rating:4,
          price:10,
          image:"https://www.asiabooks.com/media/catalog/product/cache/1/image/264x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780316769488_1.jpg"
        },
      ]
    }
  }
  render() {
    let booksRendered = this.state.books.map((bookDisplayed) => <BookComponent book={bookDisplayed}/>);
    return (
      <div>
        <HeaderComponent />
        {booksRendered}
      </div>
    );
  }
}

export default App;
