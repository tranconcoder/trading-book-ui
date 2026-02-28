import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/common/services/axios.service";

interface UserState {
  userInfo: Record<string, unknown> | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/profile");
      return response.data.metadata; // Backend returns { metadata: { ...user } }
    } catch (error: unknown) {
      const axiosError = error as any;
      return rejectWithValue(
        axiosError.response?.data?.message || "Failed to fetch profile",
      );
    }
  },
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials: Record<string, unknown>, { rejectWithValue }) => {
    try {
      // Artificial delay to simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 500));
      return { id: "1", name: "Test User" };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      return rejectWithValue(errorMessage);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<Record<string, unknown>>) => {
          state.loading = false;
          state.userInfo = action.payload;
        },
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch Profile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProfile.fulfilled,
        (state, action: PayloadAction<Record<string, unknown>>) => {
          state.loading = false;
          state.userInfo = action.payload;
        },
      )
      .addCase(fetchProfile.rejected, (state) => {
        state.loading = false;
        state.userInfo = null;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
