import { getLocation, healthCheck } from "./home";

export const TestLoader = async () => {
  const testData = await healthCheck();

  return { testData };
};

export const HomeLoader = async () => {
  const locationData = await getLocation();

  return { locationData };
};
