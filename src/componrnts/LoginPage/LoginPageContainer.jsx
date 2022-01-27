import Login from "./LoginPage"


const LoginPageContainer = (props) => {

	const title = `Register to get a work`;
	const subtitle = `Your personal data is stored according to the Privacy Policy`;
	const positions = [
		{
			"id": 1,
			"name": "Security"
		},
		{
			"id": 2,
			"name": "Designer"
		},
		{
			"id": 3,
			"name": "Content manager"
		},
		{
			"id": 4,
			"name": "Lawyer"
		}
	]


	return (
		<Login
			positions={JSON.parse(JSON.stringify(positions))}
			title={title}
			subtitle={subtitle}
		/>
	)
}

export default LoginPageContainer;