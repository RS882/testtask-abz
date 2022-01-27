import Button from "../button/button";
import { Form, Field } from 'react-final-form'

const Login = (props) => {



	const onSubmit = (formData) => {
		console.log(formData);
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

					<Form
						onSubmit={(values, form) => {
							onSubmit(values);
						}}
						initialValues={{ ...formData, }}
						render={({ handleSubmit, form, submitting, pristine, errors }) => {

							const radiosElem = props.positions.map((el, i) => {
								return <div key={el.id}>
									<Field
										component={`input`}
										type={`radio`}
										name="position_id"
										id={`position_${el.id}`}
										value={el.id}
										checked={!i || false}
										hidden
									/>
									<label className="radio__label" htmlFor={`position_${el.id}`}>
										<div className="radio__radiobtn" ></div>
										{el.name}
									</label>
								</div>

							});

							return (
								<form onSubmit={handleSubmit} className="login__form form">
									<div>
										<Field
											component={`input`}
											className="form__input"
											type={`text`}
											name="name"
											placeholder="Your name" />
									</div>
									<div>
										<Field
											component={`input`}
											className="form__input"
											type={`email`}
											name="email"
											placeholder="Email" />
									</div>
									<div>
										<Field
											component={`input`}
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
										<Field
											component={`input`}
											className="form__input"
											type={`file`}
											name="photo"
											id="file_form_type"
											hidden
										/>
										<label className="form__input form__file" htmlFor="file_form_type">1111</label>
									</div>
									<div className="form__submit">
										<Button
											disabled={props.disebledBtn}
											onClickBtn={onSubmit}
											btnType={'submit'}
											text={'Sign up'} />
									</div>
								</form>

							)
						}
						}
					/>

				</div>

			</div>
		</div>
	)
}

export default Login;