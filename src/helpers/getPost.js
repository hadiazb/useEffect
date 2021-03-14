const getPosts = async (userId) => {

  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  const posts = await fetch(url).then(res => res.json()).catch(err => console.log(err))

  return posts
}

export default getPosts
