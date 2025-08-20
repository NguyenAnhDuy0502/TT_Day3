function observeWithDelay(className, offset = 0, baseDelay = 300) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = offset + index * baseDelay;
        setTimeout(() => {
          entry.target.classList.add("show");
        }, delay);
      }
    });
  });

  document.querySelectorAll(`.${className}`).forEach((el) => {
    observer.observe(el);
  });
}

// -------------------------------------------------------------------------------------------------------------
observeWithDelay("sub_title");
observeWithDelay("section1_col1_main_title");
observeWithDelay("section2_row1_col2", 300);
observeWithDelay("section9_row2 ", 600);
// -------------------------------------------------------------------------------------------------------------
observeWithDelay("section8_row1");
observeWithDelay("section8_row2_col", 300);
// -------------------------------------------------------------------------------------------------------------
observeWithDelay("section7_col2_item", 300, 400);
// -------------------------------------------------------------------------------------------------------------
let is_counter1_show = false;
let is_counter2_show = false;

function counterObserveWithDelay(
  className,
  value,
  is_counter_show,
  time = 3000
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting && !is_counter_show) {
        is_counter_show = true;
        animateCounters(className, value, time);
      }
    });
  });

  document.querySelectorAll(`.${className}`).forEach((el) => {
    observer.observe(el);
  });
}

counterObserveWithDelay(
  "section6_row2_item_text_value_HC",
  65,
  is_counter2_show
);
counterObserveWithDelay(
  "section6_row2_item_text_value_integer_PD",
  2,
  is_counter2_show,
  1000
);
counterObserveWithDelay(
  "section6_row2_item_text_value_decimal_PD",
  65,
  is_counter2_show
);
counterObserveWithDelay(
  "section6_row2_item_text_value_integer_CR",
  4,
  is_counter2_show,
  2000
);
counterObserveWithDelay(
  "section6_row2_item_text_value_decimal_CR",
  9,
  is_counter2_show
);
counterObserveWithDelay(
  "section6_row2_item_text_value_YE",
  69,
  is_counter2_show
);

observeWithDelay("section6_row2_item", 300);
// -------------------------------------------------------------------------------------------------------------
observeWithDelay("section5_row1_main_title");
observeWithDelay("section5_row2_item", 300);
observeWithDelay("section5_row2_col2", 1200);
// -------------------------------------------------------------------------------------------------------------
observeWithDelay("section3_row2_col1", 600);
observeWithDelay("section3_row2_col2", 900);
// -------------------------------------------------------------------------------------------------------------
observeWithDelay("section2_row2_item ", 300);
// -------------------------------------------------------------------------------------------------------------
observeWithDelay("section1_col1_content", 300);
observeWithDelay("section1_col1_button", 600);
observeWithDelay("section1_col1_play_btt", 900);
observeWithDelay("section1_col1_counter", 1500);

counterObserveWithDelay("section1_col1_counter1_value", 239, is_counter1_show);
counterObserveWithDelay("section1_col1_counter2_value ", 65, is_counter1_show);
counterObserveWithDelay(
  "section1_col1_counter3_value_value ",
  12,
  is_counter1_show
);
