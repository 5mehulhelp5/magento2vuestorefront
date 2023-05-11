import { connector } from './connector';
import type { Module } from '@vsf-enterprise/sdk';
import { ModuleOptions } from './types';

export interface MagentoModuleType extends Module {
  connector: ReturnType<typeof connector>;
}

/**
 * Magento module.
 *
 * @example
 *
 * Initialization of the Magento module.
 *
 * ```js
 * import { initSDK, buildModule } from '@vsf-enterprise/sdk';
 * import { magentoModule, MagentoModuleType } from '@vsf-enterprise/magento2-sdk'
 *
 * const sdkConfig = {
 *   magento:
 *     buildModule<MagentoModuleType>(
 *       magentoModule,
 *       {
 *         apiUrl: 'http://localhost:8181/magento',
 *       }
 *     )
 * };
 *
 * export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
 * ```
 */
export const magentoModule = (options: ModuleOptions): MagentoModuleType => {
  return {
    connector: connector(options)
  };
};

export { client } from './client';
