// src/pages/BoardEdit.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BoardEdit({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [writer, setWriter] = useState(post?.writer || '');

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPost = { ...post, title, content, writer };
    const updatedPosts = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
    setPosts(updatedPosts);
    alert('글이 수정되었습니다!');
    navigate(`/post/${post.id}`);
  };

  if (!post) {
    return <div style={{ padding: '20px' }}>수정할 글을 찾을 수 없습니다.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛠️ 글 수정</h2>
      <form onSubmit={handleUpdate}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        <br />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required rows={5} cols={40} />
        <br />
        <input value={writer} onChange={(e) => setWriter(e.target.value)} required />
        <br />
        <button type="submit">수정 완료</button>
      </form>
    </div>
  );
}

export default BoardEdit;
