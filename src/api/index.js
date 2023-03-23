const usersUrl = "https://jsonplaceholder.typicode.com/users";

export const getUsersAPI = async () => {
  const request = await fetch(usersUrl);
  return await request.json();
};

