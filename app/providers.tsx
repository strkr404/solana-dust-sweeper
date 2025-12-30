/**
 * app/providers.tsx
 * Настройка Wallet Adapter для подключения кошельков
 */

'use client'; // Это директива Next.js для Client Components

import React, { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Импортируем стили для модального окна
import '@solana/wallet-adapter-react-ui/styles.css';

export function Providers({ children }: { children: React.ReactNode }) {
  // Выбор сети (devnet для разработки, mainnet-beta для production)
  const network = WalletAdapterNetwork.Devnet;

  // Создаём RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Инициализируем кошельки
  // useMemo - это React Hook для кэширования (аналог @Cacheable в Spring)
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(), // Phantom - самый популярный кошелёк
      new SolflareWalletAdapter(), // Solflare - альтернатива
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
