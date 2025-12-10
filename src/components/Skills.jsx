import { motion } from "framer-motion";
export const Skills = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",

        "Node.js",
        "Express.js",
        "MongoDB",



        "Git / GitHub",
        "VS Code",
        "Docker",
        "Kubernetes",
        "Generative AI",
        "CI/CD",
        "DevOps Tools",
        "Data Structures & Algorithms",
    ];
    return (
        <section
            id="skills"
            className="py-16 container"
        >
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <p className="text-primary text-sm uppercase tracking-[0.3em] animate-fade-in">
                    Skills
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in-delay-1">
                    Technologies I Use
                </h2>

                <p className="text-foreground/70 mt-3 max-w-xl mx-auto animate-fade-in-delay-2">
                    These are the tools, frameworks, and technologies I work with to build
                    modern, scalable and visually stunning applications.
                </p>
            </motion.div>

            {/* Skill Tags */}
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, type: "spring" }}
                        className="
              px-5 py-2 rounded-xl 
              bg-card 
              text-foreground 
              border border-border 
              shadow-lg 
              hover:bg-primary/10 
              transition-colors 
              cursor-default
              animate-float
            "
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}