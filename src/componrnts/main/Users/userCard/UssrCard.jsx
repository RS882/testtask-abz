import notPhoto from './../../../../assets/img/Photo-cover.svg';
import { useState } from 'react';
import { showPhoneNum } from './../../../utilits/functions';
import UserCardHelper from './UserCardHelper';

const UserCard = (props) => {
	//карточка пользователя
	const [userPhoto, setUserPhoto] = useState(props.photo);
	// выводим телефон в нужном формате
	const phone = showPhoneNum(props.phone);
	// показываем картинку если у пользователя нет фото
	const onErrorImg = () => setUserPhoto(notPhoto);
	// helper при наведении на поля карточки
	const initDate = {
		text: null,
		style: {
			opacity: `0`,
			visibility: ` hidden`,
			top: null,
			left: null,
		},
	};
	const [helperProps, sethelperProps] = useState(initDate);
	const hover = {
		onMouseEnter: (e) =>
			sethelperProps({
				text: e.target.innerText,
				style: {
					opacity: `1`,
					visibility: ` visible`,
					top: `${e.clientY}px`,
					left: `${e.clientX}px`,

				},
			}),
		onMouseLeave: () => sethelperProps(initDate),
	}

	return (
		<div className="usercard" >
			<div className="usercard__body ">
				<div className="usercard__item item-card" >
					<div className="item-card__img">
						<img onError={onErrorImg} src={userPhoto || notPhoto} alt='user' width='70' height='70' />
					</div>
				</div>
				<div className="usercard__item item-card"  {...hover}>
					<h3 className="item-card__name " >{props.name} </h3>

				</div>
				<div className="usercard__item item-card" {...hover}>
					<div className=" item-card__position " >{props.position}</div>
				</div>
				<div className="usercard__item item-card" {...hover}>
					<div className="item-card__contacts " >
						<a href={`mailto:${props.email}`}>{props.email}</a>
					</div>
				</div>
				<div className="usercard__item item-card" {...hover}>
					<div className="item-card__contacts " >
						<a href={`tel:${props.phone}`}>{phone}</a>
					</div>
				</div>
			</div>
			<UserCardHelper {...helperProps} />
		</div >
	)
}

export default UserCard;