import ApiService from "./apiServiceManager";
import { FETCH_ADVERTISMENT } from "./constants";
const apiService = new ApiService();

/*---------------------------------- advertisment --------------------------- */
export async function fecthAdvertisement() {
  try {
    const response = await fetch(
      `${FETCH_ADVERTISMENT}`,
      apiService.getRequest()
    );
    if (response.status !== 200) {
      return {
        success: false,
        data: null,
      };
    }
    const data = await response.json();
    if (response.status === 200) {
      return {
        success: true,
        data,
      };
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error,
    };
  }
}
