import './UserCard.css';

export default function UserCard(props) {
  return (
    <div className='container'>
      <ul className={props.user.isPremium ? "premium" : "no-premium"}>
        <li>{props.user.nome}</li>
        <li>{props.user.idade}</li>
        <li>{props.user.cidade}</li>
      </ul>
    </div>
  )
}