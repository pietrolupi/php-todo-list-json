
//importo Vue

const {createApp} = Vue;

createApp({
  data(){
    return{
      title: 'Todolist',
      list: [],
    }
  },

  methods:{
    getList(){
      console.log('CIAO LISTA');

      axios.get('server.php')
      .then(result=>{
        console.log(result.data);
        this.list = result.data;
      })
    }
  },

  mounted(){
    this.getList();
  }
}).mount('#app');