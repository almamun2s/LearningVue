const app = Vue.createApp({
    data(){
        return {
            showIt: true,
            title: 'The Ottoman Empire',
            sultan: 'Sultan Mehmet',
            age: 49
        }
    },
    methods: {
        changeTitle(newTitle){
            // this.title = 'Constantinopole'
            this.title = newTitle
        },
        toggleShow(){
            this.showIt = !this.showIt
        }
    }
})

app.mount('#app')