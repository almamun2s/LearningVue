const app = Vue.createApp({
    data() {
        return {
            showIt: true,
            title: 'The Ottoman Empire',
            sultan: 'Sultan Mehmet',
            age: 49,
            x: 0,
            y: 0,
            books: [
                { name: 'Bishad Sindhu', author: 'Mir Musharraf Hossain', img: 'https://placehold.co/50x30/orange/white', isFav: true, },
                { name: 'Love Candy', author: 'Unknown', img: 'https://placehold.co/50x30/orange/black', isFav: true, },
                { name: 'Meghnadhbodh', author: 'Micheal Modhusudan Dutt', img: 'https://placehold.co/50x30/black/white', isFav: false, },
                { name: 'Gitanjoli', author: 'Robindra nath Thakur', img: 'https://placehold.co/50x30/black/orange', isFav: true, },
            ],
            url: 'https://almamun.life',
        }
    },
    methods: {
        changeTitle(newTitle) {
            // this.title = 'Constantinopole'
            this.title = newTitle
        },
        toggleShow() {
            this.showIt = !this.showIt
        },
        handleEvent(e, data) {
            console.log(e)
            if (data) {
                console.log(data)
            }
        },
        handleMouse(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFavourite(book) {
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBook(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')