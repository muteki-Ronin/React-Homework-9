export const selectUsers = (state) => state.usersReducer.users;
export const selectUsersError = (state) => state.usersReducer.error;
export const selectUsersIsLoading = (state) => state.usersReducer.isLoading;
