import './App.css';
import Header from './compnents/Header';
import Portfolio from './compnents/Portolio';
import data from './compnents/Dataforport'
import Contact from './compnents/contact';
import Footer from './compnents/Footer';
import AboutMe from './compnents/aboutme';
const info = data.map(item => {
    return(
    <Portfolio
        key = {item.id}
        img = {item.img}
        desc = {item.desc}
        name = {item.title}
        link = {item.link}
        lang = {item.languages}
        /> 
    )
})
function App() {
  return (
    <>
<Header />
<br />
    <h2 className="port-text">Portfolio:</h2>
<br /> 
    <div className="Portfolio-list">
      {info}
    </div>
<AboutMe />
<br />

<h2 className="social-text">Contact Me:</h2>
<Contact />
<Footer />
    </>
  );
}

export default App;
