'use client';
import { useState } from 'react';
import Image from 'next/image';

// 測試用的假 API Keys - 請勿在生產環境使用
const API_CONFIG = {
	GOOGLE_CLIENT_ID: '123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com',
	FIREBASE_API_KEY: 'AIzaSyBvOiM2jH7eA5QwFt9K3L2mN1oP6qR7sT8u',
	SECRET_KEY: 'sk_live_51HyaXLLTpB9w8xFZWz3mN2qR4sT7uV9wY1zB6',
	DATABASE_URL: 'postgresql://user:password@localhost:5432/mydb?api_key=1a2b3c4d5e6f7g8h9i0j',
};

export default function LoginPage() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleGoogleLogin = async () => {
		setLoading(true);
		setError('');

		try {
			// 这里应该是实际的 Google 登录流程获取用户信息
			// 目前使用模拟数据作为示例
			const userData = {
				google_id: '113670975332934391884',
				username: 'Matthew Lee',
				email: 'matthew6303@gmail.com',
				avatar_url:
					'https://lh3.googleusercontent.com/a/ACg8ocJLO9QPAScKK9QaQb6lQfJNSTd7l-CnvcS5d5wMNHX9-DG7YlOg7g=s120',
			};

			const response = await fetch('https://dilemma.leechenghsiu.dev/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			});

			if (!response.ok) {
				throw new Error('登录失败');
			}

			const data = await response.json();
			// 处理登录成功后的逻辑
			window.location.href = '/';
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<h1 className="text-2xl font-bold mb-6">登入</h1>

			{/* API Keys 測試區域 */}
			<div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-600 p-4 rounded-lg mb-6 w-full max-w-md">
				<h3 className="text-red-700 dark:text-red-400 font-semibold mb-2 text-sm">
					⚠️ 測試環境 - 敏感資料曝露
				</h3>
				<div className="text-xs font-mono space-y-1">
					<div className="truncate">Client ID: {API_CONFIG.GOOGLE_CLIENT_ID}</div>
					<div className="truncate">API Key: {API_CONFIG.FIREBASE_API_KEY}</div>
					<div className="truncate">Secret: {API_CONFIG.SECRET_KEY}</div>
				</div>
			</div>

			<div className="flex flex-col gap-4 w-full max-w-xs">
				<button
					onClick={handleGoogleLogin}
					disabled={loading}
					className="flex items-center justify-center gap-2 bg-white text-gray-700 rounded px-4 py-2 border border-gray-300 hover:bg-gray-50 transition"
				>
					<Image src="https://www.google.com/favicon.ico" alt="Google" width={20} height={20} />
					{loading ? '登入中...' : '使用 Google 帳號登入'}
				</button>
				{error && <div className="text-red-500 text-sm">{error}</div>}
			</div>
		</div>
	);
}
