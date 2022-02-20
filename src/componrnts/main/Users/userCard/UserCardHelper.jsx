
const UserCardHelper = (props) => {

	return (
		<div className="usercard__helper"
			style={{ ...props.style, top: `${props.y}px`, left: `${props.x}px` }}>{props.text} </div>
	)
}

export default UserCardHelper;