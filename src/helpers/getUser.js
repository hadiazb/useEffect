const getUser = async () => {

  const randonNumber = parseInt((Math.random() * 10) + 1)

  const url = `https://jsonplaceholder.typicode.com/users/${randonNumber}`;

  const response = await fetch(url).then(res => res.json()).catch(err => console.log(err))

  return response
}

export default getUser
