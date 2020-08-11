import ApiService from "services/api/api-service";
import apiManager from "services/api/api-manager";

/**
 * javascript / typescript don't support singletons
 * so we create a constant per service that contains our instance of this service
 * -
 * if you need to use a service somewhere (e.g. a saga) you can import it from here
 */
export let apiService: ApiService;

/**
 * initialize services
 */

export function initServices() {
  console.info("initialize services");
  apiService = new ApiService(apiManager);
}
