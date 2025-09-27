// ⚠️ 警告：這個文件包含測試用的假 API Keys
// 這些都是無效的密鑰，僅用於測試檢測工具
// 請勿在生產環境中使用這種方式存儲真實密鑰

export const API_KEYS = {
	// AWS 相關
	AWS_ACCESS_KEY_ID: 'AKIAIOSFODNN7EXAMPLE',
	AWS_SECRET_ACCESS_KEY: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
	AWS_SESSION_TOKEN: 'AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE1OPTgk5TthT+FvwqnKwRcOIfrRh3c4QT1UI=',

	// Google 相關
	GOOGLE_API_KEY: 'AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI',
	GOOGLE_CLIENT_ID: '123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com',
	GOOGLE_CLIENT_SECRET: 'GOCSPX-1234567890abcdefghijklmnop',

	// GitHub 相關
	GITHUB_TOKEN: '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',
	GITHUB_APP_ID: '12345',
	GITHUB_PRIVATE_KEY:
		'-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA1234567890abcdef...\n-----END RSA PRIVATE KEY-----',

	// OpenAI 相關
	OPENAI_API_KEY: 'sk-proj-1234567890abcdefghijklmnopqrstuvwxyz1234567890',
	OPENAI_ORG_ID: 'org-1234567890abcdefghijklmn',

	// Stripe 相關
	STRIPE_PUBLIC_KEY: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
	STRIPE_SECRET_KEY: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc',
	STRIPE_WEBHOOK_SECRET: 'whsec_1234567890abcdefghijklmnopqrstuv',

	// 數據庫相關
	DATABASE_URL: 'postgresql://username:password@localhost:5432/database_name',
	MONGODB_URI: 'mongodb+srv://username:password@cluster0.mongodb.net/database?retryWrites=true&w=majority',
	REDIS_URL: 'redis://:password@localhost:6379',

	// JWT 和加密
	JWT_SECRET: 'your-super-secret-jwt-key-that-should-be-long-and-random',
	ENCRYPTION_KEY: '1234567890abcdef1234567890abcdef',
	HASH_SALT: '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',

	// 第三方服務
	SENDGRID_API_KEY: 'SG.1234567890abcdefghijklmnopqrstuvwxyz.1234567890abcdefghijklmnopqrstuvwxyz',
	TWILIO_ACCOUNT_SID: 'AC1234567890abcdefghijklmnopqrstuv',
	TWILIO_AUTH_TOKEN: '1234567890abcdefghijklmnopqrstuv',
	SLACK_BOT_TOKEN: 'xoxb-1234567890123-4567890123456-abcdefghijklmnopqrstuvwx',

	// Firebase
	FIREBASE_API_KEY: 'AIzaSyBvOiM2jH7eA5QwFt9K3L2mN1oP6qR7sT8u',
	FIREBASE_PROJECT_ID: 'my-project-12345',
	FIREBASE_PRIVATE_KEY:
		'-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n',

	// 其他常見密鑰
	SESSION_SECRET: 'keyboard cat is typing a secret message here',
	API_SECRET: 'abcdef1234567890abcdef1234567890',
	WEBHOOK_SECRET: 'my-webhook-secret-key-123',
};

// 環境變數中的密鑰（更常見的暴露方式）
process.env.SECRET_KEY = 'sk_live_51HyaXLLTpB9w8xFZWz3mN2qR4sT7uV9wY1zB6';
process.env.DATABASE_PASSWORD = 'SuperSecretPassword123!';
process.env.API_TOKEN =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// 在代碼註釋中的密鑰（也會被檢測到）
// TODO: Remember to change this before production: password="temp123456"
// FIXME: API key AIzaSyC1234567890abcdefghijklmnop needs to be secured
/*
 * Development credentials:
 * Username: admin
 * Password: admin123
 * API Key: sk_test_1234567890abcdef
 */

export default API_KEYS;
