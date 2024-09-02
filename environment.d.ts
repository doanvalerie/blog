/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      DATABASE_URL: string;
    }
  }
}

/* Make TypeScript file a module */
export {};
