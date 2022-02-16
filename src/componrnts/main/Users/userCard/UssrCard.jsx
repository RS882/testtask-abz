import notPhoto from './../../../../assets/img/Photo-cover.svg';
import { useState } from 'react';
import { showPhoneNum } from './../../../utilits/functions';

const UserCard = (props) => {
	//карточка пользователя
	const [userPhoto, setUserPhoto] = useState(props.photo);
	// выводим телефон в нужном формате
	const phone = showPhoneNum(props.phone);
	// показываем картинку если у пользователя нет фото
	const onErrorImg = () => setUserPhoto(notPhoto);

	return (
		<div className="usercard" >
			<div className="usercard__body ">
				<div className="usercard__item item-card" >
					<div className="item-card__img">
						<img onError={onErrorImg} src={userPhoto || notPhoto} alt='user' width='70' height='70' />
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
				<div className="usercard__item item-card" data-title={phone}>
					<div className="item-card__contacts " >
						<a href={`tel:${props.phone}`}>{phone}</a>
					</div>
				</div>
			</div>
		</div >
	)
}

export default UserCard;