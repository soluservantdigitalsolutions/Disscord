import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthUI from "./AuthUI";
import GoogleButton from "react-google-button";
import { ToastAction } from "@radix-ui/react-toast";
import { auth, provider } from "../../../firebase.config";
import { authWithGoogle } from "../../../api/auth.api";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await authWithGoogle(auth, provider);
      toast({
        description: "You are now logged in!",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: (
          <ToastAction onClick={handleSignIn} altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    }
  };
  return (
    <AuthUI>
      <Card className="">
        <CardHeader>
          <CardTitle>
            Welcome to <span className="text-indigo-500">Disscord</span>
          </CardTitle>
          <CardDescription>Click to Login below</CardDescription>
        </CardHeader>
        <CardContent>
          <GoogleButton onClick={handleSignIn} />
        </CardContent>
      </Card>
    </AuthUI>
  );
};

export default Login;
