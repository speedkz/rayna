import React from "react";
import RaynaButton from "../components/ui/RaynaButton";

const DesignSystem: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Rayna UI</h1>
            </div>
            <div className="flex items-center gap-4">
              <RaynaButton variant="outline" size="sm">
                Documentation
              </RaynaButton>
              <RaynaButton size="sm">Get Started</RaynaButton>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary-light-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Beautiful UI Components
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              A comprehensive design system with 550+ components built for modern web applications.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <RaynaButton size="lg">Get Started</RaynaButton>
              <RaynaButton variant="outline" size="lg">
                View Components
              </RaynaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Components</h3>
          
          {/* Buttons Section */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Buttons</h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h5 className="text-sm font-medium text-gray-700">Primary</h5>
                <div className="flex flex-wrap gap-4">
                  <RaynaButton>Primary</RaynaButton>
                  <RaynaButton disabled>Disabled</RaynaButton>
                  <RaynaButton isLoading>Loading</RaynaButton>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-sm font-medium text-gray-700">Secondary</h5>
                <div className="flex flex-wrap gap-4">
                  <RaynaButton variant="secondary">Secondary</RaynaButton>
                  <RaynaButton variant="secondary" disabled>Disabled</RaynaButton>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-sm font-medium text-gray-700">Outline</h5>
                <div className="flex flex-wrap gap-4">
                  <RaynaButton variant="outline">Outline</RaynaButton>
                  <RaynaButton variant="outline" disabled>Disabled</RaynaButton>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-sm font-medium text-gray-700">Ghost</h5>
                <div className="flex flex-wrap gap-4">
                  <RaynaButton variant="ghost">Ghost</RaynaButton>
                  <RaynaButton variant="ghost" disabled>Disabled</RaynaButton>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-sm font-medium text-gray-700">Link</h5>
                <div className="flex flex-wrap gap-4">
                  <RaynaButton variant="link">Link</RaynaButton>
                  <RaynaButton variant="link" disabled>Disabled</RaynaButton>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-sm font-medium text-gray-700">Danger</h5>
                <div className="flex flex-wrap gap-4">
                  <RaynaButton variant="danger">Danger</RaynaButton>
                  <RaynaButton variant="danger" disabled>Disabled</RaynaButton>
                </div>
              </div>
            </div>
          </div>

          {/* Button Sizes */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Button Sizes</h4>
            <div className="flex flex-wrap items-center gap-4">
              <RaynaButton size="sm">Small</RaynaButton>
              <RaynaButton size="md">Medium</RaynaButton>
              <RaynaButton size="lg">Large</RaynaButton>
            </div>
          </div>

          {/* Button with Icons */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Buttons with Icons</h4>
            <div className="flex flex-wrap gap-4">
              <RaynaButton leftIcon={<span>←</span>}>Back</RaynaButton>
              <RaynaButton rightIcon={<span>→</span>}>Next</RaynaButton>
              <RaynaButton leftIcon={<span>+</span>} rightIcon={<span>✓</span>}>
                Add Item
              </RaynaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2024 Rayna UI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignSystem; 