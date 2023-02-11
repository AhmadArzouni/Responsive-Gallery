import { useState } from "react";
import { Media } from "./media";
function App() {
  console.log(Media);
  

const[file,setfile]=useState(null);

  
  return (
    <div className="home">
      <h1>Responsive Media Gallery</h1>
      <div className="media-container">
    {



Media.map((media,index)=>(

<div className="media" key={index} onClick={()=>setfile(media)}>
  { media.type==='image'?<img src={media.url}></img>:<video src="" muted></video>
    
  }
  


</div>
))
    }
      </div>
      {file &&
      <div className="popup">
        <span onClick={()=>setfile(null)}>&times;</span>
        {file?.type==='image'?
          <img src={file?.url}></img>
          :
          <video src={file?.url}></video>
        }

      </div>
    }
    </div>
  );
}

export default App;
