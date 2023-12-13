import './App.css';
import LikePostRander from './components/LikePostRander';
// import LikeImage from './components/LikeImage';
// import LikePost from './components/LikePost';
import Likeimagerander from './components/Likeimagerander';
import RenderComponents from './components/RenderComponents';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      
        
         { <div className='buttons'>
        <RenderComponents render={(counter, handleCounter)=>{
          return <Likeimagerander handlecounter={counter} handleLikeimage = {handleCounter}/>}}/>

        <RenderComponents render={(counter, handleCounter)=>{
          return <LikePostRander handlecounter={counter} handleLikeimage = {handleCounter}/>}}/>
      </div> }
      
    </div>
  );
}

export default App;
