import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            {/* Here is where you say there are 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                
                {/* Left column */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Developer & Artist
                    </h3>
                    
                    <p className="text-muted-foreground">
                        Coding is usually lumped with the pragmatic sciences, like math and science. 
                        Although are subjects I love (as a gamer I love solving any 
                        puzzle), many people do not realize 
                        that coding is also a form of art. <br />It is a modern form of craftmanship that 
                        takes patience, care, and even a bit of pride to hone. As a developer I strive to not 
                        just make code that works, but code that performs well and is clean and efficient!
                    </p>

                    <p className="text-muted-foreground">
                        I also do love and appreciate the traditional arts; in my free time I enjoy sketching 
                        and making comics. I also on occasion like to wood burn more realistic pieces of art.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        {/* Button 1 */}
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        {/* Button 2 */}
                        <a href="https://drive.google.com/file/d/1_YBC7dMs656zjGV3aIMuLOrOJ23ac0Da/view?usp=sharing" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 card-hover">
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Column */}
                <div className="grid grid-cols-1 gap-6">

                    {/* This emcompasses what is in the thing */}
                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg font-medium"> Software Development</h4>
                                <p className="text">
                                    My strongest languages are <span className="text-[#e6e57d]">Java, C++,</span>  and <span className="text-[#e6e57d]">Python</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                            
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg font-medium"> Agile & Scrum Experience</h4>
                                <p className="text">
                                    I have worked in an Agile environment in Scrum teams. I have been product owner, scrum master, and developer. 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg font-medium"> Work Experience</h4>
                                <p className="text">
                                    I have worked as a Learning Fellow at SNHU (similar to a TA) in which I helped advise professors on how to make the course better for the students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        
    </section>
}