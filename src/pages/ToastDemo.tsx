import React from 'react';
import { useToast } from '@components/ToastProvider';
import Toast from '@components/Toast';

const ToastDemo: React.FC = () => {
  const { showToast } = useToast();

  const showInformationToast = () => {
    showToast({
      type: 'information',
      title: 'Information Toast',
      message: 'This is an information message for the user.',
    });
  };

  const showSuccessToast = () => {
    showToast({
      type: 'success',
      title: 'Success Toast',
      message: 'Your action was completed successfully!',
    });
  };

  const showWarningToast = () => {
    showToast({
      type: 'warning',
      title: 'Warning Toast',
      message: 'Please review your input before proceeding.',
    });
  };

  const showErrorToast = () => {
    showToast({
      type: 'error',
      title: 'Error Toast',
      message: 'An error occurred while processing your request.',
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Toast Component</h1>

      <div className="space-y-12">
        {/* Interactive Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Example</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Click the buttons below to see different types of toasts in action.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={showInformationToast}
                className="px-4 py-2 bg-[#0D5EBA] text-white rounded-lg hover:bg-[#0A4A94] transition-colors"
              >
                Show Information Toast
              </button>
              <button
                onClick={showSuccessToast}
                className="px-4 py-2 bg-[#04802E] text-white rounded-lg hover:bg-[#036D27] transition-colors"
              >
                Show Success Toast
              </button>
              <button
                onClick={showWarningToast}
                className="px-4 py-2 bg-[#DD900D] text-white rounded-lg hover:bg-[#C27B0B] transition-colors"
              >
                Show Warning Toast
              </button>
              <button
                onClick={showErrorToast}
                className="px-4 py-2 bg-[#CB1A14] text-white rounded-lg hover:bg-[#B01510] transition-colors"
              >
                Show Error Toast
              </button>
            </div>
          </div>
        </section>

        {/* Static Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Static Examples</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Information Toast</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-fit">
                  <Toast
                    type="information"
                    title="Information Toast"
                    message="This is an information message for the user."
                    onClose={() => {}}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Success Toast</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-fit">
                  <Toast
                    type="success"
                    title="Success Toast"
                    message="Your action was completed successfully!"
                    onClose={() => {}}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Warning Toast</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-fit">
                  <Toast
                    type="warning"
                    title="Warning Toast"
                    message="Please review your input before proceeding."
                    onClose={() => {}}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Error Toast</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-fit">
                  <Toast
                    type="error"
                    title="Error Toast"
                    message="An error occurred while processing your request."
                    onClose={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToastDemo; 