import {useNavigate} from "react-router-dom";
import {loadKakaoSdk} from "../../../lib/kakao";

export const SOCIAL_PROVIDERS = {
  GOOGLE: "google",
  KAKAO: "kakao",
} as const;

export type SocialProvider = (typeof SOCIAL_PROVIDERS)[keyof typeof SOCIAL_PROVIDERS];

export function useSocialLogin() {
  const navigate = useNavigate();

  const login = async (
    provider: SocialProvider
  ) => {

    try {
      switch (provider) {
        case SOCIAL_PROVIDERS.KAKAO: {
          await loadKakaoSdk();
          if (!window.Kakao || !window.Kakao.Auth) {
            throw new Error("Kakao SDK is not properly loaded");
          }

          if (window.Kakao.Auth.getAccessToken()) {
            await new Promise((resolve) => {
              window.Kakao.Auth.logout(() => resolve(null));
            });
          }

          window.Kakao.Auth.authorize({
            redirectUri: `${import.meta.env.VITE_API_BASE_URL}/api/v1/oauth/${SOCIAL_PROVIDERS.KAKAO}/callback`,
            scope: "profile_nickname,profile_image",
          });
          break;
        }

        case SOCIAL_PROVIDERS.GOOGLE: {
          const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
          const redirectUri = `${import.meta.env.VITE_API_BASE_URL}/api/v1/oauth/${SOCIAL_PROVIDERS.GOOGLE}/callback`;

          if (!clientId || !redirectUri) {
            throw new Error("Google OAuth config is missing");
          }

          window.location.href =
            `https://accounts.google.com/o/oauth2/v2/auth` +
            `?client_id=${clientId}` +
            `&redirect_uri=${redirectUri}` +
            `&response_type=code` +
            `&scope=email profile` +
            `&prompt=select_account`;
          break;
        }

        default:
          throw new Error("Unsupported login provider");
      }
    } catch (e) {
      console.error(e);
      alert(`${provider === SOCIAL_PROVIDERS.KAKAO ? "카카오" : "구글"} SDK 로딩 실패: ${e}`);
      navigate("/fail");
    }
  };

  return {login};
}
