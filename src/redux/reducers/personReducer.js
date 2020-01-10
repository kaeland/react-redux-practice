const INITIAL_STATE = {
  name: "",
  age: 0,
  favFoods: []
};

export default function personReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return Object.assign({}, state, { name: action.name });
    case "UPDATE_AGE":
      return { ...state, age: action.age };
    case "UPDATE_FAV_FOODS":
      return { ...state, favFoods: [...action.favFoods] };
    default:
      return state;
  }
}
