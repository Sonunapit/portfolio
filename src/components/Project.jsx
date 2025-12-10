import { ExternalLink } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "Moody player",
        description: "AI-powered music recommendation app that detects facial expressions and plays songs based on mood.",
        image: "https://media.licdn.com/dms/image/v2/D562DAQGCqduARfAkYQ/profile-treasury-image-shrink_800_800/B56ZsHm_HhJsAY-/0/1765359222331?e=1765972800&v=beta&t=Vc9i914dEvXMuW44KtyupLRwU8wHmNAV56I_faAWAAQ",
        url: "https://moody-player1-1frontend.onrender.com/",
        tags: ["React", "Css", "Express js" , "MongoDB"]
    },
    {
        id: 2,
        title: "Website  Three js",
        description: "Website Landing page 3D  html and css",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fashionsnap.com%2Farticle%2Fimages%2F2024%2F01%2FApple-Vision-Pro-availability-hero.jpg&f=1&nofb=1&ipt=cdc264bf9383bfec7b08955d2653d2426ddefd9505e2b819c58b369024d37501",
        url: "https://sonunapit.github.io/Vision-pro/",
        tags: ["Html", "Css", "Javascript"]
    },
    {
        id: 3,
        title: "Landing Intro Page",
        description: "Landing Intro Pages with html and css",
        image: "https://sonunapit.github.io/Animation/page2-right.avif",
        url: "https://sonunapit.github.io/Animation/",
        tags: ["Html", "Css", "Javascript"]
    }
]
export const Project = () => {
    return <section id="projects" className="py-24 px-2 relative" >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                There are some projects Each project was created with attention to detail and performance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div  key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-45 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-3 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1 text-secondary">{project.title}</h3>
                        <p className="text-secondary text-sm mb-4">{project.description}</p>
                        <div className="flex space-x-3">
                            <a target="_blank" href={project.url} className="text-primary px-2 py-2 transition-colors duration-300"><ExternalLink /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}