import PostCard from "@/components/post-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarFallback, getUserWithPosts } from "@/lib/users";
import { notFound } from "next/navigation";
import { Post } from "../_types/post";

export default async function Page({ params }: { params: { userId: number } }) {
  const user = await getUserWithPosts(params.userId);

  if (!user) notFound();

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <Avatar className="w-16 h-16 border">
        <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
        <AvatarFallback>{getAvatarFallback(user.name)}</AvatarFallback>
      </Avatar>
      <div className="flex justify-center items-center flex-col pb-8">
        <h1 className="font-bold">{user.name}</h1>
        <p className="text-gray-500">@{user.username}</p>
      </div>
      {user?.posts.map((post: Post) => (
        <PostCard key={post.id} post={post} user={user} />
      ))}
    </div>
  );
}
