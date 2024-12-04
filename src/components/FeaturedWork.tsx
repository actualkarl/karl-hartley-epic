import { Card, CardContent } from '@/components/ui/card';

const featuredProjects = [
  {
    title: 'Corporate Training Platform',
    description: 'Developed an innovative learning platform integrating gaming elements for enhanced engagement',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Remote Team Onboarding',
    description: 'Created a comprehensive virtual onboarding program for distributed teams',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'AI Learning Assistant',
    description: 'Implemented AI-powered learning tools to provide personalized training experiences',
    image: '/api/placeholder/400/300'
  }
];

export const FeaturedWork = () => (
  <div className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);