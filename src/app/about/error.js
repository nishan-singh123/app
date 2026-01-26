"use client";

const ErrorComponent = ({ error }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center flex-col text-red-600">
          <h2 className="text-4xl font-semibold mb-5">Oops! Something went wrong.</h2>
          <p className="text-lg">{error.message}</p>
        </div>
      </div>
    </section>
  );
};

export default ErrorComponent;
