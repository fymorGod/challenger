import '../styles/links.scss';
import face from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github-sign.png';

export function Contact() {
    return (
        <div className="content-contact">
            <div className="content-social">
                <h2>Redes Sociais</h2>
                <div className="listas">
                    <ul>
                        <li><a href="https://www.facebook.com/luisfylip.costa">Facebook</a> <img src={face} alt="Facebook" /></li>
                        <li><a href="https://www.instagram.com/_fylipmoreira/">Instagram</a><img src={insta} alt="Instagram" /></li>
                        <li><a href="#">Twitter</a><img src={twitter} alt="Twitter" /></li>
                        <li><a href="https://github.com/fymorGod">Github</a><img style={{background: "#fff", borderRadius: '50px'}} src={github} alt="Github" /></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}