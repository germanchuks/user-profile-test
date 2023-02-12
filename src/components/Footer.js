import twitterLogo from '../img/Twitter--icon.svg'
import fbLogo from '../img/Facebook--icon.svg'
import instaLogo from '../img/Instagram--icon.svg'
import githubLogo from '../img/GitHub--icon.svg'

export default function Footer() {
    return (
        <div className="footer">
            <a href="/" rel="noreferrer" target="_blank"><img src={twitterLogo}  alt="Twitter Icon"/></a>
            <a href="/" rel="noreferrer" target="_blank"><img src={fbLogo} alt="Facebook Icon"/></a>
            <a href="/" rel="noreferrer" target="_blank"><img src={instaLogo} alt="Instagram Icon"/></a>
            <a href="/" rel="noreferrer" target="_blank"><img src={githubLogo}  alt="GItHub Icon"/></a>
        </div>
    )
}