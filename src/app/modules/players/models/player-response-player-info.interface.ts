export interface PlayerResponsePlayerInfo {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    birth: {
        date: string;
        place: string;
        country: string;
    };
    age: number;
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
}
