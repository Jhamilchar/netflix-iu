import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import List2 from '../../components/list/List2';
import List3 from "../../components/list/List3";
import Navbar from '../../components/navbar/Navbar'
import './home.scss'


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List2 />
      <List3 />
    </div>
  );
}

export default Home