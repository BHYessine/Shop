import { createStore } from "@reduxjs/toolkit";

import { reducers } from "../Reducer/reducer";

const store = createStore(reducers);

export default store;
