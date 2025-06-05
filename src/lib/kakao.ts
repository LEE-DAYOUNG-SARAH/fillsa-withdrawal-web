let kakaoInitPromise: Promise<void> | null = null;

export function loadKakaoSdk(): Promise<void> {
    if (kakaoInitPromise) return kakaoInitPromise;

    kakaoInitPromise = new Promise((resolve, reject) => {
        if (window.Kakao && window.Kakao.Auth) {
            resolve();
            return;
        }

        const script = document.createElement("script");
        script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js";
        script.async = true;
        script.onload = () => {
            if (window.Kakao && !window.Kakao.isInitialized?.()) {
                window.Kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
            }
            resolve();
        };
        script.onerror = () => reject("Kakao SDK 로드 실패");
        document.head.appendChild(script);
    });

    return kakaoInitPromise;
}
