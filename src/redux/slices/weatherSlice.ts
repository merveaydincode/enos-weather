import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface WeatherState {
    city: string;
    weatherData: any[];
    selectedDay: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    city: '',
    weatherData: [],
    selectedDay: null,
    loading: false,
    error: null,
};

const API_KEY = 'a0beee3f7024486695014264513aa8d0';

export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error('City not found or API error');
            }

            const data = await response.json();

            if (!data || !data.city_name || data.city_name.toLowerCase() !== city.toLowerCase()) {
                throw new Error(`No weather data found for "${city}"`);
            }

            return data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Error fetching data');
        }
    }
);



const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCity(state, action) {
            state.city = action.payload;
        },
        setSelectedDay(state, action) {
            state.selectedDay = action.payload;
        },
        clearWeatherData(state) {
            state.weatherData = [];
            state.selectedDay = null;
            state.city = '';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.loading = false;
                state.weatherData = action.payload;
                state.selectedDay = action.payload[0];
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.loading = false;
                state.weatherData = [];
                state.error = action.payload as string;
            });
    },
});

export const { setCity, setSelectedDay, clearWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
