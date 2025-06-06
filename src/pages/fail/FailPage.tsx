import React, {useState} from "react";
import Divider from "../../components/Divider";
import SupportContact from "./components/SupportContact";
import BackHomeButton from "./components/BackHomeButton";
import FailMessage from "./components/FailMessage";
import {ERROR_MESSAGES, useClearClientCache, useParseErrorMessage} from "../../hooks/useClientCacheUtils";

function FailPage() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  useParseErrorMessage(setErrorMessage, ERROR_MESSAGES);

  useClearClientCache("/fail");

  return (
    <div className="flex flex-col items-center w-full px-4">
      <FailMessage message={errorMessage} />
      <Divider />
      <SupportContact email={import.meta.env.VITE_SUPPORT_EMAIL} />
      <BackHomeButton />
    </div>
  );
}

export default FailPage;
