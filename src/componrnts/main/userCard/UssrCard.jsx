
import notPhoto from './../../../assets/img/Photo-cover.svg';
const UserCard = (props) => {


	return (
		<div className="usercard">
			<div className="usercard__body">
				<div className="usercard__img item-card">
					<img src={notPhoto} alt='user' />
					{/* {props.photo} */}
				</div>
				<h3 className=" usercard__name item-card">{props.name}</h3>
				<div className=" usercard__position item-card">{props.position}</div>
				<div className="usercard__contacts item-card">
					<a href={`mailto:${props.email}`}>{props.email}</a>
				</div>
				<div className="usercard__contacts item-card">
					<a href={`tel:${props.phone}`}>{props.phone}</a>
				</div>
			</div>
		</div>
	)
}

export default UserCard;