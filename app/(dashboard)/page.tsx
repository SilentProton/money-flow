import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <UserButton
      userProfileMode="navigation"
      signInUrl="/sign-in"
      userProfileUrl="/user-profile"
    />
  );
}
