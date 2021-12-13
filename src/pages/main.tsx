import Home from "./main/Home"
import About from "./main/About"
import Features from "./main/Features"
import Illustrations from "./main/Illustrations"
import Roadmap from "./main/Roadmap"
import Roadmap2 from "./main/Roadmap2"
import Community from "./main/Community"
import Stream from "./main/Stream"
import Team from "./main/Team"
import Faq from "./main/Faq"

const Main = () => {
    return (
      <div>
        <Home />
        <About /> 
        <Features/>
        <Illustrations/>  
        <Roadmap/>
        <Roadmap2/>  
        <Community/>
        <Stream/>
        <Team/>
        <Faq/>           
        {/* <div style="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;"></div> */}       
      </div>
    )
  }

export default Main;