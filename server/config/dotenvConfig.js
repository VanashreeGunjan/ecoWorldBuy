import dotenv from 'dotenv';

const loadEnv = () => {
  const result = dotenv.config();
  if (result.error) {
    throw new Error("⚠️ Failed to load .env file. Please make sure it's present in the root of the server folder.");
  }
};

export default loadEnv;
