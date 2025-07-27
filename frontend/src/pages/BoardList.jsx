// src/pages/BoardList.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

function BoardList({ posts }) {
  const [keyword, setKeyword] = useState(''); // 검색어 상태

  // 검색어가 포함된 글만 필터링
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(keyword.toLowerCase()) ||
    post.writer.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>🐣 말랑 게시판</h1>

      {/* 글쓰기 버튼 */}
      <Link to="/write">
        <button style={{ marginBottom: '20px' }}>✍️ 글쓰기</button>
      </Link>

      {/* 검색창 */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="제목이나 작성자 검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {/* 글 목록 출력 */}
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              {post.title} - {post.writer}
            </Link>
          </li>
        ))}
        {filteredPosts.length === 0 && <p>검색 결과가 없습니다.</p>}
      </ul>
    </div>
  );
}

export default BoardList;
