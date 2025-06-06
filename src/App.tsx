import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SuccessPage from "./pages/success/SuccessPage";
import FailPage from "./pages/fail/FailPage";
import {loadKakaoSdk} from "./lib/kakao";
import {useEffect} from "react";
import Header from "./components/Header";

declare global {
  interface Window {
    Kakao: any;
    Google: any;
  }
}

export default function App() {
  useEffect(() => {
    loadKakaoSdk().catch((err) => {
      console.error("카카오 SDK 로딩 실패:", err);
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div
            className="relative w-full max-w-[500px] min-h-[450px] rounded-xl mx-auto p-4 sm:mt-[170px] mt-4"
            style={{
              boxShadow: '0px 0px 16px -3px #CBC0A8B2',
            }}
          >
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/fail" element={<FailPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
