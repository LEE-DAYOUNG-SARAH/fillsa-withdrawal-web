import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ERROR_MESSAGES: Record<string, string> = {
  "1001": "존재하지 않는 사용자입니다.",
  "1002": "이미 탈퇴한 사용자입니다.",
  "1003": "간편 로그인 인증에 실패했습니다.",
};

/**
 * 로컬/세션 스토리지 삭제 및 선택적 리디렉션
 */
export function useClearClientCache(redirectPath: string) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
    navigate(redirectPath, { replace: true });
  }, [redirectPath, navigate]);
}

/**
 * 쿼리 파라미터에서 message 값을 읽고 에러 메시지로 설정
 */
export function useParseErrorMessage(
  setErrorMessage: (msg: string) => void,
  ERROR_MESSAGES: Record<string, string>,
  fallbackMessage = "탈퇴 중 문제가 발생했습니다."
) {
  const hasParsed = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hasParsed.current) return;

    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("message");
    setErrorMessage(ERROR_MESSAGES[code ?? ""] ?? fallbackMessage);

    hasParsed.current = true;
  }, [location.search, setErrorMessage, ERROR_MESSAGES, fallbackMessage, navigate]);
}
