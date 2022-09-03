
const Header = () => {
  return (
    <div className="app-sidebar">
      <h2 id="username">Grace Valerie Anyango</h2>
        <h4 id="location">Nairobi, Kenya</h4>
        <div className="sep-line"></div>
        <nav className="nav-profile-links">
            <ul className="profile-section">
                <li>
                   My <a href="https://github.com/ValGrace" rel="noreferrer" target="_blank">GitHub</a> profile.
                </li>
                <li>
                    My <a href="https://www.linkedin.com/in/grace-anyango-378947173/">LinkedIn page.</a>

                </li>
            
                <li><b>Phone:</b> +254745378501</li>
            
                <li><b>Email:</b> gracevalerie1@gmail.com</li>
            </ul>
        </nav>
        <div>
            <h4>Skills</h4>
            <p>Cloud Development, Software Engineering, Web Development</p>
            <p><b>Programming:</b> JavaScript(React and Node js), HTML, CSS, C#, SQL</p>
            <p><b>Tools: </b> Automation(TravisCI), Google Cloud Platform, AWS, Docker, Kubernetes, Serverless Framework</p>
        </div>
    </div>

    
  )
}

export default Header