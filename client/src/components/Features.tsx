import React from 'react'
import { Brush, Users, Zap, Cloud, Smartphone, Infinity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Brush,
    title: "Hand-drawn Feel",
    description: "Natural, sketchy style that makes your diagrams feel personal and engaging.",
    color: "text-purple-500"
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Work together seamlessly with live cursors and instant synchronization.",
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for smooth drawing even with complex diagrams.",
    color: "text-pink-500"
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Your work is automatically saved and accessible from anywhere.",
    color: "text-orange-500"
  },
  {
    icon: Smartphone,
    title: "Multi-Platform",
    description: "Works perfectly on desktop, tablet, and mobile devices.",
    color: "text-purple-500"
  },
  {
    icon: Infinity,
    title: "Infinite Canvas",
    description: "Never run out of space with our limitless drawing canvas.",
    color: "text-blue-500"
  }
];

const Features = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'> 
         <div className='text-center mb-16'>
           <h2 className='text-4xl font-bold text-foreground mb-4'>
            Everything you need to bring ideas to life
            </h2> 
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for creative minds and collaborative teams
          </p>
         </div>

         <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-violet-100 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
              <CardDescription className="text-muted-foreground leading-relaxed">
                {feature.description}
              </CardDescription>
              </CardContent>
            </Card>
          ) )}


         </div>
      </div>
    </section>
  )
}

export default Features
