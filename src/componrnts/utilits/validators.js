export const required = value => (value ? undefined : `This field is required`);

export const maxLength = maxLength => value =>
	(value && value.length <= maxLength) ? undefined :
		`Max length  ${maxLength} characters`;

export const minLength = minLength => value =>
	(value && value.length >= minLength) ? undefined :
		`Min length ${minLength} characters`;

export const mustBeNumber = value => (isNaN(value) ?
	`Must be a number` : undefined);


export const minValue = min => value =>
	isNaN(value) || value >= min ? undefined :
		`Should be greater than ${min} `;

export const emailValid = value => {
	const reg = new RegExp(
		/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
	)
	return reg.test(value) ?
		undefined : `Please enter a valid e-mail`;
};

export const phoneValid = value => {
	const reg = new RegExp(/^[\+]{0,1}380([0-9]{9})$/)
	return reg.test(value) ?
		undefined : `Please enter a valid phone number`;
};

export const fileTypeValid = type => () => {
	if (type) {
		return (type.type === `image/jpeg` || type.type === `image/jpg`) ? undefined : `The photo format must be jpeg/jpg type`;
	} else {
		return undefined;
	}
};

export const fileWeightValid = type => () => {
	if (type) {
		const size = +type.size / (1024 * 1024);
		return (size <= 5) ? undefined : `Photo -${size.toFixed(2)}Mb. Must be < 5 Mb`;
	} else {
		return undefined;
	}
};

export const fileSizeValid = size => () => {

	if (Object.keys(size).length > 0) {
		return (size.width >= 70 && size.height >= 70) ? undefined :
			`Photo size-${size.width}x${size.height}px. Min size of photo must be 70x70px`;
	} else {
		return undefined;
	}
};

export const composeValidators = (...validators) => value =>
	validators.reduce((error, validator) => error || validator(value), undefined);