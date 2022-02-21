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

	const hoverIn = {
		onMouseEnter: (e) => sethelperProps({
			text: e.target.innerText,
			style: {
				opacity: `1`,
				visibility: ` visible`,
				top: `${e.clientY}px`,
				left: `${e.clientX}px`,
			},
		}),
	};
	const hoverOut = {
		onMouseLeave: () => sethelperProps(initDate),
	};

	return (
		<div className="usercard" {...hoverOut}>
			<div className="usercard__body "  >
				<div className="usercard__item item-card" >
					<div className="item-card__img">
						<img onError={onErrorImg} src={userPhoto || notPhoto} alt='user' width='70' height='70' />
					</div>
				</div>
				<div className="usercard__item item-card"  {...hoverOut} >
					<h3 className="item-card__name " > <span {...hoverIn}>{props.name} </span></h3>

				</div>
				<div className="usercard__item item-card" {...hoverOut}>
					<div className=" item-card__position " ><span {...hoverIn}>{props.position} </span></div>
				</div>
				<div className="usercard__item item-card" {...hoverOut}>
					<div className="item-card__contacts " >
						<a href={`mailto:${props.email}`}><span {...hoverIn}>{props.email} </span></a>
					</div>
				</div>
				<div className="usercard__item item-card" {...hoverOut}>
					<div className="item-card__contacts " >
						<a href={`tel:${props.phone}`}><span {...hoverIn}>{phone} </span></a>
					</div>
				</div>
			</div>
			<UserCardHelper {...helperProps} />
		</div >
	)
}

export default UserCard;