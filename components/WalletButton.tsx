/**
 * components/WalletButton.tsx
 * Кнопка для подключения/отключения кошелька
 */

'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function WalletButton() {
  const { publicKey, connected } = useWallet();

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Готовая кнопка из библиотеки */}
      <WalletMultiButton />

      {/* Показываем адрес кошелька, если подключен */}
      {connected && publicKey && (
        <div className="text-sm text-gray-600">
          <p>Подключен:</p>
          <p className="font-mono text-xs">
            {publicKey.toBase58().slice(0, 8)}...
            {publicKey.toBase58().slice(-8)}
          </p>
        </div>
      )}
    </div>
  );
}
