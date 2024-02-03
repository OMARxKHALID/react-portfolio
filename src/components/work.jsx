import React from "react";
import Container from "./Container";
import { FadeIn } from "./FadeIn";

const projectsData = [
    {
        title: "Random React Project 1",
        description: "Description of a random React project.",
        technologies: ["React", "Tailwind CSS", "Express"],
        link: "#",
    },
    {
        title: "Random React Project 2",
        description: "Description of a random React project.",
        technologies: ["Node.js", "Express", "MongoDB"],
        link: "#",
    },
    {
        title: "Random React Project 3",
        description: "Description of a random React project.",
        technologies: ["Node.js", "Express", "MongoDB"],
        link: "#",
    },
    {
        title: "Random React Project 4",
        description: "Description of a random React project.",
        technologies: ["Node.js", "Express", "MongoDB"],
        link: "#",
    },
    {
        title: "Random React Project 5",
        description: "Description of a random React project.",
        technologies: ["Node.js", "Express", "MongoDB"],
        link: "#",
    },
    {
        title: "Random React Project 5",
        description: "Description of a random React project.",
        technologies: ["Node.js", "Express", "MongoDB"],
        link: "#",
    },

];

function Work() {
    return (
        <Container id="work">
            <div className="grid gap-8 max-w-[1240px] mx-auto mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((project, index) => (
                    <FadeIn key={index}>
                        <div className="bg-[#131315] p-8 rounded-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                            <h3 className="text-2xl font-bold mb-2 text-white">
                                {project.title}
                            </h3>
                            {project.description && (
                                <p className="text-gray-500 mb-4">{project.description}</p>
                            )}
                            {project.technologies && (
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 rounded text-sm bg-[#333]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    className="text-[#ff5e1a] font-medium text-lg hover:underline mt-4 inline-block"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Container>
    );
}

export default Work;