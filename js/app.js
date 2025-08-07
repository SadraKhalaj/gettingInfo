async function showComments() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("posts has error.");
  } finally {
    console.log("posts uploaded:)");
  }
}

showComments();
