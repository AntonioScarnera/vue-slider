const app = new Vue({
    el: '#app',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        activeIndex: 0,
        intervalId: null
    },
    methods: {
        nextSlide(){
            this.activeIndex = (this.activeIndex === 4) ? 0 : this.activeIndex += 1;
        },
        prevSlide(){
            this.activeIndex = (this.activeIndex === 0) ? 4 : this.activeIndex -= 1;
        },
        autoScroll(){
            this.intervalId = setInterval(()=>{
                this.nextSlide();
            }, 3500)
        },
        stopAutoScroll(){
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    },
    mounted(){
        this.autoScroll();
    }
})




