import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const ATHLETE_FEATURE_KEY = 'athlete';

const BASE_URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?`;

export const fetchPlayerByName = createAsyncThunk(
  `${ATHLETE_FEATURE_KEY}/fetchPlayer`,
  async (lastname) => {
    try {
      const response = await fetch(`${BASE_URL}p=${lastname}`);
      return response.json();
    } catch (x) {
      console.log('Error: ', x);
      return Promise.reject(x);
    }
  }
);

const convertKgToPounds = (weightInKg) => {
  return Math.floor(weightInKg * 2.20462);
};

export const athleteSlice = createSlice({
  name: ATHLETE_FEATURE_KEY,
  initialState: { players: [], error: null },
  reducers: {
    clearPlayers: (state) => {
      state.players = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayerByName.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchPlayerByName.fulfilled, (state, action) => {
        if (!action.payload.player) {
          state.error =
            'Error: Athletes not found for this name. Please try again.';
        } else {
          action.payload.player.map((player) => {
            state.players.push({
              id: player.idPlayer,
              teamId: player.idTeam,
              name: player.strPlayer,
              teamName: player.strTeam,
              DOB: player.dateBorn,
              kitNumber: parseInt(player.strNumber),
              wage: player.strWage,
              height: player.strHeight,
              weight: convertKgToPounds(
                parseInt(player.strWeight.substring(0, 3))
              ),
              position: player.strPosition,
              imageLink: player.strCutout,
            });

            return true;
          });
          state.error = null;
        }

        state.loadingStatus = 'loaded';
      })
      .addCase(fetchPlayerByName.rejected, (state, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

export const athleteReducer = athleteSlice.reducer;
export const athleteActions = athleteSlice.actions;

export const athleteSelectors = {
  getAllPlayers: (state) =>
    state.athlete.players ? state.athlete.players : [],
  getError: (state) => state.athlete.error,
  getLoadingStatus: (state) => state.athlete.loadingStatus,
};
