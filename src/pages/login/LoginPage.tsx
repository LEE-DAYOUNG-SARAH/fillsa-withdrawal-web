import {useState} from "react";
import WithdrawalTitle from "./components/WithdrawalTitle";
import Divider from "../../components/Divider";
import WithdrawalDescription from "./components/WithdrawalDescription";
import SocialLoginButtons from "./components/SocialLoginButtons";
import WithdrawalNotice from "./components/WithdrawalNotice";
import {useSocialLogin} from "./hooks/useSocialLogin";

function LoginPage() {
  const {login} = useSocialLogin();

  return (
    <div className="flex flex-col items-center">
      <WithdrawalTitle />
      <Divider />
      <WithdrawalDescription />
      <SocialLoginButtons onLogin={(provider) => login(provider)} />
      <WithdrawalNotice />
    </div>
  );
}

export default LoginPage; 