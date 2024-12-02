const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 1
  }
];









const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome! I&apos;m Yokeshkumar, a Smart Student willing to learn new technologies and to apply my mere knowledge in creating real world applications. To view and solve the problem through different perspective and to provide solutions for the well being of the organization. I would like to expand my knowledge in learning new skills that would lead a my career to new destination.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label,number},key)=>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-lime-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }


                    <img 
                    src="/portfolio-Yokeshkumar/images/logo.png" 
                    alt="Logo"
                    width={30}
                    height={30} 
                    className="ml-auto md:w-[40px] md:h-[40px]"
                    />
                </div>
            </div>

        </div>

    </section>
  )
}

export default About
