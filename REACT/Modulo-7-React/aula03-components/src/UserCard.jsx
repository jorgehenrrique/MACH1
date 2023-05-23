import './UserCard.css';

export default function UserCard(props) {
  return (
    <div className='container'>
      <ul className={props.user.isPremium ? "premium" : "no-premium"}>
        <li>Nome: {props.user.nome}</li>
        <li>Idade: {props.user.idade}</li>
        <li>Cidade: {props.user.cidade}</li>
        {props.user.isPremium ? <h4>Premium</h4> : <h4>Comum</h4>}
      </ul>

      {props.user.isPremium &&
        <section>
          <p>Usuário Premium</p>
        </section>
      }
    </div>
  )
}