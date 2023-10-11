import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import featuredPrincipal from "../../img/featured.webp"
import oscurecido from "../../img/featuredprincipal.webp";
import './featured.scss'

const Featured = () => {
  return (
    <div className="featured">
      <img src={oscurecido} alt="Random image" />
      <div className="info">
        <img src={featuredPrincipal} alt="asd" />
        <span className="desc">
          Seventeen years after being wrongly imprisoned, a talented songwriter
          seeks justice against the men who caused her downfall and killed her
          family.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured