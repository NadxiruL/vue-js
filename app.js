let app = Vue.createApp({
  data() {
    return {
      url: "youtube.com",
      showBooks: true,
      name: "Nadzirul Mubin",
      title: "The Final Episode",
      age: 20,

      books: [
        {
          title: "way of the dragon",
          author: "james summerbank",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "beautiful you",
          author: "collins mac",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "paradise",
          author: "owen osborn",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },

  methods: {
    changeTitle(title) {
      //this.title = "Word of radiance";
      this.title = title;

      // this.title = title , dalam function passkan parameter title ,
      // kat depan passkan apa papa title dalam function changeTitle('something')
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent() {
      console.log(event);
    },

    toggleFav(item) {
      //if the current value is true reverse that and assign it to
      //value is fav for that book.
      //if it's true reverse it to false
      // if it's false reverse it to true.
      item.isFav = !item.isFav;
    },
  },

  //to define data property
  //which depend on other data.
  computed: {
    filteredBooks() {
      return this.books.filter((item) => item.isFav);
    },
  },
});

app.mount("#app");
