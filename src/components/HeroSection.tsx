import { Mail, MapPin } from 'lucide-react';

export const HeroSection = () => (
  <div className="relative bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-20 pt-32">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Karl Hartley</h1>
          <p className="text-xl mb-6">Creative Director at Epic Learning</p>
          <div className="flex flex-col gap-2 text-white/90">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@epiclearning.co.nz</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Hamilton, New Zealand</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="/api/placeholder/500/400" alt="Karl Hartley" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </div>
  </div>
);