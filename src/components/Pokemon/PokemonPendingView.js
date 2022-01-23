import { ImSpinner } from 'react-icons/im';
import pendingImage from '../../images/q.png';
import PokemonDataView from './PokemonDataView';

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: { other: { 'official-artwork': { front_default: pendingImage } } },
  };

  return (
    <div role="alert">
      <ImSpinner size="32" className="icon-spin" />
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
