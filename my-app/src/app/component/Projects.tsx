import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Social Media Marketing",
    description: "All-in-One Campaign",
    image: "/1.png", // Corrected path to /s1.png in the public directory
    color: "from-blue-400 to-purple-400",
  },
  {
    id: 2,
    title: "Healthcare Design",
    description: "Nursing MMIST",
    image: "/2.png", // Corrected path to /s2.png in the public directory
    color: "from-green-400 to-teal-400",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Study in UK",
    image: "/3.png", // Corrected path to /s3.png in the public directory
    color: "from-purple-400 to-pink-400",
  },
  {
    id: 4,
    title: "Education Marketing",
    description: "Godrej",
    image: "/4.png", // Corrected path to /s4.png in the public directory
    color: "from-indigo-400 to-blue-400",
  },
  {
    id: 5,
    title: "Product Photography",
    description: "NIBC",
    image: "/5.png", // Corrected path to /s5.png in the public directory
    color: "from-pink-400 to-rose-400",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Dental Clinic Campaign",
    image: "/6.png", // Corrected path to /s6.png in the public directory
    color: "from-orange-400 to-red-400",
  },
  {
    id: 7,
    title: "Digital Marketing",
    description: "Future of Work",
    image: "/7.png", // Corrected path to /s7.png in the public directory
    color: "from-orange-400 to-red-400",
  },
  {
    id: 8,
    title: "Digital Marketing",
    description: "Bag Collection",
    image: "/8.png", // Corrected path to /s8.png in the public directory
    color: "from-orange-400 to-red-400",
  },
  {
    id: 9,
    title: "Digital Marketing",
    description: "Kobieu Bags ",
    image: "/9.png", // Corrected path to /s9.png in the public directory
    color: "from-orange-400 to-red-400",
  },
  {
    id: 10,
    title: "Digital Marketing",
    description: "Mercy Technology Campaign",
    image: "/10.png", // Corrected path to /s10.png in the public directory
    color: "from-orange-400 to-red-400",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <CardContent className="p-0">
              <div
                className={`relative h-64 bg-gradient-to-br ${project.color}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover mix-blend-overlay hover:mix-blend-normal transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
