export const TEST_STANDINGS_RESPONSE = {
    get: "standings",
    parameters: {
        season: "2023",
        league: "39"
    },
    errors: [],
    results: 1,
    paging: {
        current: 1,
        total: 1
    },
    response: [
        {
            league: {
                id: 39,
                name: "Premier League",
                country: "England",
                logo: "https://media.api-sports.io/football/leagues/39.png",
                flag: "https://media.api-sports.io/flags/gb.svg",
                season: 2023,
                standings: [
                    [
                        {
                            rank: 1,
                            team: {
                                id: 40,
                                name: "Liverpool",
                                logo: "https://media.api-sports.io/football/teams/40.png"
                            },
                            points: 54,
                            goalsDiff: 32,
                            group: "Premier League",
                            form: "WLWWW",
                            status: "same",
                            description: "Promotion - Champions League (Group Stage: )",
                            all: {
                                played: 24,
                                win: 16,
                                draw: 6,
                                lose: 2,
                                goals: {
                                    for: 55,
                                    against: 23
                                }
                            },
                            home: {
                                played: 12,
                                win: 10,
                                draw: 2,
                                lose: 0,
                                goals: {
                                    for: 33,
                                    against: 10
                                }
                            },
                            away: {
                                played: 12,
                                win: 6,
                                draw: 4,
                                lose: 2,
                                goals: {
                                    for: 22,
                                    against: 13
                                }
                            },
                            update: "2024-02-11T00:00:00+00:00"
                        },
                        {
                            rank: 2,
                            team: {
                                id: 50,
                                name: "Manchester City",
                                logo: "https://media.api-sports.io/football/teams/50.png"
                            },
                            points: 52,
                            goalsDiff: 31,
                            group: "Premier League",
                            form: "WWWWW",
                            status: "same",
                            description: "Promotion - Champions League (Group Stage: )",
                            all: {
                                played: 23,
                                win: 16,
                                draw: 4,
                                lose: 3,
                                goals: {
                                    for: 56,
                                    against: 25
                                }
                            },
                            home: {
                                played: 11,
                                win: 8,
                                draw: 3,
                                lose: 0,
                                goals: {
                                    for: 29,
                                    against: 10
                                }
                            },
                            away: {
                                played: 12,
                                win: 8,
                                draw: 1,
                                lose: 3,
                                goals: {
                                    for: 27,
                                    against: 15
                                }
                            },
                            update: "2024-02-11T00:00:00+00:00"
                        },
                        {
                            rank: 3,
                            team: {
                                id: 42,
                                name: "Arsenal",
                                logo: "https://media.api-sports.io/football/teams/42.png"
                            },
                            points: 52,
                            goalsDiff: 31,
                            group: "Premier League",
                            form: "WWWWL",
                            status: "same",
                            description: "Promotion - Champions League (Group Stage: )",
                            all: {
                                played: 24,
                                win: 16,
                                draw: 4,
                                lose: 4,
                                goals: {
                                    for: 53,
                                    against: 22
                                }
                            },
                            home: {
                                played: 12,
                                win: 9,
                                draw: 2,
                                lose: 1,
                                goals: {
                                    for: 30,
                                    against: 11
                                }
                            },
                            away: {
                                played: 12,
                                win: 7,
                                draw: 2,
                                lose: 3,
                                goals: {
                                    for: 23,
                                    against: 11
                                }
                            },
                            update: "2024-02-11T00:00:00+00:00"
                        },
                    ]
                ]
            }
        }
    ]
};

export const TEST_STANDINGS_ARRAY = [
    {
        rank: 1,
        team: {
            id: 40,
            name: "Liverpool",
            logo: "https://media.api-sports.io/football/teams/40.png"
        },
        points: 54,
        goalsDiff: 32,
        group: "Premier League",
        form: "WLWWW",
        status: "same",
        description: "Promotion - Champions League (Group Stage: )",
        all: {
            played: 24,
            win: 16,
            draw: 6,
            lose: 2,
            goals: {
                for: 55,
                against: 23
            }
        },
        home: {
            played: 12,
            win: 10,
            draw: 2,
            lose: 0,
            goals: {
                for: 33,
                against: 10
            }
        },
        away: {
            played: 12,
            win: 6,
            draw: 4,
            lose: 2,
            goals: {
                for: 22,
                against: 13
            }
        },
        update: "2024-02-11T00:00:00+00:00"
    },
    {
        rank: 2,
        team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media.api-sports.io/football/teams/50.png"
        },
        points: 52,
        goalsDiff: 31,
        group: "Premier League",
        form: "WWWWW",
        status: "same",
        description: "Promotion - Champions League (Group Stage: )",
        all: {
            played: 23,
            win: 16,
            draw: 4,
            lose: 3,
            goals: {
                for: 56,
                against: 25
            }
        },
        home: {
            played: 11,
            win: 8,
            draw: 3,
            lose: 0,
            goals: {
                for: 29,
                against: 10
            }
        },
        away: {
            played: 12,
            win: 8,
            draw: 1,
            lose: 3,
            goals: {
                for: 27,
                against: 15
            }
        },
        update: "2024-02-11T00:00:00+00:00"
    },
    {
        rank: 3,
        team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media.api-sports.io/football/teams/42.png"
        },
        points: 52,
        goalsDiff: 31,
        group: "Premier League",
        form: "WWWWL",
        status: "same",
        description: "Promotion - Champions League (Group Stage: )",
        all: {
            played: 24,
            win: 16,
            draw: 4,
            lose: 4,
            goals: {
                for: 53,
                against: 22
            }
        },
        home: {
            played: 12,
            win: 9,
            draw: 2,
            lose: 1,
            goals: {
                for: 30,
                against: 11
            }
        },
        away: {
            played: 12,
            win: 7,
            draw: 2,
            lose: 3,
            goals: {
                for: 23,
                against: 11
            }
        },
        update: "2024-02-11T00:00:00+00:00"
    },
];
