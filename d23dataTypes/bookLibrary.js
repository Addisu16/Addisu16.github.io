//step 1. Define a book object literals
/**
 * @param {constructors}
 */

const Book={
    title:"",
    author:"",
    pages:0,
    isRead:false,
    displayInfo(){
        const readStatus=this.isRead?"already read":"not read yet";
        console.log(`${this.title}by ${this.author},${this.pages}pages,${readStatus}`);
    }
};

//step 2:create arrays to hold the book

const library=[];//This array used to store all the book objects in the library manag't system


//3. step 3:create function to add books to the library
function addBookToLibrary(title,author,pages,isRead){
    const newBook=Object.create(Book);
    newBook.title=title;
    newBook.author=author;
    newBook.pages=pages;
    newBook.isRead=isRead;
    library.push(newBook);
}
//step 4. add some books to the library 

addBookToLibrary("The man","Me",124,false);
addBookToLibrary("The women","she",121,true);


//step 5:Create a function to display all the books in the library:
/*This function iterates through the library array using the forEach method, and calls 
the displayInfo method on each book object to log its information to the console.*/

function displayLibrary(){
    library.forEach(book=>book.displayInfo());
}

//Step 6: Test the functions

displayLibrary();

//step 7: Create a function to toggle the read status of a book:

/*This function finds a book object in the library array based on its title property, 
and toggles its isRead property from true to false or vice versa.*/

function toggleReadStatus(title){
    const book=library.find(book=>book.title===title);
    if(book){
        book.isRead=!book.isRead;
    }
}
//Step 8.Test the toggleReadStatus function:
toggleReadStatus("The man");
displayLibrary();