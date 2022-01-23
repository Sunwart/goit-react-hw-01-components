export default function PokemonDataView({ pokemon: { sprites, name } }) {
  return (
    <div>
      <h2>Pokemon Info</h2>
      <div>
        <p>{name.toUpperCase()}</p>
        <img
          src={sprites.other['official-artwork'].front_default}
          width="200"
          alt={name}
          style={{ marginLeft: 500, marginTop: 32 }}
        />
      </div>
    </div>
  );
}
