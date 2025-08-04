import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Play, Eraser, Triangle, Rocket, Sparkles, Save } from 'lucide-react'

const Hero = () => {
  return (
    <section className='pt-24 pb-16 bg-gradient-to-r from-violet-100 to-violet-300'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight flex flex-wrap items-center gap-x-4 gap-y-0">
              <span className="block">Create, Collaborate,</span>
              <span
                className="block bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent"
                style={{ fontSize: '1.2em', fontWeight: 700 }}
              >
                Visualize
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              The ultimate digital whiteboard for teams who think visually.<br />
              Sketch ideas, create diagrams, and collaborate in real-time with hand-drawn style simplicity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="ghost"
                size="lg"
                className="text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform duration-200 hover:text-white"
                style={{ backgroundClip: 'padding-box', border: 'none' }}
              >
                Start Drawing Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-xl bg-white text-foreground shadow-lg hover:scale-105 transition-transform duration-200 border hover:text-foreground"
                style={{ backgroundClip: 'padding-box' }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground items-center">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-400" /> No signup required
              </span>
              <span className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-pink-400" /> Real-time collaboration
              </span>
              <span className="flex items-center gap-2">
                <Save className="w-4 h-4 text-violet-400" /> Auto-save everything
              </span>
            </div>
          </div>
          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            {/* Main Image */}
            <div className="relative">
              <img
                src="https://camo.githubusercontent.com/6ec32694af5608860f01a5ca63d55ea6f28eaa3caec10e0cb86d9d1936c43bf4/68747470733a2f2f657863616c69647261772e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f67697468756225324670726f647563745f73686f77636173652e706e67"
                alt="DrawSync Whiteboard"
                className="rounded-3xl shadow-2xl w-full max-w-md animate-bounce-slow"
                style={{ border: '6px solid #a78bfa' }}
              />
              {/* Floating pink circle with eraser */}
              <div className="absolute -top-6 -right-6">
                <div className="bg-pink-300 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <Eraser className="w-8 h-8 text-white" />
                </div>
              </div>
              {/* Floating orange circle with triangle */}
              <div className="absolute -bottom-6 -left-6">
                <div className="bg-orange-400 rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  <Triangle className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Animations CSS */}
      <style>{`
        .animate-bounce-slow {
          animation: bounceSlow 2.2s cubic-bezier(.23,1.01,.32,1) infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  )
}

export default Hero
