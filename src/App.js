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
        {
          id:7,
          name:"1984",
          rating:4.5,
          price:20,
          image:"https://i.redd.it/np2cxds28t311.jpg"
        },
        {
          id:8,
          name:"The Great Gatsby",
          rating:4,
          price:30,
          image:"https://i1.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1"
        },
        {
          id:9,
          name:"The Invisible Man",
          rating:3,
          price:40,
          image:"https://images-na.ssl-images-amazon.com/images/I/51NIZqFLvJL._SX322_BO1,204,203,200_.jpg"
        },
        {
          id:10,
          name:"The New York Trilogy",
          rating:3.5,
          price:20,
          image:"https://upload.wikimedia.org/wikipedia/en/thumb/9/98/TheNewYorkTrilogycover.jpg/220px-TheNewYorkTrilogycover.jpg"
        },
        {
          id:11,
          name:"King Lear",
          rating:2,
          price:15,
          image:"https://blog.12min.com/wp-content/uploads/2018/05/25c-King-Lear-PDF-Summary.jpg"
        },
        {
          id:12,
          name:"The Picture of Dorian Gray",
          rating:4.5,
          price:15,
          image:"http://hilsingermendelson.com/wp-content/uploads/2018/08/cover.jpg"
        },
        {
          id:13,
          name:"Foundation",
          rating:5,
          price:20,
          image:"https://pictures.abebooks.com/isbn/9780345336279-es.jpg"
        },
        {
          id:14,
          name:"Foundation and Empire",
          rating:4.5,
          price:20,
          image:"https://i.ebayimg.com/images/g/7JsAAOSwsnVeQkD5/s-l1600.jpg"
        },
        {
          id:15,
          name:"Second Foundation",
          rating:4,
          price:20,
          image:"http://1.bp.blogspot.com/-_iIKTaaMoY0/TubVfF2oFpI/AAAAAAAAQQc/nO0VsWP2Vpk/s1600/SecondFoundation-cover-Ballantine-Edition-medium.jpg"
        },
        {
          id:16,
          name:"Foundation's Edge",
          rating:4.5,
          price:20,
          image:"https://i.pinimg.com/originals/a5/58/ff/a558ffcfda98b0c74384ceb7d7ff6bd5.jpg"
        },
        {
          id:17,
          name:"Foundation and Earth",
          rating:5,
          price:30,
          image:"https://live.staticflickr.com/7243/7380869036_8ea6488954_b.jpg"
        },
        {
          id:18,
          name:"Forward the Foundation",
          rating:5,
          price:25,
          image:"https://images-na.ssl-images-amazon.com/images/I/81Rn3%2B-1yYL.jpg"
        }, 
        {
          id:19,
          name:"Prelude to Foundation",
          rating:5,
          price:25,
          image:"https://images-na.ssl-images-amazon.com/images/I/51nk-4NOQFL._SX304_BO1,204,203,200_.jpg"
        },
        {
          id:20,
          name:"I, Robot",
          rating:5,
          price:25,
          image:"https://c8.alamy.com/comp/EXPRN3/1920s-usa-i-robot-book-cover-EXPRN3.jpg"
        }
      ]
    }
    console.log("books have been added");
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
