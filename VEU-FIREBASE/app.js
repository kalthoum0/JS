//loading the vue library gives us access to the vue object
//that has a method called create app 

const app= Vue.createApp({
  // template: '<h2>I am the template</h2>'
  data(){
    return{
      showBooks: true,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 46,
      x: 0,
      y: 0,
      books: [
        {title: ' name of the wind', author: 'patrick rothfuss', img: "assests/2025-11-03 (1).png", isFav:true}
        ,{title: ' Second book', author: 'Second author', img:"assests/2025-11-03 (3).png",  isFav:false}
        ,{title: 'third book', author: 'third author' , img: "assests/better.jpg" , isFav:true}
       ],
       url : 'https://vuejs.org/guide/quick-start.html'
    }
  },
  methods:{
    changeTitle(){
      this.title = 'new title'
    },
    toggleBooks(){
      this.showBooks = !this.showBooks
    },
    handleEvent(e){
      console.log(e,e.type)
    },
    handleMouseMove(e){
      this.x = e.offsetX
      this.y = e.offsetY            
    },
    toggleFav(book){
      book.isFav= !book.isFav      
    },    
  },
  computed: {
    filterbooks(){
      return this.books.filter((book) =>book.isFav)
    }
  }
}); 

// on the app I get access to a method called mount 
// and it tells the app where to mount the dom

//the app will mount the element with the id app

app.mount('#app')