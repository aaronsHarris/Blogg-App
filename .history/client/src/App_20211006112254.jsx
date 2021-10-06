import { Route } from 'react-router-dom';
import Posts from './screens/Posts/Posts'
import CreatePosts from './screens/CreatePosts/CreatePosts'
import EditPost from './screens/EditPost/EditPost'
import PostDetails from './screens/PostDetails/PostDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Posts />
      </Route>
      <Route exact path='/posts'>
        <CreatePosts />
      </Route>
      <Route exact path='/posts/:id'>
        <PostDetails />
      </Route>
      <Route exact path='/posts/:id/edit'>
        <EditPost />
      </Route>
    </div>
  );
}

export default App;
