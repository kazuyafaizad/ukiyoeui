import React, { useState } from 'react';
import { Palette, Sparkles, Heart, Menu as MenuIcon, Sun, Cloud, Layers } from 'lucide-react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import { Menu } from './components/Menu';
import { OrganicBackground } from './components/OrganicBackground';

type Theme = 'gradient' | 'organic' | 'flat';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [selectedOption, setSelectedOption] = useState('');
  const [theme, setTheme] = useState<Theme>('gradient');

  const menuOptions = [
    { label: 'Traditional Arts', value: 'traditional' },
    { label: 'Modern Design', value: 'modern' },
    { label: 'Digital Creation', value: 'digital' },
    { label: 'Minimalist Style', value: 'minimalist' }
  ];

  const getThemeStyles = () => {
    switch (theme) {
      case 'organic':
        return 'bg-gradient-to-t from-orange-300 from- via-blue-100 via- to-blue-100 to-';
      case 'flat':
        return 'bg-white';
      default:
        return 'bg-gradient-to-t from-orange-300 from- via-blue-100 via- to-blue-100 to-';
    }
  };

  const getCardStyles = () => {
    switch (theme) {
      case 'flat':
        return 'bg-white shadow-md';
      default:
        return 'bg-white/10 backdrop-blur-sm border border-white/20';
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${getThemeStyles()}`}>
      {theme === 'organic' && <OrganicBackground />}

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`p-6 ${theme === 'flat' ? 'bg-white shadow-md' : 'backdrop-blur-sm bg-white/10 border-b border-white/20'}`}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Palette className="text-stone-700" size={24} />
              <h1 className="text-xl font-medium text-stone-800 tracking-[0.02em]">
                Ukiyo-e UI
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant={theme === 'gradient' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setTheme('gradient')}
                  className="flex items-center"
                  theme={theme}
                >
                  <Sun size={16} className="mr-2" />
                  Gradient
                </Button>
                <Button
                  variant={theme === 'organic' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setTheme('organic')}
                  className="flex items-center"
                  theme={theme}
                >
                  <Cloud size={16} className="mr-2" />
                  Organic
                </Button>
                <Button
                  variant={theme === 'flat' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setTheme('flat')}
                  className="flex items-center"
                  theme={theme}
                >
                  <Layers size={16} className="mr-2" />
                  Flat
                </Button>
              </div>
              <Button variant="secondary" size="sm" theme={theme}>
                <MenuIcon size={16} className="mr-2" />
                Menu
              </Button>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto p-6 space-y-12">
          {/* Hero Section */}
          <section className="text-center py-16">
            <div className="mb-8">
              <h2 className="text-5xl font-light text-stone-800 mb-6 tracking-[0.02em]">
                Colors
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-lg text-stone-700 leading-relaxed tracking-[0.01em]">
                <p className="flex items-center justify-start">
                  <span className="w-2 h-2 bg-stone-600 rounded-full mr-4 flex-shrink-0"></span>
                  Use soft, muted color palettes
                </p>
                <p className="flex items-center justify-start">
                  <span className="w-2 h-2 bg-stone-600 rounded-full mr-4 flex-shrink-0"></span>
                  Apply gradients for depth and visual interest
                </p>
                <p className="flex items-center justify-start">
                  <span className="w-2 h-2 bg-stone-600 rounded-full mr-4 flex-shrink-0"></span>
                  Utilize opacity for layering and transparency effects
                </p>
                <p className="flex items-center justify-start">
                  <span className="w-2 h-2 bg-stone-600 rounded-full mr-4 flex-shrink-0"></span>
                  Maintain consistent color harmony across the interface
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Button variant="primary" size="lg" theme={theme}>
                BUTTON
              </Button>
              <Button
                variant="accent"
                size="lg"
                onClick={() => setIsModalOpen(true)}
                theme={theme}
              >
                <Heart size={20} className="mr-2" />
                Open Modal
              </Button>
            </div>
          </section>

          {/* Components Showcase */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Form Card */}
            <Card hover className={`col-span-full lg:col-span-2 ${getCardStyles()}`}>
              <h3 className="text-2xl font-light text-stone-800 mb-6 tracking-[0.02em]">
                Form Elements
              </h3>
              <div className="space-y-6">
                <Input
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Menu
                  options={menuOptions}
                  onSelect={setSelectedOption}
                />
                <div className="flex gap-4 pt-4">
                  <Button variant="primary" theme={theme}>Submit Form</Button>
                  <Button variant="secondary" theme={theme}>Reset</Button>
                </div>
              </div>
            </Card>

            {/* Feature Card */}
            <Card hover className={getCardStyles()}>
              <div className="text-center">
                <div className="w-16 h-16 bg-stone-200/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-stone-600" size={24} />
                </div>
                <h3 className="text-xl font-light text-stone-800 mb-2 tracking-[0.02em]">
                  Organic Flow
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed tracking-[0.01em]">
                  Inspired by natural forms and flowing landscapes of traditional Japanese art
                </p>
              </div>
            </Card>
          </section>

          {/* Button Variations */}
          <section>
            <Card className={getCardStyles()}>
              <h3 className="text-2xl font-light text-stone-800 mb-6 tracking-[0.02em]">
                Button Variations
              </h3>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <Button size="sm" theme={theme}>Small Button</Button>
                  <Button size="md" theme={theme}>Medium Button</Button>
                  <Button size="lg" theme={theme}>Large Button</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" theme={theme}>Primary</Button>
                  <Button variant="secondary" theme={theme}>Secondary</Button>
                  <Button variant="accent" theme={theme}>Accent</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button disabled theme={theme}>Disabled Button</Button>
                  <Button variant="secondary" disabled theme={theme}>Disabled Secondary</Button>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modal"
      >
        <div className="space-y-4">
          <p className="text-stone-600 leading-relaxed tracking-[0.01em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Input
            label="Modal Input"
            placeholder="Type something here..."
          />
          <div className="flex gap-4 pt-4">
            <Button variant="accent" onClick={() => setIsModalOpen(false)} theme={theme}>
              Close
            </Button>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)} theme={theme}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;