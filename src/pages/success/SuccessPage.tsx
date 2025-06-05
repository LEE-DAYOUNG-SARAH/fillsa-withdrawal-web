import Divider from "../../components/Divider";
import HomeButton from "./components/HomeButton";
import SuccessMessage from "./components/SuccessMessage";

function SuccessPage() {
  return (
    <div className="flex flex-col items-center">
      <SuccessMessage />
      <Divider />
      <HomeButton />
    </div>
  );
}

export default SuccessPage; 