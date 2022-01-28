import Button from "../button/button";
import { Form, Field } from 'react-final-form'
import { Input } from './../FormControl/Form.Control';
import { composeValidators, required, minLength, maxLength, emailValid, phoneValid } from './../utilits/validators';

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
						render={({ handleSubmit, form, submitting, pristine, errors, values }) => {
							// console.log(values);
							const minLengtText2 = minLength(2);
							const maxLengtText60 = maxLength(60);
							const maxLengtText100 = maxLength(100);
							const radiosElem = props.positions.map((el, i) => {
								return <div key={el.id}>
									<Field
										component={Input}
										type={`radio`}
										name="position_id"
										id={`position_${el.id}`}
										value={el.id}
										checked={!i}
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
									<div className="form__input-box">
										<Field
											component={Input}
											className="form__input"
											type={`text`}
											name="name"
											placeholder="Your name"
											validate={composeValidators(required, minLengtText2, maxLengtText60)}
											helperText="Your name should contain 2-60 characters" />
									</div>
									<div className="form__input-box">
										<Field
											component={Input}
											className="form__input"
											type={`text`}
											name="email"
											placeholder="Email"
											validate={composeValidators(required, minLengtText2, maxLengtText100, emailValid)}
											helperText="Your email, must be a valid email according to RFC2822" />
									</div>
									<div className="form__input-box">
										<Field
											component={Input}
											className="form__input"
											type={`text`}
											name="phone"
											placeholder="Phone"
											validate={composeValidators(required, phoneValid)}
											helperText="Your phone number should start with code of Ukraine +380" />
									</div>
									<div className="form__radiobtns radio">
										<h5 className="radio__title">Select your position</h5>
										<div className="radio__radios">
											{radiosElem}
										</div>
									</div>
									<div>
										<Field
											component={Input}
											type={`file`}
											name="photo"
											id="file_form_type"
											helperText="Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb"
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