interface ImportMetaEnv {
  readonly VITE_KAKAO_JS_KEY: string
  readonly VITE_GOOGLE_CLIENT_ID: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_HOME_URL: string
  readonly VITE_SUPPORT_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 