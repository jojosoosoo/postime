import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/user/LoginPage";
import SearchIdPage from "./pages/user/SearchIdPage";
import SearchPwPage from "./pages/user/SearchPwPage";
import UserNewPwPage from "./pages/user/UserNewPwPage";
import SignUpPage from "./pages/user/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import Index from "./pages/Index";

function App() {
  const userId = sessionStorage.getItem("userId");
  const userEmail = sessionStorage.getItem("userEmail");
  const userName = sessionStorage.getItem("userName");
  const [userInfo, setUserInfo] = useState({
    userId: userId,
    userEmail: userEmail,
    userName: userName,
  });
  // const [userInfo, setUserInfo] = useState(null); // {user, ...}

  // const [isLogin, setIsLogin] = useState(true); /// 로그인이 되어 있는 경우
  const [isLogin, setIsLogin] = useState(false); //  로그인이 되어 있지 않은 경우

  // const [signUserId, setSignUserId] = useState(null);
  useEffect(() => {
    console.log("나의 정보: ", userInfo);
  }, [userInfo]);
  // 로그인 했을 때 로그인 상태 유지하기
  // sessionStorage.setItem(
  //   "userInfo",
  //   JSON.stringify({
  //     userId: "myUserId",
  //     userName: "myUserName",
  //     userEmail: "myUserEmail",
  //   }),
  // );
  useEffect(() => {
    const userInfoFromStorage = sessionStorage.getItem("userId");
    if (userInfoFromStorage) {
      setUserInfo({
        userId: userInfoFromStorage.userId,
        userEmail: userInfoFromStorage.userEmail,
        userName: userInfoFromStorage.userName,
      });
      // setIsLogin(false); // 로그인 상태 설정
      setIsLogin(true); // 로그인 상태 설정
    }
  }, []);

  return (
    <BrowserRouter>
      {isLogin ? ( // 로그인된 상태인 경우
        <Index isLogin={isLogin} userInfo={userInfo} />
      ) : (
        // 로그인되지 않은 상태인 경우
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage setIsLogin={setIsLogin} setUserInfo={setUserInfo} />
            }
          />
          <Route path="/searchid" element={<SearchIdPage />} />
          <Route
            path="/searchpw"
            element={<SearchPwPage userInfo={userInfo} />}
          />
          <Route
            path="/usernewpw"
            element={<UserNewPwPage userInfo={userInfo} />}
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      )}
      {/* 잘못된 경로 */}
      {/* <Routes> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      {/* </Routes> */}
    </BrowserRouter>
  );
}
export default App;
