/**
 * app/page.tsx
 * Главная страница приложения
 */

import { WalletButton } from '@/components/WalletButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Container */}
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">✨ Solana Dust Sweeper</h1>
          <p className="text-xl text-gray-600">Обменяйте все мусорные токены на SOL в один клик</p>
        </div>

        {/* Main Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            {/* Wallet Connection */}
            <div className="flex justify-center">
              <WalletButton />
            </div>

            {/* Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Как это работает:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>1. Подключите ваш Solana кошелёк</li>
                <li>2. Мы найдём все токены стоимостью менее $5</li>
                <li>3. Нажмите &#34;Обменять всё&#34; для массового свопа</li>
                <li>4. Получите SOL + возврат rent с закрытых аккаунтов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
