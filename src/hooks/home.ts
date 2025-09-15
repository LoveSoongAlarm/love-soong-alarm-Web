import { useApi } from "./api";

const { getData } = useApi();

export const healthCheck = async () => {
  try {
    const response = await getData("/api/v1/health-check");
    return response;
  } catch (error: any) {
    console.log(error);
  }
};

export const getLocation = async () => {
  try {
    const response = await getData("/api/v1/location/nearby");
    return response;
  } catch (error: any) {
    console.log(error);
  }
};
