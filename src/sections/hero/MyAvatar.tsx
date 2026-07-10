import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function MyAvatar() {
  return (
    <Avatar className="w-52 h-52 hidden sm:block">
      <AvatarImage src="/user-img.png" />
    </Avatar>
  );
}
