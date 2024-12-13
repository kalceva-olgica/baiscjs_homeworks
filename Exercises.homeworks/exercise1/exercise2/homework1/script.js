// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

function tellStory(array) {
  let name = array[0];
  let mood = array[1];
  let activity = array[2];

  return `This is ${name}. ${name} is a very nice person. Today she is very ${mood}. She is ${activity} all day. The end.`;
}

let storyArr = ["Sophie", "hyperactive", "playing tennis"];
let story = tellStory(storyArr);
console.log(story);
