export const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animated-blob blob-1 h-[500px] w-[500px] bg-azul-200/40 top-0 -right-48" aria-hidden="true" />
      <div className="animated-blob blob-2 h-[400px] w-[400px] bg-turquesa-600/20 bottom-1/4 -left-32" aria-hidden="true" />
      <div className="animated-blob blob-3 h-[600px] w-[600px] bg-azul-400/15 top-1/2 right-1/4" aria-hidden="true" />
    </div>
  );
};
