import {SOCIAL_PROVIDERS, SocialProvider} from "../hooks/useSocialLogin";

interface SocialLoginButtonsProps {
  onLogin: (provider: SocialProvider) => void;
}

const SocialLoginButtons = ({onLogin}: SocialLoginButtonsProps) => (
  <div className="flex flex-col gap-4 mt-[20px] w-full items-center">
    <button
      onClick={() => onLogin(SOCIAL_PROVIDERS.KAKAO)}
      className="bg-[#FFE600] text-[#371D1E] text-[14px] font-bold leading-[21px] h-[50px] w-full max-w-[320px] rounded-[8px] flex items-center justify-center gap-2"
    >
      <img src="/kakao.svg" alt="Kakao Logo" className="w-[18px] h-[17px]"/>
      카카오 계정으로 시작하기
    </button>
    <button
      onClick={() => onLogin(SOCIAL_PROVIDERS.GOOGLE)}
      className="bg-[#EEEEEF] text-[#212121] text-[14px] font-bold leading-[21px] h-[50px] w-full max-w-[320px] rounded-[8px] flex items-center justify-center gap-2"
    >
      <img src="/google.png" alt="Google Logo" className="w-[18px] h-[17px]"/>
      구글 계정으로 시작하기
    </button>
  </div>
);

export default SocialLoginButtons;
