const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function getUsers() {
  const response = await fetch(`${API_BASE_URL}/users`);
  const users = await response.json();
  return users;
}

export { getUsers };
