export interface WeatherData {
    datetime: string;
    temp: number;
    max_temp: number;
    min_temp: number;
    wind_spd: number;
    precip: number;
    clouds: number;
    weather: {
        description: string;
        icon: string;
    };
}
