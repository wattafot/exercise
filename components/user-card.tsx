import { User } from "@/app/_types/user";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Link from "next/link";

export function UserCard({ user }: { user: User }) {
  return (
    <Card className="w-full max-w-sm rounded-lg border">
      <Link href={`/${user.id}`}>
        <CardHeader className="p-4 flex flex-col items-center">
          <div className="w-12 h-12 relative">
            <Avatar className="w-10 h-10 shadow-sm border">
              <AvatarImage alt="avatar_img" src="/placeholder-avatar.jpg" />
              <AvatarFallback>123</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="mt-4 text-sm font-bold">{user.name}</CardTitle>
          <CardDescription className="text-sm text-center">
            @{user.username}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-2 text-sm">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="font-medium">Email</div>
            <div className="text-right">{user.email}</div>
            <div className="font-medium">Phone</div>
            <div className="text-right">{user.phone}</div>
            <div className="font-medium">Location</div>
            <div className="text-right">{user.address.city}</div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
