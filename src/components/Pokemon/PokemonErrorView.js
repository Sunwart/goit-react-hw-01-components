import errorImg from '../../images/sad-kawaii.png';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImg} width="400" style={{ marginLeft: 380 }} alt="Pokemon not found" />
      {message}
    </div>
  );
}
