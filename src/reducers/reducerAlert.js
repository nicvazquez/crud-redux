import { SHOW_ALERT, HIDE_ALERT } from "../types";

const initialState = {
	alert: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
