const ResumeBody = () => {
  return (
    <div className="resume-body">
        <h2>About Me</h2>
        <div className="me-section">
            <p>As an open-minded and curious individual, I thrive from learning new skills, sharing ideas and knowledge, and taking on new and exiting challenges.</p>
        </div>
        <h2> Projects</h2>
        <div className="project">
        <h3>Monolith To MicroServices <a href="https://github.com/ValGrace/udagram-microservices" target="_blank" rel="noreferrer"> (Deploying a MicroService Application)</a></h3>
        <ul id="project-section">
            <li>Separated the backend API service into a user api and feed api then provisioned a postgresql database managed by AWS. </li>
            <li>Used a CI/CD tool to automate the build of docker images. </li>
            <li>Created an EKS Cluster then deployed the application using deployment and service yaml files.</li>
            <li>Exposed an external IP address through which the application was accessible.</li>
        </ul>
        </div>
        <div className="project">
            <h3>Serverless Application <a href="https://github.com/ValGrace/udagram-serverless" target="_blank" rel="noreferrer">(Serverless)</a></h3>
            <ul id="project-section">
                <li>Created a serveless application then added a serverless yaml file to provision resources on AWS through CloudFormation.</li>
                <li>Integrated auth0 to help grant users authorization to perform CRUD operations on the app.</li>
                <li>Refactored code for lambda functions and separated business logic from the data access logic. </li>
                <li>Used AWS CloudWatch to track metrics and logs for my application. </li>
            </ul>
        </div>
        <div className="project">
            <h3>Image Filtering Application <a href="https://github.com/ValGrace/udagram-second-project" target="_blank" rel="noreferrer">Deploying a FullStack Application</a></h3>
            <ul id="project-section">
                <li>Refactored code to filter images when uploaded using Typescript.</li>  
                <li>Deployed the application on aws Elastic BeanStalk. </li>
            </ul>
        </div>
        <h2>Experience</h2>
            <div className="project">
                <h3>NodeJS Backend API Housing Project </h3>
                <ul id="project-section">
                    <li>Collaborated on a project to build a housing application backend api using node js.</li>
                    <li>Created the signup and login api then connected the api to an sl database.  </li>
                </ul>
                </div>
            <div className="project">
                <h3>Microsoft Game Of Learners Hackathon (Dec 2021)</h3>
                <ul id="project-section">
                    <li>Collaborated on a team to build an IOT application that solves that solves a biodiversity project.</li>
                    <li>Designed the cloud solution for the IOT application.</li>
                </ul>
                </div> 

               <h2>Education</h2>
               <div className="education-section">
                 <div className="education">
                    <p id="prog">Software Developer Degree, KCA University</p>
                    <p>Sep. 2018 - Dec. 2022 </p>
                 </div>
                 <div className="education">
                    <p id="prog">Cloud Developer Nanodegree, Udacity</p>
                    <p>May. 2022 - Sep. 2022</p>
                 </div>
                 <div className="education">
                    <p id="prog">Cloud Engineering Program, Google Africa Scholarship Program</p>
                    <p>May. 2021 - Apr. 2022</p>
                 </div>
               </div>


    </div>
  )
}

export default ResumeBody