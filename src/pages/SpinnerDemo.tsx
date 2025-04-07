import React, { useState, useEffect } from 'react';
import Spinner, { SpinnerSize, SpinnerVariant } from '@components/Spinner';

const SpinnerDemo: React.FC = () => {
  const [progress, setProgress] = useState(0);
  
  // Auto-increment progress every second for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 5;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const sizes: SpinnerSize[] = ['sm', 'md', 'lg'];
  const variants: SpinnerVariant[] = ['primary', 'secondary', 'grey', 'destructive'];
  const progressValues = [25, 50, 75, 100];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Spinner Component Demo</h1>

      {/* Indeterminate Spinners */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Indeterminate Spinners (Loading)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Size Variants</h3>
            <div className="flex flex-wrap gap-8 items-center">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center justify-center">
                  <Spinner progress={-1} size={size} />
                  <span className="mt-2 text-sm text-gray-600">{size}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Color Variants</h3>
            <div className="flex flex-wrap gap-8 items-center">
              {variants.map((variant) => (
                <div key={variant} className="flex flex-col items-center justify-center">
                  <Spinner progress={-1} variant={variant} />
                  <span className="mt-2 text-sm text-gray-600">{variant}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Determinate Spinners */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Determinate Spinners (Progress)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Progress Variants</h3>
            <div className="flex flex-wrap gap-8 items-center">
              {progressValues.map((value) => (
                <div key={value} className="flex flex-col items-center justify-center">
                  <Spinner progress={value} size='lg'/>
                  <span className="mt-2 text-sm text-gray-600">{value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Live Progress Demo</h3>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-8 items-center">
                <Spinner progress={progress} size="lg" />
                <div className="text-xl font-semibold text-gray-700">{progress}%</div>
              </div>
              <div className="w-full max-w-xs">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Thickness */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Custom Thickness</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-4 border border-gray-200 rounded-md">
            <div className="flex flex-wrap gap-8 items-center justify-center">
              {[1, 2, 3, 4].map((thickness) => (
                <div key={thickness} className="flex flex-col items-center justify-center">
                  <Spinner progress={75} thickness={thickness} size="lg" />
                  <span className="mt-2 text-sm text-gray-600">Thickness: {thickness}px</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Context Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Spinner in Context</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Button Loading</h3>
            <div className="flex gap-4">
              <button className="py-2 px-4 bg-[#F56630] text-white rounded-md inline-flex items-center gap-2">
                <Spinner size="sm" progress={-1} className="text-white" />
                <span>Loading...</span>
              </button>
              
              <button className="py-2 px-4 bg-gray-700 text-white rounded-md inline-flex items-center gap-2">
                <span>Submit</span>
                <Spinner size="sm" progress={-1} className="text-white" />
              </button>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Card Loading</h3>
            <div className="relative p-6 border border-gray-200 rounded-md h-40 flex justify-center items-center">
              <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
                <Spinner size="lg" progress={-1} />
              </div>
              <p className="text-gray-400">Content loading...</p>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Upload Progress</h3>
            <div className="border border-gray-200 rounded-md p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700">document.pdf</span>
                <span className="text-sm text-gray-500">{progress}%</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#F56630] h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <Spinner size="sm" progress={progress} />
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Form Submission</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="button"
                className="w-full bg-[#F56630] text-white py-2 px-4 rounded-md inline-flex items-center justify-center gap-2"
              >
                <Spinner size="sm" progress={-1} className="text-white" />
                <span>Signing in...</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpinnerDemo; 