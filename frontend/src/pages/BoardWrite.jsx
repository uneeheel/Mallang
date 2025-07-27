// src/pages/BoardWrite.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BoardWrite({ posts, setPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      writer,
    };
    setPosts([newPost, ...posts]);
    alert('글이 등록되었습니다!');
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>✍️ 글쓰기</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <br />
        <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} required rows={5} cols={40} />
        <br />
        <input placeholder="작성자" value={writer} onChange={(e) => setWriter(e.target.value)} required />
        <br />
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
}

export default BoardWrite;
