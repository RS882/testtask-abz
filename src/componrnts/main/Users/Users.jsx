import Button from "../../button/button";
import UserCard from "../userCard/UssrCard";

const Users = (props) => {

	const usersElem = props.users.map(el => <UserCard {...el} key={el.id} />);

	return (
		<div className="main__users users">
			<div className="users__container container">
				<div className="users__wrapper ">
					<div className="users__title ">{props.title}</div>
					<div className="users__subtitle ">{props.subtitle}</div>
					<div className="users__grid ">
						{usersElem}
					</div>
					<div className="users__btn ">
						<Button
							disabled={props.disebledBtn}
							onClickBtn={props.onClickBtn}
							btnType={'button'}
							text={`Show more`}
						/>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Users;