
import notPhoto from './../../../assets/img/Photo-cover.svg';
const UserCard = (props) => {


	return (
		<div className="usercard">
			<div className="usercard__body ">
				<div className="usercard__item item-card" >
					<div className="item-card__img">
						<img onError={console.log('error')} src={props.photo || notPhoto} alt='user' />

					</div>
				</div>
				<div className="usercard__item item-card" data-title={props.name}>
					<h3 className="item-card__name " >{props.name} </h3>
				</div>
				<div className="usercard__item item-card" data-title={props.position}>
					<div className=" item-card__position " >{props.position}</div>
				</div>
				<div className="usercard__item item-card" data-title={props.email}>
					<div className="item-card__contacts " >
						<a href={`mailto:${props.email}`}>{props.email}</a>
					</div>
				</div>
				<div className="usercard__item item-card" data-title={props.phone}>
					<div className="item-card__contacts " >
						<a href={`tel:${props.phone}`}>{props.phone}</a>
					</div>
				</div>
			</div>
		</div >
	)
}

export default UserCard;