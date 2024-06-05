function CardTemplateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 6V5a2 2 0 012-2h1a1 1 0 010 2H5v1a1 1 0 01-2 0z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 8a2 2 0 012-2h11a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V8zm2 0h11v6H8V8zm10 10a1 1 0 110-2 1 1 0 010 2zM8 17a1 1 0 001 1h3a1 1 0 100-2H9a1 1 0 00-1 1z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="M4 14a1 1 0 00-1 1v1a2 2 0 002 2v-3a1 1 0 00-1-1zM3 9a1 1 0 012 0v3a1 1 0 11-2 0V9zM8 4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1zM16 3a1 1 0 100 2h3a2 2 0 00-2-2h-1z"
      ></path>
    </svg>
  );
}

export default CardTemplateIcon;
