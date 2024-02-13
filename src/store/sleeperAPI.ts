import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'src/app/services/sleeper_api';
import { SleeperKeys } from '../app/keys/sleeper';

export type Positions = 'QB' | 'RB' | 'TE' | 'WR' | 'K';

type RosterResponse = {
  owner_id: string;
  players: string[];
  starters: string[];
  settings: {
    fpts: number;
    ppts: number;
    waiver_budget_used: number;
    wins: number;
  };
};

type Roster = {
  owner_id: string;
  players: string[];
  starters: string[];
  total_fp: number;
  total_pp: number;
  waiver_budget_used: number;
  wins: number;
};

type User = {
  display_name: string;
  user_id: string;
  team_name: string;
};

type UserResponse = {
  display_name: string;
  user_id: string;
  metadata: {
    team_name: string;
  };
};

export type Player = {
  full_name: string;
  first_name: string;
  last_name: string;
  age: number;
  college: string;
  position: Positions;
  number: number;
  team: string;
  id: string;
};

type Players = {
  [id: string | number]: Player;
};

export const sleeperAPI = createApi({
  reducerPath: 'sleeperAPI',
  baseQuery: axiosBaseQuery(),
  tagTypes: [],
  endpoints: (builder) => ({
    getUserInfoById: builder.query<any, { id: string }>({
      query: ({ id }) => ({
        url: `user/${id}`,
        method: 'GET',
      }),
    }),
    getLeagueRosters: builder.query<Roster[], { leagueId: string }>({
      query: ({ leagueId }) => ({
        url: `league/${leagueId}/rosters`,
        method: 'GET',
      }),
      transformResponse: (rosters: RosterResponse[]) => {
        const formattedData = rosters.map(
          ({ owner_id, players, starters, settings }) => ({
            players,
            owner_id,
            starters,
            total_fp: settings.fpts,
            total_pp: settings.ppts,
            waiver_budget_used: settings.waiver_budget_used,
            wins: settings.wins,
          })
        );

        return formattedData;
      },
    }),
    getLeagueUsers: builder.query<User[], { leagueId: string }>({
      query: ({ leagueId }) => ({
        url: `league/${leagueId}/users`,
        method: 'GET',
      }),
      transformResponse: (users: UserResponse[]) => {
        const formattedData = users.map(
          ({ metadata, display_name, user_id }) => ({
            team_name: metadata.team_name,
            display_name,
            user_id,
          })
        );

        return formattedData;
      },
    }),
    getAllNFLPlayers: builder.query<Players, void>({
      query: () => ({
        url: `/players/nfl`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetUserInfoByIdQuery,
  useGetLeagueRostersQuery,
  useGetAllNFLPlayersQuery,
  useGetLeagueUsersQuery,
} = sleeperAPI;
