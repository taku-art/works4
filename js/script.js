$(function () {});

$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-fv__title").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});

// スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// タブ

$(function () {
  const tabButton = $(".js-tab-button"),
    tabContent = $(".js-tab-content");
  tabButton.on("click", function () {
    let index = tabButton.index(this);

    tabButton.removeClass("is-active");
    $(this).addClass("is-active");
    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
});

// ページ内スクロール
$(function () {
  // メインビューの高さ取得（100vh = ウィンドウの高さ）
  const mainViewHeight = $(window).height();
  const header = $(".js-header");

  // スクロールイベントの処理
  $(window).on("scroll", function () {
    const scrollPosition = $(this).scrollTop();

    // スクロール位置がメインビューの高さを超えたら .scrolled クラスを追加
    if (scrollPosition > mainViewHeight) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});

//モーダル

$(function () {
  const open = $(".js-modal-open"),
    close = $(".js-modal__close"),
    modal = $(".js-modal");

  //開くボタンをクリックしたらモーダルを表示する
  open.on("click", function () {
    event.preventDefault(); // デフォルトの動作を無効化
    event.stopPropagation(); // イベントの伝播を止める
    modal.addClass("is-open");
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on("click", function () {
    event.stopPropagation(); // イベントの伝播を止める
    modal.removeClass("is-open");
  });

  //モーダルの背景をクリックしたらモーダルを閉じる
  modal.on("click", function () {
    modal.removeClass("is-open");
  });

  //モーダルのコンテンツ部分をクリックしてもモーダルが閉じないようにする
  $(".js-modal__content").on("click", function (event) {
    event.stopPropagation();
  });
});
