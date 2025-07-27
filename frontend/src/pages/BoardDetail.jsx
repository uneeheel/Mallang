// src/pages/BoardDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';

function BoardDetail({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p>존재하지 않는 글입니다.</p>;
  }

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const updated = posts.filter((p) => p.id !== Number(id));
      setPosts(updated);
      alert('삭제되었습니다.');
      navigate('/');
    }
  };

  return (
  <div style={{ padding: '20px' }}>
    <h2>📄 글 상세 보기</h2>
    <p><strong>제목:</strong> {post.title}</p>
    <p><strong>작성자:</strong> {post.writer}</p>
    <p><strong>내용:</strong> {post.content}</p>

    <button onClick={() => navigate('/')}>← 목록으로</button>

    {/* ✏️ 수정 버튼 추가 */}
    <button
      onClick={() => navigate(`/edit/${post.id}`)}
      style={{ marginLeft: '10px' }}
    >
      ✏️ 수정
    </button>

    <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
      🗑️ 삭제
    </button>
  </div>
);

}

export default BoardDetail;
