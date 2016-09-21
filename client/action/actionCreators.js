//increament
export function increment(index) {
  return {
    //actions return object
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
export function removeComment(postId, i) {
  // i is the index id of the postId
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
