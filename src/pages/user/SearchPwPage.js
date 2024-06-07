import { useEffect } from "react";
import "../../css/userstyle.css";

const SearchPwPage = () => {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="user-wrap">
      <div className="user-title-line">
        <h1>비밀번호 찾기</h1>
      </div>

      <div className="search-input">
        <div className="searchpw-input-id">
          <label htmlFor="id">아이디</label>
          <input type="text" className="id" placeholder="아이디 입력" />
        </div>
        <div className="searchpw-input-email">
          <label htmlFor="email" className="email-label">
            이메일
          </label>
          <input type="email" className="email" placeholder="이메일 입력" />
          <br />
          <button type="submit" className="send-code">
            <span>코드발송</span>
          </button>
        </div>
        <div className="searchpw-input-code">
          <label htmlFor="code">코드 입력</label>
          <input
            type="text"
            className="code"
            placeholder="이메일로 전송받은 코드 8자리 입력"
          />
        </div>
      </div>
      <button type="submit" className="user-button">
        <span>비밀번호 찾기</span>
      </button>
    </div>
  );
};

export default SearchPwPage;