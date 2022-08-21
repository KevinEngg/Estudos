/*
 Buscando e contanto dados em arrays

 Baseado no array de livros por categoria abaixo, faça os seguintes desafios:
  * Contar o número de categorias e o número de livros em cada categoria 
  * Contar o número de autores 
  * Mostrar livros do autor Augusto cury
  * Transformar a função acima em uma função que irá receber o nome de um autor e devolver os livros desse autor.
*/

const BooksByCategory = [
    {
        category: "Riqueza",
        books: [{
            title: "Os segredos da mente milionária",
            author: "T. Harv Eker "
            },
            
            { title: "O homem mais rico da Babilônea",
                author: "George S. Clason "
            },
            
            { title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ], 
    },
    {
        category: "Inteligência Emocional",
        books: [{
         title: "Você é insubstituível",
         author: "Augusto Cury"
         },
         {
          title: "Ansiedade -- Como enfrentar o mal do século",
          author: "Augusto Cury"  
         },
         {
          title: "Os 7 hábitos das pessoas altamente eficazes",
          author: "Stefan R. Covey"  
         }
        ],
        
    }
]

const totalCategories = BooksByCategory.length //Contando total de categorias
console.log(totalCategories)

for (let category of BooksByCategory) //Contando livros da categoria 
{
    console.log('Total de livros da categoria ', category.category)
    console.log(category.books.length)
}

function ContAuthors() {
    let authors = []
    for (let category of BooksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) { //Procurando se tem o autor no array
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

function BooksOfAuthor(author)
{
    let books = []

    for (let category of BooksByCategory) {
        for (let book of category.books) {
            if (book.author === author) { //Buscando author recebido
                books.push(book.title)
            }
        }
    }
    console.log(`Total de livros do autor ${author} : ${books.join(", ")} `)
}

ContAuthors()
console.log("------------Busca por Autor-----------")
BooksOfAuthor('Augusto Cury')
BooksOfAuthor('Stefan R. Covey')
