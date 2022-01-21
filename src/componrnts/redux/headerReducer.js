const ADD_VISITED_LINK = `ADD_VISITED_LINK`;

const initialState = {
	visitedLinkId: [],
}


const headerReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_VISITED_LINK:

			// state.visitedLinkId.add(action.id)
			// console.log(new Set(state.visitedLinkId, action.id));
			// // debugger
			state.visitedLinkId.includes(action.id);
			return {
				...state,
				visitedLinkId: state.visitedLinkId.includes(action.id) ? state.visitedLinkId :
					[...state.visitedLinkId, action.id],
			};

		default:
			return state;
	}

}

export const addVisitedLink = (id) => ({ type: ADD_VISITED_LINK, id, });

export default headerReducer;