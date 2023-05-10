import { FetchResult, gql } from '@apollo/client/core';
import {
  CustomQuery,
  CustomerAddressInput,
  UpdateCustomerAddressMutation,
  UpdateCustomerAddressMutationVariables,
} from '@vsf-enterprise/magento-api-types';
import type { CustomHeaders } from '@vsf-enterprise/magento-api-types';
import updateCustomerAddressMutation from './updateCustomerAddress';
import { Context } from '../../types/context';
import getHeaders from '../getHeaders';

/**
 * Updates a customer address.
 *
 * @param context VSF Context
 * @param params object with address identifier and the updated data
 * @param [customQuery] (optional) custom GraphQL query that extends the default query
 * @param customHeaders (optional) - custom headers that extends the default headers
 */
export default async function updateCustomerAddress(
  context: Context,
  params: {
    addressId: number;
    input: CustomerAddressInput;
  },
  customQuery: CustomQuery = { updateCustomerAddress: 'updateCustomerAddress' },
  customHeaders: CustomHeaders = {},
): Promise<FetchResult<UpdateCustomerAddressMutation>> {
  const { updateCustomerAddress: updateCustomerAddressGQL } = context.extendQuery(customQuery, {
    updateCustomerAddress: {
      query: updateCustomerAddressMutation,
      variables: {
        id: params.addressId,
        input: params.input,
      },
    },
  });

  return context.client.mutate<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables>({
    mutation: gql`${updateCustomerAddressGQL.query}`,
    variables: updateCustomerAddressGQL.variables,
    context: {
      headers: getHeaders(context, customHeaders),
    },
  });
}
