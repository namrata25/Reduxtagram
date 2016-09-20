//increament
function increament(index) {
  return {
    //actions return object
    type: 'INCREMENT',
    index
  }
}

//add comment
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
function removeComment(postId, i) {
  // i is the index id of the postId
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
