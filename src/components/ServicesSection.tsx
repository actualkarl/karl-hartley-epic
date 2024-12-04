import { Brain, Gamepad2, Users, Monitor, Trophy, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Brain,
    title: 'AI-Enhanced Learning',
    description: 'Blending human expertise with AI innovation for personalized learning experiences'
  },
  {
    icon: Gamepad2,
    title: 'Gaming-Inspired Solutions',
    description: 'Leveraging eSports principles to create engaging corporate training'
  },
  {
    icon: Users,
    title: 'Remote Team Development',
    description: 'Building effective virtual learning environments for distributed teams'
  }
];

export const ServicesSection = () => (
  <div className="py-16 bg-gray-50" id="services">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);