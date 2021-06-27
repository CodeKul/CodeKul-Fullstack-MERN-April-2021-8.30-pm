

let bookContainer = document.querySelector(".search")
//let searchBooks = document.getElementById("search-box");
let book = document.getElementById("search-box").value


const getBooks = async (book) => {
   const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}`
   );

   const data = await response.json();
   console.log(data);
   return data;


}


const extractThumbnail = ({imageLinks}) => {
   const DEFAULT_THUMBNAIL = "icons/logo.svg"
   if (!imageLinks || !imageLinks.thumbnail) {
      return DEFAULT_THUMBNAIL
   }

   return imageLinks.thumbnail.replace("http://", "https://")
}


const drawChartBook =async (subject, startIndex = 0) => {
   let cBookContainer = document.querySelector(`.${subject}`);
   cBookContainer.innerHTML = `
   <div class="prompt">
   <div class="loader"></div>
   </div>`

   const cdata = await getBooks(
      `subject:${subject}&startIndex=${startIndex}&maxResults=6`
   );
}