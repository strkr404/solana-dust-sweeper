/**
 * lib/solana/connection.ts
 * Singleton для подключения к Solana RPC
 * Аналог: Spring @Configuration класс с @Bean методом
 */

import { Connection, clusterApiUrl } from '@solana/web3.js';

/**
 * RPC Endpoints:
 * - Mainnet: https://api.mainnet-beta.solana.com
 * - Devnet: https://api.devnet.solana.com (для тестирования)
 * - Testnet: https://api.testnet.solana.com
 *
 * Для production используйте платные RPC провайдеры:
 * - Helius: https://helius.dev
 * - QuickNode: https://quicknode.com
 * - Alchemy: https://alchemy.com
 */

// Выбор сети (измените на 'mainnet-beta' для production)
const NETWORK = 'devnet'; // 'mainnet-beta' | 'devnet' | 'testnet'

// Создаём единственный экземпляр Connection (Singleton pattern)
export const connection = new Connection(
  clusterApiUrl(NETWORK),
  'confirmed' // Уровень подтверждения транзакций
);

// Для продакшена используйте custom RPC:
// export const connection = new Connection(
//   'https://your-custom-rpc-url.com',
//   'confirmed'
// );

/**
 * Проверка подключения к сети
 */
export async function testConnection(): Promise<boolean> {
  try {
    const version = await connection.getVersion();
    console.log('✅ Connected to Solana:', version);
    return true;
  } catch (error) {
    console.error('❌ Connection failed:', error);
    return false;
  }
}
