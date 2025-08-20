let selectedQuesCol1 = document.querySelectorAll(".section8_row2_col1")[0]
  .firstElementChild.firstElementChild;

let selectedQuesCol2 = document.querySelectorAll(".section8_row2_col2")[0]
  .firstElementChild.firstElementChild;

click_question(selectedQuesCol1);
click_question(selectedQuesCol2);

function click_question(itemQues) {
  if (itemQues) itemQues.classList.add("background_gradient");

  let itemQuesIcon = itemQues.firstElementChild;
  itemQuesIcon.style.color = "var(--color_main_title)";
  itemQuesIcon.innerHTML = "-";

  let itemAns = itemQues.nextElementSibling;
  itemAns.classList.add("selected");
  //Gán chiều cao bằng với content thay vì dùng trasition max-height bị giật
  itemAns.style.height = itemAns.scrollHeight + "px";
}

function unSelected_question(itemQues) {
  itemQues.classList.remove("background_gradient");

  let itemQuesIcon = itemQues.firstElementChild;
  itemQuesIcon.style.color = "var(--icon_color)";
  itemQuesIcon.innerHTML = "+";

  let itemAns = itemQues.nextElementSibling;
  itemAns.classList.remove("selected");
  itemAns.style.height = "0px";
}

document
  .querySelectorAll(".section8_row2_col_item_question")
  .forEach((itemQues) => {
    itemQues.addEventListener("click", () => {
      let isCol1 = itemQues.parentElement.parentElement.classList.contains(
        "section8_row2_col1"
      )
        ? true
        : false;

      Array.from(
        document.querySelectorAll(
          isCol1 ? ".section8_row2_col1" : ".section8_row2_col2"
        )[0].children
      ).forEach((item) => unSelected_question(item.firstElementChild));

      let seletedQuesCol = isCol1 ? selectedQuesCol1 : selectedQuesCol2;

      let section8_row2_col1 = itemQues.parentElement.parentElement;

      if (seletedQuesCol != itemQues) {
        if (isCol1) selectedQuesCol1 = itemQues;
        else selectedQuesCol2 = itemQues;

        section8_row2_col1.style.flex = "2";

        click_question(itemQues);
      } else if (seletedQuesCol == itemQues) {
        if (isCol1) selectedQuesCol1 = null;
        else selectedQuesCol2 = null;

        section8_row2_col1.style.flex = "1";

        unSelected_question(itemQues);
      }
    });
  });
