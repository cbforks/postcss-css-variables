import AppDispatcher from '../dispatcher/AppDispatcher';
import PlaygroundConstants from '../constants/PlaygroundConstants';

var TodoActions = {
	init: function() {
		AppDispatcher.dispatch({
			actionType: PlaygroundConstants.PLAYGROUND_INIT,
		});
	},


	keyboardActionFired: function() {
		AppDispatcher.dispatch({
			actionType: PlaygroundConstants.PLAYGROUND_KEYBOARD_ACTION
		});
	},

	updateInput: function(value) {
		AppDispatcher.dispatch({
			actionType: PlaygroundConstants.PLAYGROUND_INPUT_UPDATED,
			value: value
		});
	},

	processInput: function() {
		AppDispatcher.dispatch({
			actionType: PlaygroundConstants.PLAYGROUND_START_PROCESS_INPUT
		});
	},

	setPostcssCssVariablesPreserveOption: function(value) {
		AppDispatcher.dispatch({
			actionType: PlaygroundConstants.PLAYGROUND_SET_POSTCSS_CSS_VARIABLES_PRESERVE,
			value: value
		});
	},

	setShouldLiveReloadOption: function(value) {
		AppDispatcher.dispatch({
			actionType: PlaygroundConstants.PLAYGROUND_SET_SHOULD_LIVE_RELOAD,
			value: value
		});
	},

	setTabWidthOption: function(value) {
		AppDispatcher.dispatch({
			actionType: PlaygroundConstants.PLAYGROUND_SET_TAB_WIDTH,
			value: value
		});
	}
};

export default TodoActions;