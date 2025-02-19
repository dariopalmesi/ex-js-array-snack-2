const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//   Snack 1 - Filtra e Modifica
// Crea una funzione che somma due numeri.
function somma(num1, num2) {
    return num1 + num2;
}
console.log(somma(52, 65));

// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
const longBooks = books.filter(book => book.pages > 300);
console.log(longBooks);
// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map(book => book.title)
console.log(longBooksTitles);
// Stampa in console ogni titolo nella console.
const boosTitle = books.forEach(book => console.log(book.title))

// Snack 2 - Il primo libro scontato
// Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter(book => book.available === true)
console.log(availableBooks);
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)

const discountedBooks = availableBooks.map(book => parseFloat(book.price.replace('€', '') * 0.8 * 100) / 100);
console.log(discountedBooks);

// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
const fullPricedBook = discountedBooks[0]
console.log(fullPricedBook);

// Snack 3 - Ordinare gli Autori
// Creare un array (authors) che contiene gli autori dei libri.
const authors = books.map(book => book.author);
console.log(authors);
// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
const areAuthorsAduls = authors.every(author => author.age >= 18)
console.log(areAuthorsAduls);
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
authors.sort((author1, author2) => author2.age - author1.age);
console.log(authors);











