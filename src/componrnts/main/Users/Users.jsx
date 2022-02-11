import Button from "../../button/button";

import UserCard from "./userCard/UssrCard";

const Users = (props) => {

	const usersElem = props.users.map(el => <UserCard {...el} key={el.id} className='users__user-card' />);



	return (
		<div className="main__users users">

			<div className="users__container container">
				<div className="users__wrapper ">
					<h2 className="users__title ">{props.title}</h2>
					<h4 className="users__subtitle ">{props.subtitle}</h4>
					<div className="users__grid ">
						{usersElem}
					</div>
					<div className="users__btn ">
						<Button
							btnDisabled={props.disebledBtn}
							onClickBtn={props.onClickBtn}
							btnType={'button'}
							text={`Show more`}
							hiddenBtn={props.hiddenBtn}
						/>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Users;