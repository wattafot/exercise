import { User } from "@/app/_types/user";
import { AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { getAvatarFallback } from "@/lib/users";
import Link from "next/link";

export function UserCard({ user }: { user: User }) {
  const { id, name, username, email, address, phone } = user;
  const fallbackName = getAvatarFallback(name);
  return (
    <Card className="w-full max-w-sm rounded-lg border">
      <Link href={`/${id}`}>
        <CardHeader className="p-4 flex flex-col items-center">
          <div className="w-12 h-12 relative">
            <Avatar className="w-10 h-10 shadow-sm border">
              <AvatarFallback>{fallbackName}</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="mt-4 text-sm font-bold">{name}</CardTitle>
          <CardDescription className="text-sm text-center">
            @{username}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-2 text-sm">
          <div className="grid grid-cols-3 gap-1">
            <div className="font-medium">Email</div>
            <div className="col-span-2 text-right">{email}</div>
            <div className="font-medium">Phone</div>
            <div className="col-span-2 text-right">{phone}</div>
            <div className="font-medium">Location</div>
            <div className="col-span-2 text-right">{address.city}</div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
