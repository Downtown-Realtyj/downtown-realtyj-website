import { ErrorIllustrationProps } from "./errorInterface";

const ErrorIllustration = ({ 
  type,
  className = "w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64" 
}: ErrorIllustrationProps) => {
  if (type === '404') {
    return (
      <svg
        viewBox="0 0 200 200"
        className={`${className} animate-bounce-y`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand opacity-30"
        />

        {/* Number 4 */}
        <text
          x="50"
          y="130"
          fontSize="80"
          fontWeight="bold"
          fill="currentColor"
          className="text-brand"
          textAnchor="middle"
        >
          4
        </text>

        {/* Question mark circle for middle */}
        <circle
          cx="100"
          cy="85"
          r="25"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-brand"
        />
        <text
          x="100"
          y="100"
          fontSize="40"
          fontWeight="bold"
          fill="currentColor"
          className="text-brand"
          textAnchor="middle"
        >
          ?
        </text>

        {/* Number 4 */}
        <text
          x="150"
          y="130"
          fontSize="80"
          fontWeight="bold"
          fill="currentColor"
          className="text-brand"
          textAnchor="middle"
        >
          4
        </text>

        {/* Decorative dots */}
        <circle cx="40" cy="50" r="4" fill="currentColor" className="text-brand" />
        <circle cx="160" cy="50" r="4" fill="currentColor" className="text-brand" />
        <circle cx="30" cy="160" r="3" fill="currentColor" className="text-brand opacity-50" />
        <circle cx="170" cy="160" r="3" fill="currentColor" className="text-brand opacity-50" />
      </svg>
    );
  }

  // 500 Error illustration
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} animate-bounce-y`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle
        cx="100"
        cy="100"
        r="95"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand opacity-30"
      />

      {/* Number 5 */}
      <text
        x="50"
        y="130"
        fontSize="80"
        fontWeight="bold"
        fill="currentColor"
        className="text-brand"
        textAnchor="middle"
      >
        5
      </text>

      {/* Warning symbol - exclamation mark circle */}
      <circle
        cx="100"
        cy="85"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-brand"
      />
      <text
        x="100"
        y="105"
        fontSize="40"
        fontWeight="bold"
        fill="currentColor"
        className="text-brand"
        textAnchor="middle"
      >
        !
      </text>

      {/* Number 0 */}
      <text
        x="130"
        y="130"
        fontSize="80"
        fontWeight="bold"
        fill="currentColor"
        className="text-brand"
        textAnchor="middle"
      >
        0
      </text>

      {/* Decorative warning lines */}
      <line x1="60" y1="30" x2="70" y2="20" stroke="currentColor" strokeWidth="3" className="text-brand" />
      <line x1="130" y1="30" x2="140" y2="20" stroke="currentColor" strokeWidth="3" className="text-brand" />
      <line x1="100" y1="35" x2="100" y2="22" stroke="currentColor" strokeWidth="3" className="text-brand" />

      {/* Decorative dots */}
      <circle cx="30" cy="160" r="3" fill="currentColor" className="text-brand opacity-50" />
      <circle cx="170" cy="160" r="3" fill="currentColor" className="text-brand opacity-50" />
    </svg>
  );
};

export default ErrorIllustration;
