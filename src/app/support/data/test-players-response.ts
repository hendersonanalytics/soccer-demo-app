/* eslint-disable id-blacklist */
export const TEST_PLAYERS_RESPONSE = {
    get: 'players',
    parameters: {
        season: '2021',
        team: '42',
        league: '39'
    },
    errors: [],
    results: 20,
    paging: {
        current: 1,
        total: 3
    },
    response: [
        {
            player: {
                id: 1438,
                name: 'B. Leno',
                firstname: 'Bernd',
                lastname: 'Leno',
                age: 30,
                birth: {
                    date: '1992-03-04',
                    place: 'Bietigheim-Bissingen',
                    country: 'Germany'
                },
                nationality: 'Germany',
                height: '190 cm',
                weight: '83 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/1438.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 4,
                        lineups: 4,
                        minutes: 360,
                        number: null,
                        position: 'Goalkeeper',
                        rating: '6.650000',
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 21
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 9,
                        assists: null,
                        saves: 10
                    },
                    passes: {
                        total: 101,
                        key: null,
                        accuracy: 15
                    },
                    tackles: {
                        total: 1,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: 5,
                        won: 4
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: 0
                    }
                }
            ]
        },
        {
            player: {
                id: 20355,
                name: 'A. Ramsdale',
                firstname: 'Aaron',
                lastname: 'Ramsdale',
                age: 24,
                birth: {
                    date: '1998-05-14',
                    place: 'Stoke-on-Trent',
                    country: 'England'
                },
                nationality: 'England',
                height: '188 cm',
                weight: '77 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/20355.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 26,
                        lineups: 26,
                        minutes: 2340,
                        number: null,
                        position: 'Goalkeeper',
                        rating: '7.011538',
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 2
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 27,
                        assists: null,
                        saves: 74
                    },
                    passes: {
                        total: 779,
                        key: null,
                        accuracy: 19
                    },
                    tackles: {
                        total: 1,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: 16,
                        won: 13
                    },
                    dribbles: {
                        attempts: 1,
                        success: 1,
                        past: null
                    },
                    fouls: {
                        drawn: 5,
                        committed: null
                    },
                    cards: {
                        yellow: 1,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: 0
                    }
                }
            ]
        },
        {
            player: {
                id: 231062,
                name: 'A. Okonkwo',
                firstname: 'Arthur',
                lastname: 'Okonkwo',
                age: 21,
                birth: {
                    date: '2001-09-09',
                    place: null,
                    country: 'England'
                },
                nationality: 'England',
                height: null,
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/231062.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Goalkeeper',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 7
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: 0
                    }
                }
            ]
        },
        {
            player: {
                id: 22224,
                name: 'Gabriel dos Santos Magalhães',
                firstname: 'Gabriel',
                lastname: 'dos Santos Magalhães',
                age: 25,
                birth: {
                    date: '1997-12-19',
                    place: 'São Paulo',
                    country: 'Brazil'
                },
                nationality: 'Brazil',
                height: '190 cm',
                weight: '78 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/22224.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 27,
                        lineups: 27,
                        minutes: 2379,
                        number: null,
                        position: 'Defender',
                        rating: '6.981481',
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 1,
                        bench: 0
                    },
                    shots: {
                        total: 19,
                        on: 8
                    },
                    goals: {
                        total: 3,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: 1614,
                        key: 8,
                        accuracy: 53
                    },
                    tackles: {
                        total: 34,
                        blocks: 20,
                        interceptions: 11
                    },
                    duels: {
                        total: 179,
                        won: 114
                    },
                    dribbles: {
                        attempts: 4,
                        success: 4,
                        past: null
                    },
                    fouls: {
                        drawn: 30,
                        committed: 19
                    },
                    cards: {
                        yellow: 5,
                        yellowred: 1,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 1440,
                name: 'R. Holding',
                firstname: 'Rob',
                lastname: 'Holding',
                age: 27,
                birth: {
                    date: '1995-09-20',
                    place: 'Stalybridge',
                    country: 'England'
                },
                nationality: 'England',
                height: '189 cm',
                weight: '75 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/1440.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 9,
                        lineups: 4,
                        minutes: 430,
                        number: null,
                        position: 'Defender',
                        rating: '6.762500',
                        captain: false
                    },
                    substitutes: {
                        in: 5,
                        out: 0,
                        bench: 25
                    },
                    shots: {
                        total: 2,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: 237,
                        key: null,
                        accuracy: 33
                    },
                    tackles: {
                        total: 8,
                        blocks: 13,
                        interceptions: 6
                    },
                    duels: {
                        total: 51,
                        won: 24
                    },
                    dribbles: {
                        attempts: 1,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: 1,
                        committed: 4
                    },
                    cards: {
                        yellow: 2,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 190,
                name: 'Cédric Soares',
                firstname: 'Cédric Ricardo',
                lastname: 'Alves Soares',
                age: 31,
                birth: {
                    date: '1991-08-31',
                    place: 'Singen',
                    country: 'Germany'
                },
                nationality: 'Portugal',
                height: '172 cm',
                weight: '67 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/190.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 13,
                        lineups: 11,
                        minutes: 987,
                        number: null,
                        position: 'Defender',
                        rating: '6.730769',
                        captain: false
                    },
                    substitutes: {
                        in: 2,
                        out: 2,
                        bench: 14
                    },
                    shots: {
                        total: 2,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: 545,
                        key: 11,
                        accuracy: 34
                    },
                    tackles: {
                        total: 26,
                        blocks: 5,
                        interceptions: 12
                    },
                    duels: {
                        total: 84,
                        won: 40
                    },
                    dribbles: {
                        attempts: 5,
                        success: 3,
                        past: null
                    },
                    fouls: {
                        drawn: 4,
                        committed: 10
                    },
                    cards: {
                        yellow: 3,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 2597,
                name: 'T. Tomiyasu',
                firstname: 'Takehiro',
                lastname: 'Tomiyasu',
                age: 24,
                birth: {
                    date: '1998-11-05',
                    place: 'Fukuoka',
                    country: 'Japan'
                },
                nationality: 'Japan',
                height: '188 cm',
                weight: '70 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/2597.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 16,
                        lineups: 16,
                        minutes: 1385,
                        number: null,
                        position: 'Defender',
                        rating: '6.975000',
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 2,
                        bench: 1
                    },
                    shots: {
                        total: 7,
                        on: 2
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: 1,
                        saves: null
                    },
                    passes: {
                        total: 753,
                        key: 11,
                        accuracy: 37
                    },
                    tackles: {
                        total: 30,
                        blocks: 2,
                        interceptions: 19
                    },
                    duels: {
                        total: 158,
                        won: 90
                    },
                    dribbles: {
                        attempts: 13,
                        success: 8,
                        past: null
                    },
                    fouls: {
                        drawn: 9,
                        committed: 10
                    },
                    cards: {
                        yellow: 1,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 41577,
                name: 'Nuno Tavares',
                firstname: 'Nuno Albertino',
                lastname: 'Varela Tavares',
                age: 22,
                birth: {
                    date: '2000-01-26',
                    place: 'Lisboa',
                    country: 'Portugal'
                },
                nationality: 'Portugal',
                height: '183 cm',
                weight: '75 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/41577.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 15,
                        lineups: 7,
                        minutes: 664,
                        number: null,
                        position: 'Defender',
                        rating: '6.650000',
                        captain: false
                    },
                    substitutes: {
                        in: 8,
                        out: 1,
                        bench: 23
                    },
                    shots: {
                        total: 11,
                        on: 1
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: 1,
                        saves: null
                    },
                    passes: {
                        total: 370,
                        key: 5,
                        accuracy: 20
                    },
                    tackles: {
                        total: 11,
                        blocks: 3,
                        interceptions: 6
                    },
                    duels: {
                        total: 94,
                        won: 50
                    },
                    dribbles: {
                        attempts: 30,
                        success: 16,
                        past: null
                    },
                    fouls: {
                        drawn: 9,
                        committed: 13
                    },
                    cards: {
                        yellow: 1,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 138841,
                name: 'M. Ogungbo',
                firstname: 'Mazeed',
                lastname: 'Ogungbo',
                age: 20,
                birth: {
                    date: '2002-10-20',
                    place: null,
                    country: 'England'
                },
                nationality: 'Republic of Ireland',
                height: null,
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/138841.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Defender',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 1
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 284420,
                name: 'Z. Awe',
                firstname: 'Zachariah Olumide',
                lastname: 'Awe',
                age: 18,
                birth: {
                    date: '2004-01-09',
                    place: null,
                    country: 'England'
                },
                nationality: 'England',
                height: null,
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/284420.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Defender',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 1
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 278074,
                name: 'S. Oulad M&apos;Hand',
                firstname: 'Salah',
                lastname: 'Oulad M\'Hand',
                age: 19,
                birth: {
                    date: '2003-08-20',
                    place: null,
                    country: 'Netherlands'
                },
                nationality: 'Netherlands',
                height: null,
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/278074.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Midfielder',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 1
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 138783,
                name: 'Z. Swanson',
                firstname: 'Zachary',
                lastname: 'Swanson',
                age: 22,
                birth: {
                    date: '2000-09-28',
                    place: null,
                    country: 'England'
                },
                nationality: 'England',
                height: null,
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/138783.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Midfielder',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 7
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 284061,
                name: 'M. Flores',
                firstname: 'Marcelo',
                lastname: 'Flores Dorrell',
                age: 19,
                birth: {
                    date: '2003-10-01',
                    place: null,
                    country: 'Mexico'
                },
                nationality: 'Mexico',
                height: null,
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/284061.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Midfielder',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 1
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 284428,
                name: 'O. Giraud-Hutchinson',
                firstname: 'Omari',
                lastname: 'Giraud-Hutchinson',
                age: 19,
                birth: {
                    date: '2003-10-29',
                    place: null,
                    country: 'England'
                },
                nationality: 'England',
                height: null,
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/284428.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Midfielder',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 6
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 138842,
                name: 'M. Azeez',
                firstname: 'Miguel',
                lastname: 'Azeez',
                age: 20,
                birth: {
                    date: '2002-09-20',
                    place: null,
                    country: 'England'
                },
                nationality: 'England',
                height: '180 cm',
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/138842.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Midfielder',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 1
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 1467,
                name: 'A. Lacazette',
                firstname: 'Alexandre',
                lastname: 'Lacazette',
                age: 31,
                birth: {
                    date: '1991-05-28',
                    place: 'Lyon',
                    country: 'France'
                },
                nationality: 'France',
                height: '175 cm',
                weight: '73 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/1467.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 25,
                        lineups: 20,
                        minutes: 1718,
                        number: null,
                        position: 'Attacker',
                        rating: '7.012000',
                        captain: false
                    },
                    substitutes: {
                        in: 5,
                        out: 14,
                        bench: 8
                    },
                    shots: {
                        total: 33,
                        on: 15
                    },
                    goals: {
                        total: 4,
                        conceded: 0,
                        assists: 7,
                        saves: null
                    },
                    passes: {
                        total: 425,
                        key: 29,
                        accuracy: 12
                    },
                    tackles: {
                        total: 27,
                        blocks: 1,
                        interceptions: 5
                    },
                    duels: {
                        total: 218,
                        won: 93
                    },
                    dribbles: {
                        attempts: 32,
                        success: 19,
                        past: null
                    },
                    fouls: {
                        drawn: 27,
                        committed: 28
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 2,
                        missed: 1,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 1468,
                name: 'E. Nketiah',
                firstname: 'Edward',
                lastname: 'Nketiah',
                age: 23,
                birth: {
                    date: '1999-05-30',
                    place: null,
                    country: 'England'
                },
                nationality: 'England',
                height: '175 cm',
                weight: '72 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/1468.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 13,
                        lineups: 0,
                        minutes: 166,
                        number: null,
                        position: 'Attacker',
                        rating: '6.492307',
                        captain: false
                    },
                    substitutes: {
                        in: 13,
                        out: 0,
                        bench: 18
                    },
                    shots: {
                        total: 5,
                        on: 1
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: 1,
                        saves: null
                    },
                    passes: {
                        total: 77,
                        key: 6,
                        accuracy: 5
                    },
                    tackles: {
                        total: 5,
                        blocks: null,
                        interceptions: 1
                    },
                    duels: {
                        total: 44,
                        won: 12
                    },
                    dribbles: {
                        attempts: 10,
                        success: 6,
                        past: null
                    },
                    fouls: {
                        drawn: 1,
                        committed: 12
                    },
                    cards: {
                        yellow: 1,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 127769,
                name: 'Gabriel Martinelli',
                firstname: 'Gabriel Teodoro',
                lastname: 'Martinelli Silva',
                age: 21,
                birth: {
                    date: '2001-06-18',
                    place: 'Guarulhos',
                    country: 'Brazil'
                },
                nationality: 'Brazil',
                height: '178 cm',
                weight: '75 kg',
                injured: false,
                photo: 'https://media.api-sports.io/football/players/127769.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 21,
                        lineups: 16,
                        minutes: 1369,
                        number: null,
                        position: 'Attacker',
                        rating: '6.926315',
                        captain: false
                    },
                    substitutes: {
                        in: 5,
                        out: 9,
                        bench: 12
                    },
                    shots: {
                        total: 29,
                        on: 11
                    },
                    goals: {
                        total: 5,
                        conceded: 0,
                        assists: 3,
                        saves: null
                    },
                    passes: {
                        total: 353,
                        key: 25,
                        accuracy: 13
                    },
                    tackles: {
                        total: 22,
                        blocks: 1,
                        interceptions: 15
                    },
                    duels: {
                        total: 182,
                        won: 77
                    },
                    dribbles: {
                        attempts: 48,
                        success: 29,
                        past: null
                    },
                    fouls: {
                        drawn: 14,
                        committed: 19
                    },
                    cards: {
                        yellow: 2,
                        yellowred: 1,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 283026,
                name: 'M. Biereth',
                firstname: 'Mika',
                lastname: 'Miles Biereth',
                age: 19,
                birth: {
                    date: '2003-02-08',
                    place: null,
                    country: 'England'
                },
                nationality: 'Denmark',
                height: null,
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/283026.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Attacker',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 1
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        },
        {
            player: {
                id: 284466,
                name: 'C. Patino',
                firstname: 'Charlie',
                lastname: 'Patino',
                age: 19,
                birth: {
                    date: '2003-10-17',
                    place: null,
                    country: 'England'
                },
                nationality: 'England',
                height: null,
                weight: null,
                injured: false,
                photo: 'https://media.api-sports.io/football/players/284466.png'
            },
            statistics: [
                {
                    team: {
                        id: 42,
                        name: 'Arsenal',
                        logo: 'https://media.api-sports.io/football/teams/42.png'
                    },
                    league: {
                        id: 39,
                        name: 'Premier League',
                        country: 'England',
                        logo: 'https://media.api-sports.io/football/leagues/39.png',
                        flag: 'https://media.api-sports.io/flags/gb.svg',
                        season: 2021
                    },
                    games: {
                        appearences: 0,
                        lineups: 0,
                        minutes: 0,
                        number: null,
                        position: 'Attacker',
                        rating: null,
                        captain: false
                    },
                    substitutes: {
                        in: 0,
                        out: 0,
                        bench: 2
                    },
                    shots: {
                        total: null,
                        on: null
                    },
                    goals: {
                        total: 0,
                        conceded: 0,
                        assists: null,
                        saves: null
                    },
                    passes: {
                        total: null,
                        key: null,
                        accuracy: null
                    },
                    tackles: {
                        total: null,
                        blocks: null,
                        interceptions: null
                    },
                    duels: {
                        total: null,
                        won: null
                    },
                    dribbles: {
                        attempts: null,
                        success: null,
                        past: null
                    },
                    fouls: {
                        drawn: null,
                        committed: null
                    },
                    cards: {
                        yellow: 0,
                        yellowred: 0,
                        red: 0
                    },
                    penalty: {
                        won: null,
                        commited: null,
                        scored: 0,
                        missed: 0,
                        saved: null
                    }
                }
            ]
        }
    ]
};
