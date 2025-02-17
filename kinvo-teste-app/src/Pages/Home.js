import Header from "../Components/header";
import LateralTopics from "../Components/lateral-topics";
import Infos from "../Components/infos";

function Home() {
  return (
    <>
      <Header/>
      <article className='home-container'>
        <LateralTopics />
        <Infos />
      </article>
    </>
  );
}

export default Home;
