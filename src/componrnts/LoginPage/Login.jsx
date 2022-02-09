import Button from "../button/button";
import { Form, Field } from 'react-final-form'
import InputText from '../FormControl/InputText';
import { composeValidators, required, minLength, maxLength, emailValid, phoneValid, fileTypeValid, fileSizeValid } from '../utilits/validators';
import InputRadio from "../FormControl/InputRadio";
import InputFile from '../FormControl/InputFile';
import { useState, useEffect } from 'react';

import { fileWeightValid } from './../utilits/validators';
import { readImageSize } from "../utilits/functions";
import { useDispatch, useSelector } from "react-redux";
import { changeIsModal } from "../redux/modalReducer";
import { regUser } from "../redux/thunkCreation";




const Login = (props) => {

	const dispatch = useDispatch();
	const setIsModal = (is) => dispatch(changeIsModal(is));

	const isReg = useSelector(state => state.users.isReg);

	const [restartFile, setRestartFile] = useState(false);

	const [loadFile, setLoadFile] = useState(null);

	const [imgSize, setImgSize] = useState({});

	useEffect(() => {
		loadFile && readImageSize(loadFile, setImgSize)
	}, [loadFile])

	//------------------

	const onSubmit = async values => {
		console.log(values);
		const formData = new FormData();
		formData.append('name', values.name);
		formData.append('email', values.email);
		formData.append('phone', values.phone);
		formData.append('position_id', values.position_id);
		formData.append('photo', loadFile);
		console.log(formData);

		dispatch(regUser(formData))
		setIsModal(true);

	};
	const formData = {
		name: ``,
		email: ``,
		phone: ``,
		position_id: props.positions.length > 0 && props.positions[0].id + ``,
		photo: null,
	};

	const textFields = [
		{
			name: "name",
			placeholder: "Your name",
			validate: composeValidators(required, minLength(2), maxLength(60)),
			helperText: "Your name should contain 2-60 characters",
		},
		{
			name: "email",
			placeholder: "Email",
			validate: composeValidators(required, minLength(2), maxLength(100), emailValid),
			helperText: "Your email, must be a valid email according to RFC282",
		},
		{
			name: "phone",
			placeholder: "Phone",
			validate: composeValidators(required, phoneValid),
			helperText: "Your phone number should start with code of Ukraine +380",

		},

	]


	return (
		<div className="login">

			<div className="login__container container">
				<div className="login__wrapper">
					<h2 className="login__title" style={props.titleStyle}>{props.title}</h2>
					<h4 className="login__subtitle">{props.subtitle}</h4>
					<Form
						onSubmit={(values, form) => {
							onSubmit(values)
								.then(() => {
									debugger
									console.log(i)
									isReg && form.restart();
									isReg && setRestartFile(true)
								});

						}}
						initialValues={{ ...formData, }}
						render={({ handleSubmit, submitting, pristine, errors, values }) => {

							return (
								<form onSubmit={handleSubmit} className="login__form form">
									{textFields.map((el, i, arr) => {
										const addClass = (i === arr.length - 1) ? 'form__input-box-last' : ''
										return <div className={`form__input-box ${addClass}`} key={i}>
											<Field
												component={InputText}
												className="form__input"
												type={`text`}
												{...el} />
										</div>
									})
									}

									<div className="form__radiobtns radio">
										<h5 className="radio__title">Select your position</h5>
										<div className="radio__radios">
											{props.positions.map(el =>
												<label key={el.id}>
													<Field
														component={InputRadio}
														type={`radio`}
														name="position_id"
														value={el.id + ''}
														positionName={el.name}
														hidden />
												</label>
											)}
										</div>
									</div>

									<div>
										<Field
											component={InputFile}
											validate={composeValidators(required, fileTypeValid(loadFile),
												fileWeightValid(loadFile), fileSizeValid(imgSize))}
											type={`file`}
											name="photo"
											helperText="Your photo. Min size -70x70px. Format - jpeg/jpg. Not be greater - 5 Mb"
											restartFile={restartFile}
											setLoadFile={setLoadFile}
											data={loadFile, imgSize}
											hidden />
									</div>
									<div className="form__submit">
										<Button
											btnType={'submit'}
											btnDisabled={submitting || pristine || Object.keys(errors).length > 0}
											text={'Sign up'} />
									</div>
								</form>

							)
						}
						}
					/>

				</div>

			</div>
		</div >
	)
}

export default Login;