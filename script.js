
//importo Vue

const {createApp} = Vue;

createApp({
  data(){
    return{
      title: 'Todolist',
      list: [],
      newTodo: ''
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
    },

    addTask(){
      const data = new FormData();
      data.append('todoItem', this.newTodo);

      axios.post('server.php', data)
      .then(result=>{
        this.list = result.data;
        this.newTodo = ''; //perchè non svuota il campo?
      });
    },

    removeTask(index){
      
      const data = new FormData();
      data.append('indexToDelete', index);
      
      axios.post('server.php', data)
      .then(result=>{
        this.list = result.data;
      });
    }
  },

  mounted(){
    this.getList();
  }
}).mount('#app');