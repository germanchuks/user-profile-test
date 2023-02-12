import profilePic from "../img/userDisplayPicture.svg"
import emailLogo from '../img/email--icon.svg'
import linkedInLogo from '../img/linkedin.svg'

export default function Info() {
    return (
        <div className="profile">
            <img src={profilePic} alt="User"/>
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <small>laurasmith.website</small>
            <div className="profile--buttons">
                {/* <button className="email--button"><i class="fa-solid fa-envelope"></i><span className="email--tag">Email</span></button>
                <button className="linkedin--button"><i class="fa-brands fa-linkedin"></i><span>LinkedIn</span></button> */}
                <button className="email--button"><div className="button--text"><img src={emailLogo} alt="Email Logo"/><span className="email--tag">Email</span></div></button>
                <button className="linkedin--button"><div className="button--text"><img src={linkedInLogo} alt="LinkedIn Logo" /><span className="linkedin--tag">LinkedIn</span></div></button>
            </div>
        </div>
        
    )
}