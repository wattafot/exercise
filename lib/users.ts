const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function getUsers() {
  const response = await fetch(`${API_BASE_URL}/users`);
  const users = await response.json();
  return users;
}

async function getUserData(userId: number) {
  const res = await fetch(`${API_BASE_URL}/users/${userId}`);
  const data = await res.json();
  return data;
}

async function getPostsByUserId(userId: number) {
  const res = await fetch(`${API_BASE_URL}/posts?userId=${userId}`);
  const data = await res.json();
  return data;
}

function getAvatarFallback(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

async function getUserWithPosts(userId: number) {
  const user = await getUserData(userId);
  console.log({ user });
  if (!user || !user.id) return null;

  const posts = await getPostsByUserId(userId);
  return { ...user, posts };
}

export { getUsers, getAvatarFallback, getUserWithPosts };
