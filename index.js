console.log("connected");

function counter(state=0, action){
  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
}
 
var store = Redux.createStore(counter)
var valueEl = document.getElementById('value');

function render(){
  valueEl.innerHTML = store.getState().toString()
}

function logStore(){
  console.log(store);
}

render()
store.subscribe(render)
store.subscribe(logStore)

document.getElementById('increment')
.addEventListener('click', function(){
  store.dispatch({type: 'INCREMENT'})
})
document.getElementById('decrement')
.addEventListener('click', function(){
  store.dispatch({type: 'DECREMENT'})
})
