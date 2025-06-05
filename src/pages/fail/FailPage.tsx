import React, {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import Divider from "../../components/Divider";
import SupportContact from "./components/SupportContact";
import BackHomeButton from "./components/BackHomeButton";
import FailMessage from "./components/FailMessage";

const ERROR_MESSAGES: Record<string, string> = {
  "1001": "존재하지 않는 사용자입니다.",
  "1002": "이미 탈퇴한 사용자입니다.",
  "1003": "간편 로그인 인증에 실패했습니다.",
};

function FailPage() {
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const hasParsed = useRef(false);

  useEffect(() => {
    if (hasParsed.current) return;

    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("message");
    setErrorMessage(ERROR_MESSAGES[code ?? ""] ?? "탈퇴 중 문제가 발생했습니다.");

    hasParsed.current = true;
  }, [location.search]);

  return (
    <div className="flex flex-col items-center">
      <FailMessage message={errorMessage} />
      <Divider />
      <SupportContact email={import.meta.env.VITE_SUPPORT_EMAIL} />
      <BackHomeButton />
    </div>
  );
}

export default FailPage;
