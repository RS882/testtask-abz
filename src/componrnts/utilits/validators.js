export const required = (value) => (value ? undefined : `This field is required`)

export const maxLength = (maxLength) => (value) =>
	(value && value.length <= maxLength) ? undefined :
		`Max length  ${maxLength} characters`;

export const minLength = (minLength) => (value) =>
	(value && value.length >= minLength) ? undefined :
		`Min length ${minLength} characters`;

export const mustBeNumber = (value) => (isNaN(value) ?
	`Must be a number` : undefined);


export const minValue = (min) => (value) =>
	isNaN(value) || value >= min ? undefined :
		`Should be greater than ${min} `;

export const emailValid = (value) => {
	const reg = new RegExp(
		/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
	)
	return reg.test(value) ?
		undefined : `Please enter a valid e-mail`;
}

export const phoneValid = (value) => {
	const reg = new RegExp(/^[\+]{0,1}380([0-9]{9})$/)
	return reg.test(value) ?
		undefined : `Please enter a valid phone number`;
}




export const composeValidators = (...validators) => (value) =>
	validators.reduce((error, validator) => error || validator(value), undefined);