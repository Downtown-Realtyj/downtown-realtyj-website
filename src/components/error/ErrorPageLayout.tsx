import { ErrorPageLayoutProps } from "./errorInterface";

const ErrorPageLayout = ({
  errorCode,
  heading,
  description,
  children,
  illustration,
}: ErrorPageLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 md:py-24">
      <div className="max-w-lg w-full text-center space-y-8 animate-fade-in-scale in-view">
        {/* Error Illustration */}
        <div className="flex justify-center">
          {illustration}
        </div>

        {/* Error Code */}
        <div>
          <p className="text-sm md:text-base font-semibold text-brand uppercase tracking-widest mb-4">
            Error {errorCode}
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {heading}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 space-y-3 sm:space-y-0 sm:flex sm:gap-4 sm:justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ErrorPageLayout;
