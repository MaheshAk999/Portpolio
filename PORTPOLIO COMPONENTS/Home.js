import {ServicesData,Projects,Upcoming,Achievements,ServicesAdditionalData,ProjectsAdditionalData,UpcomingProjects,AcheivementsAdditionalData,Skils,Tools,CoursesInformation,Courses} from '../PORTPOLIO COMPONENTS/Data'
const AnchorTag=(props)=>{
    {
        return props.data.map((i,ind)=>{
            return <a className="nav-link" aria-current="page" href={i.href} key={ind}> {i.name} </a>
        })
    }
}
const NavBar=()=>{
    const NavBarData=[{name:"Services",href:"#services"},{name:"Skills", href:"#Skill"},{name:"Projects" ,href:"#projects"},{name:"Acheivements",href:"#achievements"},{name:"About Me",href:"#AboutMe"}]
    return <>
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{fontSize:'25px',fontWeight:'800',color:'red'}} > PORTPOLIO </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontSize:'20px'}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <AnchorTag data={NavBarData}/>
          <li className="nav-item">
            <a href="https://drive.google.com/file/d/1X0o8HSmDWz09EY4-8w0vnGUQRRVmQie6/view?usp=sharing" className="btn btn-outline-dark mt-1 resume" style={{width:'3m',borderRadius:'0',fontWeight:'700',fontSize:'20px',listStyle:'none'}}> Resume </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
}
const Img=(props)=>{
    return <img src={require(`../PORTPOLIO ASSETS/PNG/${props.name}`)} />  
}
const PhotoMain=()=>{

    return <> 
    <div className="PhotoMain">
        <div align="center" style={{padding:'0.5cm '}}>
            <img src={require('../PORTPOLIO ASSETS/PNG/JOHNDOE.png')} alt="Error" style={{width:'9cm',height:'9cm'}}/>
        </div>
        <div align="center" >
            <h5 style={{fontWeight:'700'}}> Hi I'm</h5>
            <h1 style={{fontWeight:'700'}}> Akaramsetty Mahesh </h1>
            <p style={{fontSize:'20px',fontWeight:'700'}}> Full Stack Web Developer </p>
            <div className="aboutsocialmedia"> 
            <Img name="LINKEDIN.png"/>
            <Img name="GITHUB.png"/>
            <Img name="FACEBOOK.png"/>
            <Img name="SLACK.png"/> <br /> <br />
            </div>
            <button className='btn btn-outline-dark '> Download CV </button>  &nbsp;
            <a className='btn btn-outline-dark' style={{fontWeight:'700',borderRadius:'0'}} href='#contactme'> Hire Me </a>    
        </div>
    </div>
    </>
}
const AboutMe=()=>{
    return <>
    <div id="AboutMe" style={{margin:'3cm 0cm 0cm',paddingTop:'1.6cm'}}> 
            <h1  style={{fontWeight:'700',fontSize:'35px',textAlign:'center'}} className='AboutMeh1'> About Me </h1>
    <div className='AboutMe' align="center" style={{padding:'0.5cm 1cm'}}>
        <div align="center">
            <img src={require('../PORTPOLIO ASSETS/JPG/AboutPhoto.webp')} style={{width:'9cm',height:'9cm',borderRadius:'44% 56% 51% 49% / 15% 14% 86% 85%'}}/>
        </div>
        <div align="center">
        <p style={{fontWeight:'700',fontSize:'18px'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero obcaecati tempore rerum nulla reprehenderit distinctio consectetur est delectus esse soluta rem neque, unde dolorum aspernatur facilis maxime ratione laborum ipsam!</p>
        </div>
    </div>
    </div>
    </>
}
const Services = (props) => {
    const content = props.content
    return <>
        <div id={props.class} style={{padding:'1.5cm 0cm 0cm'}}>
            <h1 style={{ fontWeight: '700', fontSize: '35px', margin: '0cm 0cm 0.5cm', textAlign: 'center' }} className='AboutMeh1'> {props.name} </h1>
            <div align="center" id="Services">
                {
                    props.Data.map((i, ind) => {
                        return (
                            <div key={ind} className="card services" align="center" style={{ display: 'inline-block',padding:'9px', borderRadius: '0', margin: '10px' }} key={ind}>
                                <img className="card-img-top" src={require(`../PORTPOLIO ASSETS/JPG/${props.photo}${ind + 1}.${props.type}`)} alt="Card image" style={{ width: '5.5cm', height: '5.5cm' }} />
                                <div className="card-body">
                                    <h6 className="card-title" style={{ fontWeight: '700', marginBottom: '15px', maxWidth: '6.5cm' ,fontSize:'18px'}}>{i}</h6>
                                    <div className="offcanvas offcanvas-start" id={`demo-${props.class}-${ind}`}> {/* Updated ID */}
                                        <div className="offcanvas-header">
                                            <h3 style={{ fontWeight: '700' }}>More Details</h3>
                                            <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <p className="offcanvas-title" style={{ fontSize: '18px', fontWeight: '700' }}>{content[ind]}</p>
                                        </div>
                                    </div>
                                    <button className='btn btn-outline-dark' type="button" data-bs-toggle="offcanvas" data-bs-target={`#demo-${props.class}-${ind}`}> More Details </button> {/* Updated target */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
}
const SkillFunction=(props)=>{
    return <>
            <tr>
                <td style={{display:'inline'}}> <img src={require('../PORTPOLIO ASSETS/PNG/checkmark.png')} style={{width:'0.8cm',height:'0.8cm',position:'relative',bottom:'2px'}}/> &nbsp; <span style={{fontWeight:'700',fontSize:'18px'}}> {props.name1} </span>
            </td>
            <td className='table2ndonerow'> 
            {
                props.name2!=null? <>           <img src={require('../PORTPOLIO ASSETS/PNG/checkmark.png')} style={{width:'0.8cm',height:'0.8cm',position:'relative',bottom:'2px'}}/> &nbsp; <span style={{fontWeight:'700',fontSize:'18px'}}> {props.name2} </span>
                </>:null
            }
             </td>
            </tr> 
    </>
}
const SkillsHeading=()=>{
    return <>
        <h1 id="Skill" style={{fontWeight:'700',fontSize:'35px',padding:'1.5cm 0cm 0cm',textAlign:'center'}} className='AboutMeh1' > Skills </h1>
    </>
}
const Skills=(props)=>{
    const {FirstData,SecondOne}=props.skills
    return <>
    <div id="skills"> 
    <div className="Skills" align="center" style={{padding:'0.5cm'}} >
        <div align="center" style={{border:'1px solid  #a6a6a6'}}>
        <h2 style={{fontWeight:'700',padding:'20px'}}> {props.name1} </h2>
        <table> 
            <tbody> 
        {
            FirstData.map((i,ind)=>{
                return   <SkillFunction name1={i.first} name2={Object.keys(i).length==2? i.second:null} key={ind}/>
            })
        }
        </tbody>
        </table>
        </div>
        <div align="center" style={{border:'1px solid  #a6a6a6'}}>
        <h2 style={{fontWeight:'700',padding:'20px'}}> {props.name2} </h2>
        <table> 
            <tbody> 
        {
            SecondOne.map((i,ind)=>{
                return   <SkillFunction name1={i.first} name2={Object.keys(i).length==2? i.second:null} key={ind} />
            })
        }
        </tbody>
        </table>
        </div>
    </div>
    </div>
    </>
}
const ContactMe=()=>{
    return  <div id="contactme"> 
    <h1 style={{fontWeight:'700',fontSize:'35px',margin:'1cm 0cm 0cm',textAlign:'center'}} className='AboutMeh1'> Contact me </h1>
<div className='AboutMe' align="center" style={{padding:'0.5cm'}}>
<div align="center">
    <img src={require('../PORTPOLIO ASSETS/PNG/JOHNDOE.png')} style={{width:'9cm',height:'9cm'}}/>
</div>
<div align="center" style={{border:'1px solid black',padding:'0.5cm'}} className='contactform'>
    <input className='form-control' placeholder='Email'/> <br />
    <textarea className='form-control' placeholder='Description'/> <br />
    <button className='btn btn-outline-dark'> Send </button>
</div>
</div>
</div>
}
const Footer=()=>{
    
    return <div style={{background:'black',color:'white',padding:'0.4cm 0.2cm 0.1cm'}}>
        <p style={{fontSize:'18px',fontWeight:'700',textAlign:'center'}}> All Rights Reserved 2024 Feb-present Mahesh Akaramsetty </p>
    </div>
}
const EducationDetails=(props)=>{
    return <div className='col' align="center" style={{border:'1px solid #a6a6a6',minWidth:'7cm',padding:'15px',margin:'5px'}}>
    <img src={require('../PORTPOLIO ASSETS/PNG/EDUCATION.png')} style={{width:'1cm',height:'1cm'}}/>   
    <h3 className='text-primary' style={{fontWeight:'700',marginTop:'10px'}}> {props.name} </h3>
    <p style={{fontWeight:'700',fontSize:'20px'}}> {props.clg} </p>
    <h4 style={{fontWeight:'700'}}> {props.percentage} </h4>
    </div>
}
const Education=()=>{
    return <>
        <h1 style={{fontWeight:'700',fontSize:'35px',margin:'1cm 0cm 0cm',textAlign:'center'}} className='AboutMeh1'> Educational Details </h1>
    <div className='row p-2' style={{margin:'10px'}}>
        <EducationDetails name="10th Grade" clg="Oxford School,Narasaraopet" percentage="98%" />
        <EducationDetails name="12th Grade" clg="Oxford College,Narasaraopet" percentage="95%"/>
        <EducationDetails name="B.Tech" clg="Giet Global University,Rajahmundry" percentage="80%" />
    </div>
    </>
}
const Home=()=>{
  return (
    <>
    <NavBar />
    <PhotoMain />
    <AboutMe />
    <Education />
    <Services  Data={ServicesData} photo="SERVICE" type="jpeg" name="Services" class="services" content={ServicesAdditionalData}/>
    <SkillsHeading  />
    <Skills name1="Frontend Development" name2="Backend Development" skills={Skils}/>
    <Skills name1="Database Management" name2="Other tools known" skills={Tools} />
    <Services Data={Courses} photo="CERTIFICATE" type="jpg" name="Courses" class="certificates" content={CoursesInformation}/>
    <Services Data={Projects} photo="PROJECT" type="webp" name="Projects" class="projects" content={ProjectsAdditionalData}/>
    <Services Data={Upcoming} photo="UPCOMING" type="jpeg" name="Ongoing Projects" class="ongoingprojects" content={UpcomingProjects}/>
    <Services Data={Achievements} photo="ACHIEVEMENT" type="jpeg" name="Acheivements" class="achievements" content={AcheivementsAdditionalData}/>
    <ContactMe />
    <Footer />
    </>
  )
}
export default Home