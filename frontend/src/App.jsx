// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import BoardList from './pages/BoardList';
import BoardWrite from './pages/BoardWrite';
import BoardDetail from './pages/BoardDetail';
import BoardEdit from './pages/BoardEdit';

function App() {
  // 게시글 목록 상태 저장 (App이 최상위라서 여기에 둠)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '첫 번째 글',
      content: '첫 번째 글의 내용입니다.',
      writer: '예은',
    },
    {
      id: 2,
      title: '두 번째 글',
      content: '두 번째 글의 내용입니다.',
      writer: '말랑이',
    },
  ]);

  return (
    <Router>
      <Routes>
        {/* 글 목록 페이지 */}
        <Route path="/" element={<BoardList posts={posts} />} />

        {/* 글 작성 페이지 */}
        <Route path="/write" element={<BoardWrite posts={posts} setPosts={setPosts} />} />

        {/* 글 상세 보기 페이지 (삭제 기능 위해 setPosts 추가!) */}
        <Route path="/post/:id" element={<BoardDetail posts={posts} setPosts={setPosts} />} />

        {/* 글 수정 페이지 */}
        <Route path="/edit/:id" element={<BoardEdit posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;
