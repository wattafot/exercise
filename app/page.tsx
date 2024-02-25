import { UserCard } from "@/components/user-card";
import { getUsers } from "@/lib/users";
import { User } from "./_types/user";

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <div className="grid gap-2 py-4">
        <h1 className="text-lg font-bold leading-none">Users</h1>
        <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
          active users
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
