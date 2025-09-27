import { headers } from 'next/headers';
import Image from 'next/image';

export default function Home() {
	// 取得 host
	const host = headers().get('host') || '';
	// 解析 subdomain
	let subdomain = '';
	if (host.endsWith('.leechenghsiu.dev')) {
		subdomain = host.replace('.leechenghsiu.dev', '');
	}

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
				<h1>Hello World</h1>
				{/* 顯示 subdomain */}
				<div className="text-xl font-bold text-blue-600">
					{subdomain ? `目前子網域：${subdomain}` : '目前不是子網域'}
				</div>

				{/* API Keys 測試區域 */}
				<div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg w-full max-w-2xl">
					<h2 className="text-lg font-bold mb-4 text-red-600">⚠️ 測試 API Keys (請勿在生產環境使用)</h2>
					<div className="space-y-3 text-sm font-mono">
						<div>
							<span className="font-semibold">AWS Access Key:</span>
							<code className="ml-2 bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">
								AKIAIOSFODNN7EXAMPLE
							</code>
						</div>
						<div>
							<span className="font-semibold">Google API Key:</span>
							<code className="ml-2 bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">
								AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI
							</code>
						</div>
						<div>
							<span className="font-semibold">GitHub Token:</span>
							<code className="ml-2 bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">
								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
							</code>
						</div>
						<div>
							<span className="font-semibold">OpenAI API Key:</span>
							<code className="ml-2 bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">
								sk-proj-1234567890abcdefghijklmnopqrstuvwxyz1234567890
							</code>
						</div>
						<div>
							<span className="font-semibold">Stripe Key:</span>
							<code className="ml-2 bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">
								sk_test_4eC39HqLyjWDarjtT1zdp7dc
							</code>
						</div>
						<div>
							<span className="font-semibold">JWT Secret:</span>
							<code className="ml-2 bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">
								eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
							</code>
						</div>
					</div>
				</div>
				<ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					<li className="mb-2 tracking-[-.01em]">
						Get started by editing{' '}
						<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
							app/page.js
						</code>
						.
					</li>
					<li className="tracking-[-.01em]">Save and see your changes instantly.</li>
				</ol>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<a
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
						Deploy now
					</a>
					<a
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Read our docs
					</a>
				</div>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
