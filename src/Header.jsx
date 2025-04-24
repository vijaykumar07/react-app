export function Header({ data }) {
  return (
    <header>
      <h1>React essentials</h1>
      <section className="core-concepts">
        {data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </header>
  );
}
