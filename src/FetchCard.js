import React, {useState, useEffect} from 'react'
import getUser from './helpers/getUser';
import getPosts from './helpers/getPost';

const FetchCard = () => {
  const [user, setUser] = useState({})
  const [loadingUser, setLoadingUser] = useState(false)
  const [loadingPosts, setLoadingPosts] = useState(false)
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState({})

  const updatePosts = (userId) => {
    setLoadingPosts(false)
    getPosts(userId).then((posts) => {
      setPosts(posts)
      setLoadingPosts(true)
    }).catch((err) => {
      console.log(err);
    })
  }

  const updateUser = () => {
    setLoadingUser(false)
    getUser().then((user) => {
      setUser(user)
      setLoadingUser(true)
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    updateUser()
  }, [count])

  useEffect(() => {
    if (user?.id) {
      updatePosts(user.id)
    }
  }, [user])

  return (
    <div>
      {
        loadingUser ? 
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <br/>
            
            <h2>Posts</h2>
            <h2>Posts - user: { user.id}</h2>

            <ul>

              {
                loadingPosts ? 
                  posts.map(post => (
                  <li key={post.id}>
                    <h4>{post.title}</h4>
                  </li>
                  ))
                :
                <h4>Cargando...</h4>
                
              }
            </ul>

          </div>
        :
          <h4>Cargando...</h4>
      }
      {
        loadingUser ? 
          <button onClick={() => setCount(count + 1)}>Change User</button>
        :
          null
      }
      
    </div>
  )
}

export default FetchCard;
