// a reducer takes in two things:

//1. an action(info about what happened)
//2. copy of current state

function posts(state = [], action) {
  console.log('in posts', state, action);
  return state;
}

export default posts;
