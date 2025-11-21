export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/30 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float animation-delay-2000"></div>
      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-accent/40 rounded-full animate-float animation-delay-3000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </div>
  );
};
