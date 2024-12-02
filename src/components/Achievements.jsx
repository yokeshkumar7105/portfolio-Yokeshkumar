
import {ReactLenis} from 'lenis/react';
//import { gsap } from "gsap-trial";
import gsap from 'gsap';
    
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { useGSAP } from '@gsap/react';


// register gsap plugins

gsap.registerPlugin(useGSAP, ScrollTrigger);







import AchievementsCard from "./AchievementsCard";


const achievements = [
  {
    content: 'Participated in college Ideathon and demonstrated our idea to deploy in real world..',
    name: 'Ideathon 2022',
    imgSrc: '/images/achievement-1.png',
    company: 'Ideathon'
  },
  {
    content: 'Participated in Smart India Hackathon and demonstrated our idea to contribute to real world government projects.',
    name: 'Smart India Hackathon',
    imgSrc: '/images/achievement-1.png',
    company: 'Hackathon'
  },
   {
    content: 'Learnt about Machine Learning through Cognizant\'s virtual Internship through Forage.',
    name: 'Cognizant',
    imgSrc: '/images/achievement-2.jpg',
    company: 'Virtual Intern'
  },
  {
    content: 'Participated in AI hackathon orgainized by SRM university and hacked the leap day of 2024.',
    name: 'Leap\'24',
    imgSrc: '/images/achievement-1.png',
    company: 'Hackathon'
  },
  {
    content: 'Designed posters for clients and Collaborated with internal teams on project briefs to ensure timely delivery of projects within budget constraints.',
    name: 'Critter Graphix',
    imgSrc: '/images/achievement-3.png',
    company: 'Design Intern'
  },
  {
    content: 'Developed webpages using different frontend technologies through this educational internship and gained practical experience.',
    name: 'CognoRise Infotech',
    imgSrc: '/images/achievement-4.png',
    company: 'Intern'
  },
];


const Achievements = () => {

  useGSAP(()=>{
    gsap.to('.scrub-slide',{
      scrollTrigger:{
        trigger:'.scrub-slide',
        start:'-200% 80%',
        end:'400% 80%',
        scrub:true
      },
      x:'-1000'
    });
  });


  return (
    <section 
    id="achievements"
    className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Achievements &amp; Certifications
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {achievements.map(({content,name,imgSrc,company},key)=>(
            <AchievementsCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievements
