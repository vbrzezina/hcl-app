declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_UKHSA_BASE_URL: string;
    }
  }
}

export {};
