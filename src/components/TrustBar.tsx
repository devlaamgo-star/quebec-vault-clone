const TrustBar = () => {
  const logos = [
    { name: 'Desjardins', text: 'DESJARDINS' },
    { name: 'Hydro-Québec', text: 'HYDRO-QUÉBEC' },
    { name: 'Bell', text: 'BELL' },
    { name: 'Bombardier', text: 'BOMBARDIER' },
    { name: 'CGI', text: 'CGI' },
  ];

  return (
    <section className="trust-bar py-8 md:py-12 border-y border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">
          Fait confiance par plus de 400 000+ sites web dans 120 pays
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 text-lg md:text-xl font-bold tracking-wider"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
