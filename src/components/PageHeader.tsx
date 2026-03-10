interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-20 section-dark">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-amber tracking-[0.2em] uppercase text-sm">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
