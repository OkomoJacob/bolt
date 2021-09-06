// Responsible for Navigation slices
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) =>
        {
            state.origin = action.payload;
        },
        setDestination: (state, action) =>
        {
            state.destination = action.payload;
        },
        setTravelTimeInformaation: (state, action) =>
        {
            state.TravelTimeInformaation = action.payload;
        },
    },
});
// Export our data whenever we need it
export const { setOrigin, setDestination, setTravelTimeInformaation } = navSlice.actions;

//selectors to grab the info to and fro from the Datalayers.
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

//Export reducers to stores
export default navSlice.reducer;