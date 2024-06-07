import { useEffect, useRef } from "react";
import "../../src/css/commonpage.css";
import Button from "../components/Button";

const Complete = () => {
  const listWhere = useRef(null);
  useEffect(() => {
    const list = [
      {
        id: 1,
        title: "기획",
        subtitle: "a 헬스케어의 마일스톤을 찍다",
        date: "2024.06.04",
        calName: "내 캘린더",
      },
      {
        id: 2,
        title: "Figma 작업",
        subtitle: "b 헬스케어의마일스톤을 찍다",
        date: "2024.06.05",
        calName: "A 캘린더",
      },
      {
        id: 3,
        title: "퍼블리싱",
        subtitle: "c 헬스케어의마일스톤을 찍다",
        date: "2024.06.06",
        calName: "B 캘린더",
      },
      {
        id: 4,
        title: "기능구현",
        subtitle: "d 헬스케어의마일스톤을 찍다",
        date: "2024.06.07",
        calName: "C 캘린더",
      },
    ];

    let listTags = "";

    list.forEach(item => {
      const tag = `<ul class="common-list">
          <li class="checkbox-area">
            <input type="checkbox" class="com-checkbox" value=${item.id} />
          </li>
          <li class="title-area">
            <span class="com-title">${item.title}</span>
          </li>
          <li class="text-area">
            <span class="com-text">
              ${item.subtitle}
            </span>
          </li>
          <li class="date-area">
            <span class="com-date">${item.date}</span>
          </li>
          <li class="calender-area">
            <span class="com-calender">${item.calName}</span>
          </li>
        </ul>`;
      listTags += tag;
    });

    listWhere.current.innerHTML = listTags;
  }, []);

  useEffect(() => {}, []);

  const deleteBt = () => {
    const selectedBoxes = document.querySelectorAll(
      'input[type="checkbox"]:checked',
    );
    console.log(selectedBoxes);
    if (selectedBoxes.length > 0) {
      selectedBoxes.forEach(item => {
        const listItem = item.closest(".common-list");
        listItem.remove();
      });
      alert("선택한 항목을 휴지통으로 이동합니다.");
    } else {
      alert("체크박스를 선택해주세요.");
    }
  };
  return (
    <div className="common">
      <div className="common-inner">
        <h1>완료된 일정</h1>
        <div className="common-button">
          <Button label="수정"></Button>
          <Button label="삭제" onClick={deleteBt}></Button>
        </div>
        <div className="common-menu">
          <div className="cmt">
            <span>일정 명</span>
          </div>
          <div className="cmtxt">
            <span> 일정 내용 </span>
          </div>
          <div className="cmdate">
            <span>날짜</span>
          </div>
          <div className="cmcalender">
            <span>캘린더 명</span>
          </div>
        </div>

        <div className="common-list-wrap" ref={listWhere}></div>
      </div>
    </div>
  );
};

export default Complete;
