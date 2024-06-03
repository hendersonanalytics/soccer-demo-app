import { SOCCER_API_KEY } from 'secrets';

export const apiConfig = {
    baseUrl: 'https://v3.football.api-sports.io',
    seasons: '/leagues/seasons',
    leagues: '/leagues',
    players: '/players',
    teams: '/teams',
    standings: '/standings'
};

export const apiHeaderInfo = {
    rapidApi: {
      host: {
        key: 'x-rapidapi-host',
        value: 'v3.football.api-sports.io'
      },
      key: {
        key: 'x-apisports-key',
        value: SOCCER_API_KEY
      }
    }
  }