import logo from '../logo/wJ-removebg-preview.png'
import mongodb from '../picture/icons8-mongodb-48.png'
import typescript from '../picture/icons8-typescript-48.png'
import nextjs from '../picture/OIP-removebg-preview.png'


export default function Header() {

    return(
        <header>
            <div className="logo"><img src={logo}/></div>
        <div className="wave"></div>
        <h1>WJ</h1>
        <h4>FrontEnd Developer | Open to hire: Josephrealupwork@gmail.com</h4>
<br />
        <a className='Resume-body' href="https://drive.google.com/file/d/1EaDyVprQUocKe0IHPOTn4d85Qkk5dHZv/view?usp=share_link"><div>Resume</div></a>
        <div className="social">
            <a href="mailto: Josephrealupwork@gmail.com">
            <i className="fa-solid fa-envelope"></i></a>

            <a href="https://wa.link/gwermi#"><i className="fa-brands fa-whatsapp"></i></a>

            <a href="https://web.facebook.com/williams.joseph.56863"><i className="fa-brands fa-facebook"></i></a>

            <a href="https://www.instagram.com/therealjoseph001/"><i className="fa-brands fa-instagram"></i></a>
            
            <a href="https://www.linkedin.com/in/joseph-williams-1a7533243/"><i className="fa-brands fa-linkedin"></i></a>

            <a href="https://twitter.com/TheRealJoseph01"><i className="fa-brands fa-twitter"></i></a>
        </div>
<br /><br />

<h2 className='skill-text'>Skills :</h2>
    <div className='skills-bar'>
        <span className='html'>

        <p>HTML <i className="fa-brands fa-html5"></i></p>

        </span>

        <span className='css'>
        <p>CSS <i className="fa-brands fa-css3-alt"></i></p>

        </span>

        <span className='javascript'>
        <p>Javascript <i className="fa-brands fa-js"></i></p>

        </span>

        <span className='react-js'>
        <p>React Js <i className="fa-brands fa-react"></i></p>

        </span>
    </div>
<h2 className='still-learing'>Still Learning :</h2>
        <div className='skills-bar'>
                <span className='git'>
        <p>GIT <i class="fa-brands fa-git-alt"></i></p>

        </span>

        <span className='typescript'>
        <p>TypeScript  <img className='mongoicon' src={typescript} alt="" /></p>

        </span>

        <span className='next-js'>
        <p>Next JS  <img className='mongoicon' src={nextjs} alt="" /></p>

        </span>

        <span className='php'>
        <p>PHP <i className="fa-brands fa-php"></i></p>

        </span>

        <span className='sql'>
        <p>SQL <i className="fa-solid fa-database"></i></p>

        </span>

        <span className='laravel'>
        <p>Laravel <i className="fa-brands fa-laravel"></i></p>

        </span>

        <span className='mongodb'>
        <p>Mongo DB <img className='mongoicon' src={mongodb} alt="" /></p>
        </span>
        </div>
        </header>
    )
}