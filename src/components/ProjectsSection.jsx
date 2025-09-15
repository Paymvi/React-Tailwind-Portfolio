import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  // {
  //   id: 1,
  //   title: "SaaS Landing Page",
  //   description: "A beautiful landing page app using React and Tailwind.",
  //   image: "/projects/project1.png",
  //   tags: ["React", "TailwindCSS", "Supabase"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 2,
  //   title: "Orbit Analytics Dashboard",
  //   description:
  //     "Interactive analytics dashboard with data visualization and filtering capabilities.",
  //   image: "/projects/project2.png",
  //   tags: ["TypeScript", "D3.js", "Next.js"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 3,
  //   title: "E-commerce Platform",
  //   description:
  //     "Full-featured e-commerce platform with user authentication and payment processing.",
  //   image: "/projects/project3.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
    {
    id: 1,
    title: "Mobile App: Unimatch",
    description:
      "Used Android Studio to create a mobile app that matches people on campus based on interests.",
    image: "/projects/unimatch.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://docs.google.com/presentation/d/1nWbowjqSDnWgjIc3rD9MU64hCWezrfWXVSqd0hE4Wi0/edit?usp=sharing",
    githubUrl: "https://github.com/Paymvi/UniMatch1.1",
  },
  {
    id: 2,
    title: "2D RPG Unity Game",
    description:
      "Collaborated in a 5-person team to design and develop: Crown of Exodus ",
    image: "/projects/crown_of_exodus3.png",
    tags: ["Unity", "Capcut", "Eleven Labs"],
    demoUrl: "https://www.linkedin.com/in/chelsea-alysson-ongjoco/overlay/1756915955757/single-media-viewer/?profileId=ACoAAEgR3sABr1KqpRkZ9Ojvn6LbLRdMVRxYUeE",
    githubUrl: "https://github.com/aqhoang2005/CS250SprintsProject",
  },
  {
    id: 3,
    title: "This Website",
    description:
      "This portfolio website was made using Vite, ReactJS, and TailwindCSS.",
    image: "/projects/portfolio1.png",
    tags: ["Vite", "ReactJS", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Paymvi/React-Tailwind-Portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Paymvi"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};