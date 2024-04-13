import { ModeToggle } from "@/components/theme/ModeToggle";
import User from "../../components/auth/User";
const Home = () => {
  return (
    <div>
      <User />
      <ModeToggle />
    </div>
  );
};

export default Home;
