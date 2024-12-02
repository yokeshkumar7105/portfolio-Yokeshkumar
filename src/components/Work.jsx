

import ProjectCard from "./ProjectCard";



const works = [
  {
    imgSrc: '/portfolio-Yokeshkumar/images/project-1.png',
    title: 'Chennai Metro Path Finder',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://github.com/yokeshkumar7105/Projects/tree/main/metroTrackingSystem'
  },
  {
    imgSrc: '/portfolio-Yokeshkumar/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/portfolio-Yokeshkumar/images/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: ''
  },
  {
    imgSrc: '/portfolio-Yokeshkumar/images/project-4.png',
    title: 'Streamverse: An OTT Application',
    tags: ['HTML','CSS', 'Frontend'],
    projectLink: 'https://github.com/yokeshkumar7105/Projects/tree/main/streamverse'
  },
  {
    imgSrc: '/portfolio-Yokeshkumar/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '/portfolio-Yokeshkumar/images/project-6.png',
    title: 'Personal portfolio',
    tags: ['REACT', 'TAILWIND'],
    projectLink: '/'
  },
];


const Work = () => {
  return (
    <section 
    id="work"
    className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                My Projects
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags, projectLink},key)=>(
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Work
