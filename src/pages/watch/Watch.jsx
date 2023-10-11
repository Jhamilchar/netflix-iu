import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import ReactPlayer from "react-player";

const Watch = () => {
    let trailer = "https://www.youtube.com/watch?v=vEn_IB95oRg"
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        home
      </div>
      <ReactPlayer className="video" url={trailer} playing={true} loop={true} controls/>
    </div>
  );
}

export default Watch