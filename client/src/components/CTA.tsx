import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <section  className='py-20 bg-gradient-to-r from-purple-500 to-blue-400 relative overflow-hidden'>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className='text-center max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm mb-6'>
           <Sparkles className="w-4 h-4" />
            Join thousands of creative teams
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Ready to transform your ideas into reality?
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Start creating beautiful diagrams and collaborating with your team today. 
            No credit card required, no limits on creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white text-purple-500 hover:bg-white/90 hover:scale-110">
              Start Drawing Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <span>✓ Free forever plan</span>
            <span>✓ No installation needed</span>
            <span>✓ Works in any browser</span>
            <span>✓ Export to multiple formats</span>
          </div>
        </div>
      </div>

     <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
    </section>
  )
}

export default CTA
