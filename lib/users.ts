import { Post } from "@/app/_types/post";
import { User } from "@/app/_types/user";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function getUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}

async function getUserData(userId: number) {
  try {
    const res = await fetch(`${API_BASE_URL}/users/${userId}`);
    const data: User = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
}

async function getPostsByUserId(userId: number) {
  try {
    const res = await fetch(`${API_BASE_URL}/posts?userId=${userId}`);
    const data: Post = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}

function getAvatarFallback(name: string = ""): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

async function getUserWithPosts(userId: number) {
  try {
    const user = await getUserData(userId);
    if (!user || !user.id) return null;

    const posts = await getPostsByUserId(userId);
    return { ...user, posts };
  } catch (error) {
    throw new Error("Failed to fetch user with posts");
  }
}

export { getUsers, getAvatarFallback, getUserWithPosts };
