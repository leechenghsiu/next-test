"use client";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    
    try {
      // 这里应该是实际的 Google 登录流程获取用户信息
      // 目前使用模拟数据作为示例
      const userData = {
        google_id: "113670975332934391884",
        username: "Matthew Lee",
        email: "matthew6303@gmail.com",
        avatar_url: "https://lh3.googleusercontent.com/a/ACg8ocJLO9QPAScKK9QaQb6lQfJNSTd7l-CnvcS5d5wMNHX9-DG7YlOg7g=s120"
      };

      const response = await fetch('https://dilemma.leechenghsiu.dev/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('登录失败');
      }

      const data = await response.json();
      // 处理登录成功后的逻辑
      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">登入</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-white text-gray-700 rounded px-4 py-2 border border-gray-300 hover:bg-gray-50 transition"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          {loading ? "登入中..." : "使用 Google 帳號登入"}
        </button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </div>
    </div>
  );
} 