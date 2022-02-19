export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <p>{name}</p>
      <img
        src={sprites.other["official-artwork"].front_default}
        alt={name}
        width="290"
      />
      <ul>
        {stats.map((entry) => (
          <li key={entry.stat.name}>
            {entry.stat.name}:{entry.base_state}
          </li>
        ))}
      </ul>
    </div>
  );
}
