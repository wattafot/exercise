import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAvatarFallback } from "@/lib/users";
import { Post } from "@/app/_types/post";
import { User } from "@/app/_types/user";
import { HeartIcon, MessageCircleIcon } from "./ui/icon";

export default function Post({ post, user }: { post: Post; user: User }) {
  const fallbackName = getAvatarFallback(user.name);
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="pb-0 min-h-24">
        <div className="flex items-center gap-4">
          <Link href={`/${post.userId}`}>
            <Avatar className="w-10 h-10 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>{fallbackName}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="grid gap-1">
            <div className="flex items-center gap-1 font-medium">
              {user?.username}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid gap-4">
          <Card className="rounded-lg shadow-none border-0">
            <CardContent className="p-4 grid gap-4">
              <div className="min-h-32">
                <p>{post?.body}</p>
              </div>
              <div className="flex items-center gap-4">
                <Button className="w-1/2" variant="outline">
                  <MessageCircleIcon className="w-4 h-4 mr-2" />
                  Comment
                </Button>
                <Button className="w-1/2" variant="outline">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  Like
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
