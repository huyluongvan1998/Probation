/* global Component can be used without declear on vue instance (new Vue) */

let ComponentA = {
	template: `
  	<h4>Option Title </h4>
  `
}


Vue.component('friend-list', {
	props: ['friends'],
  template: 
  	`
    	<div>
        <TitleTest />
        <ul> 
          <li v-for='f in friends'>{{f.name}}</li>
        </ul>
      </div>
   
    `
});

Vue.component('TitleTest', {
	components: {
  	'ComponentA' : ComponentA
  },
	template: `
  <div>
  	<h1> title Test </h1>
    <ComponentA />
  </div>
  ` 
})


const vm = new Vue ({
	el: '#root',
  data: {
  	greeting: 'Hello Vue',
    email: 'test-email',
    friends: [
    			{name: 'Jack'},
          {name: 'Jill'},
          {name: 'Foo'},
          {name: 'Random'},
          {name: 'Ghost'}
    ],
    newFriend: '',
    
  },
  methods: {
  	addFriends() {
    	this.friends.push({name: this.newFriend});
      this.newFriend = '';
      return;
    }
  },
  filters: {
  	capitalize(el) {
    	return el.toUpperCase();
    }
  },
  created() {
  console.log('created');
  } ,
  mounted() {
  console.log('Mounted');
  }, 
  updated() {
  console.log('updated');
  },
  destroyed() {
  console.log('destroyed');
  },
});

setTimeout(() =>{vm.$destroy()}, 5000)





