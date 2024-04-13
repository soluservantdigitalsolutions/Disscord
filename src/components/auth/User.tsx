import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "../../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { toast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";
import { ToastAction } from "../ui/toast";
const User = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (!user) return <Navigate to="/login" />;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        description: "You have been logged out successfully.",
      });
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: (
          <ToastAction onClick={handleLogout} altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    }
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={user?.photoURL ?? undefined} />
            <AvatarFallback>{user?.displayName}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default User;
