import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
        🔮 AI 타로 리딩 시뮬레이터
      </h1>

      <div className="space-y-4 w-full max-w-md">
        <Link
          to="/tarot"
          className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md text-center transition"
        >
          🃏 타로 리딩 시작하기
        </Link>
        <Link
          to="/plan"
          className="block w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl shadow-md text-center transition"
        >
          📝 오늘의 계획 입력
        </Link>
        <Link
          to="/result"
          className="block w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl shadow-md text-center transition"
        >
          📊 결과 비교 및 분석
        </Link>
      </div>

      <footer className="mt-10 text-gray-500 text-sm text-center">
        운세와 현실, 무엇이 더 맞을까?
      </footer>
    </div>
  );
}

export default Home;