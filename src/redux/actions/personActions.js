export const updateName = name => {
  return { type: "UPDATE_NAME", name };
};

export const updateAge = age => {
  return { type: "UPDATE_AGE", age };
};

export const updateFavFoods = favFoods => {
  return { type: "UPDATE_FAV_FOODS", favFoods };
};
