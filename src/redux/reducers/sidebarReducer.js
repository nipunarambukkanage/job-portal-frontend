// sidebarReducer.js
const initialState = {
    isOpen: false,
  };
  
  const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        return {
          ...state,
          isOpen: !state.isOpen,
        };
      default:
        return state;
    }
  };
  
  export default sidebarReducer;
  