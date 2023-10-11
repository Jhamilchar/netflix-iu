import { Add, LinkOutlined, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import './listitem.scss'
import { useState } from 'react';
import ReactPlayer from 'react-player';

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://www.youtube.com/watch?v=TdKNJr7vyUw";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-2173-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABegMbgsBPQkYkWQc0qt_0ypa1ytd7lNuKbIOIJ6XYpQ_IyDSs17F0-LkESrHWVKgF7mIm3fahsAhACOfn-vQNrl-5LuQQMGMElPwcWE0MCssaoGpgvgw4TAeEgxuJbU4h6eF.jpg?r=bca"
        alt=""
      />
      {isHovered && (
        <>
          <ReactPlayer className="video"  url={trailer} playing={true} loop={true} />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownOutlined className='icon' />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="disc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              nihil expedita eius quo aspernatur..
            </div>
          </div>
          <div className="genre">Action</div>
        </>
      )}
    </div>
  );
}

export default ListItem