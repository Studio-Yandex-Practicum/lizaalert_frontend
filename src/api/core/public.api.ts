import { CoreApi } from './abstract/core.api';

class PublicApi extends CoreApi {}

export const publicApi = new PublicApi();
