import Button from "../button/button";


const Login = (props) => {

	const radiosElem = props.positions.map((el, i) => {
		return <div key={el.id}>
			<input
				className="radio__radiobtn"
				type={`radio`}
				name="position_id"
				id={`position_${el.id}`}
				value={el.id}
				defaultChecked={!i || false}
			/>
			<label
				className="radio__label"
				htmlFor={`position_${el.id}`}>{el.name}</label>
		</div>

	})

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(`submit`);
	}

	const formData = {
		name: ``,
		email: ``,
		phone: ``,
		position_id: null,
		photo: null,
	}

	return (
		<div className="login">
			<div className="login__container container">
				<div className="login__wrapper">
					<h2 className="login__title">{props.title}</h2>
					<h4 className="login__subtitle">{props.subtitle}</h4>
					<form className="login__form form">
						<div>
							<input
								className="form__input"
								type={`text`}
								name="name"
								placeholder="Your name" />
						</div>
						<div>
							<input
								className="form__input"
								type={`email`}
								name="email"
								placeholder="Email" />
						</div>
						<div>
							<input
								className="form__input"
								type={`tel`}
								name="phone"
								placeholder="Phone" />
						</div>
						<div className="form__radiobtns radio">
							<h5 className="radio__title">Select your position</h5>
							<div className="radio__radios">
								{radiosElem}
							</div>
						</div>
						<div>
							<input
								className="form__input"
								type={`file`}
								name="photo"
							/>
						</div>
						<div className="form__submit">
							<Button
								disabled={props.disebledBtn}
								onClickBtn={onSubmit}
								btnType={'submit'}
								text={'Sign up'} />
						</div>
					</form>
				</div>

			</div>
		</div>
	)
}

export default Login;