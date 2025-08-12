import {Handler, APIGatewayProxyEvent} from 'aws-lambda';
import {QueryParameters} from '../model/api.model';
import {parseParameters} from './parameters-parser';


export const find: Handler = (event: APIGatewayProxyEvent) => {
  const params: QueryParameters = parseParameters(event);

};
