import React from 'react';
import { Header } from '../components/Header';

const HeaderDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-8 p-8">
        <section>
          <h2 className="mb-4 text-xl font-semibold">Header Variant One</h2>
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <Header variant="one" />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Header Variant Two</h2>
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <Header variant="two" />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Header Variant Three</h2>
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <Header variant="three" />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Header Variant Nine</h2>
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <Header variant="nine" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeaderDemo; 