import { Badge } from "@/components/ui/badge";

const skills = [
  "Adobe Illustrator",
  "HTML & CSS",
  "Figma",
  "PHP",
  "MySQL",
  "Adobe Photoshop",
];

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6 text-gray-700">
              I'm a passionate graphic designer and web developer currently
              working as a Graphics Design Intern at Mercy Technology. I
              specialize in creating impactful visual solutions across various
              industries including education, healthcare, and product design.
            </p>
            <p className="text-lg text-gray-700">
              My unique combination of design and development skills allows me
              to bridge the gap between creative concepts and technical
              implementation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none px-4 py-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
