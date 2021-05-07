const data = [
  {
    "title": "Ý nghĩa đặc biệt của các loại hoa chúc mừng sinh nhật",
    "link": "hoasinhnhat.html",
  },
  {
    "title": "Nghệ thuật cắm 'hoa đạo' nhật bản theo mùa",
    "link": "hoadaonhat.html",
  },
  {
    "title": "Tìm hiểu nghệ thuật cắm hoa trên thế giới",
    "link": "camhoathegioi.html",
  },
  {
    "title": "Nghệ thuật cắm hoa châu Âu",
    "link": "camhoachauau.html",
  },
  {
    "title": "4 kiểu cắm hoa nghệ thuật nổi tiếng nhất trên thế giới",
    "link": "4kieucamhoa.html",
  },
  {
    "title": "3 phong cách cắm hoa cho bạn thoả sức sáng tạo",
    "link": "3phongcach.html",
  },
  {
    "title": "Các loại hoa lan đẹp – Hướng dẫn trồng và chăm sóc hoa lan đơn giản",
    "link": "kinhnghiem3.html",
  },
  {
    "title": "Kỹ thuật trồng và chăm sóc hoa mười giờ",
    "link": "kinhnghiem2.html",
  },
  {
    "title": "Cách trồng phong lan phi điệp tím ra hoa đẹp tại nhà",
    "link": "kinhnghiem1.html",
  },
  {
    "title": "Ikebana - nghệ thuật cắm hoa truyền thống của người Nhật",
    "link": "ikebana.html",
  },
  {
    "title": "Một số cách cắm hoa theo khung đơn giản",
    "link": "huongdan5.html",
  },
  {
    "title": "3 cách cắm hoa đẹp mang 'hơi thở'' của mùa thu",
    "link": "huongdan4.html",
  },
  {
    "title": "Cắm hoa tươi xanh mát mùa hè chỉ trong 3 nốt nhạc",
    "link": "huongdan3.html",
  },
  {
    "title": "Cách cắm hoa hồng hình trái tim cho ngày Valentine",
    "link": "huongdan2.html",
  },
  {
    "title": "Học cách cắm giỏ hoa đơn giản mang đi thi trong ngày 8/3",
    "link": "huongdan1.html",
  },
  {
    "title": "Những cây dây leo dễ trồng làm đẹp cho không gian nhà",
    "link": "kinhnghiem4.html",
  },
  {
    "title": "Trung Quốc và Nhật Bản: đại diện cho phong cách cắm hoa phương đông",
    "link": "tqnb.html",
  },
  {
    "title": "Ngắm hoa anh đào Nhật Bản 'tung cánh' trong bộ ảnh phơi sáng",
    "link": "tintuc5.html",
  },
  {
    "title": "Ngắm các vườn hoa 'tràn ngập tình yêu' vòng quanh thế giới",
    "link": "tintuc4.html",
  },
  {
    "title": "Đẹp nức lòng phượng đỏ, bằng lăng tím rợp trời tháng 5 Hà Nội",
    "link": "tintuc3.html",
  },
  {
    "title": "Tháng 6,đẹp tinh khôi sắc sen mùa hạ",
    "link": "tintuc2.html",
  },
  {
    "title": "Mưa rét, cửa hàng hoa tươi vắng khách trong ngày Quốc tế Phụ nữ",
    "link": "tintuc1.html",
  },
  {
    "title": "LỄ HỘI HOA RỰC RỠ TẠI CHIANG MAI, THÁI LAN",
    "link": "sukien4.html",
  },
  {
    "title": "Lễ diễu hành hoa hồng được mong chờ trong năm tại Mỹ",
    "link": "sukien3.html",
  },
  {
    "title": "LỄ HỘI HOA ĐÀ LẠT 2019 – 2020: ĐÀ LẠT VÀ HOA",
    "link": "sukien2.html",
  },
  {
    "title": "NONA Tổ Chức Cuộc Thi Vô Địch Cắm Hoa Việt Nam 2019",
    "link": "sukien1.html",
  },
  {
    "title": "Một nhánh myrtle là yếu tố không thể thiếu trong bó hoa cưới của các cô dâu Hoàng Gia Anh",
    "link": "myrtle.html",
  },
];

function search() {
  let divModalResult = document.createElement("div");
  divModalResult.setAttribute("class", "modal fade bd-example-modal-lg");
  divModalResult.setAttribute("id", "modalResult");
  divModalResult.setAttribute("tabindex", "-1");
  divModalResult.setAttribute("role", "dialog");
  divModalResult.setAttribute("aria-labelledby", "myLargeModalLabel");
  divModalResult.setAttribute("aria-hidden", "true");
  let topMenu = document.getElementById("top-menu");
  topMenu.appendChild(divModalResult);

  let divModalLarge = document.createElement("div");
  divModalLarge.setAttribute("class", "modal-dialog modal-lg");
  divModalResult.appendChild(divModalLarge);

  let divModalContent = document.createElement("div");
  divModalContent.setAttribute("class", "modal-content");
  divModalLarge.appendChild(divModalContent);

  let divModalHead = document.createElement("div");
  divModalHead.setAttribute("class", "modal-header");
  divModalContent.appendChild(divModalHead);

  let h4 = document.createElement("h4");
  h4.setAttribute("class", "modal-title");
  h4.setAttribute("id", "myModalLabel");
  divModalHead.appendChild(h4);

  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("class", "close");
  button.setAttribute("data-dismiss", "modal");
  button.setAttribute("aria-label", "close");
  divModalHead.appendChild(button);

  let span = document.createElement("span");
  span.setAttribute("aria-hidden", "true");
  let textSpan = document.createTextNode("X");
  span.appendChild(textSpan);
  button.appendChild(span);

  let divModalBody = document.createElement("div");
  divModalBody.setAttribute("class", "modal-body");
  divModalBody.setAttribute("id", "result");
  divModalContent.appendChild(divModalBody);

  let divModalFoot = document.createElement("div");
  divModalFoot.setAttribute("class", "modal-footer");
  divModalContent.appendChild(divModalFoot);

  let buttonFoot = document.createElement("button");
  buttonFoot.setAttribute("type", "button");
  buttonFoot.setAttribute("class", "btn btn-outline-primary");
  buttonFoot.setAttribute("data-dismiss", "modal");
  let textButton = document.createTextNode("Close");
  buttonFoot.appendChild(textButton);
  divModalFoot.appendChild(buttonFoot);

  $("#modalResult").modal();

  let keyword = document.getElementById("searchInput").value.toLowerCase();
  let result = document.getElementById("result");

  while (result.hasChildNodes()) {
    result.removeChild(result.firstChild);
  }
  let total = 0;
  data.forEach(object => {
    if (keyword != "" && object.title.toLowerCase().includes(keyword)) {
      total++;
      let row = document.createElement("div");
      result.appendChild(row);

      let a = document.createElement("a");
      a.setAttribute("href", object.link);
      a.setAttribute("target", "_blank");
      let text = document.createTextNode(object.title);
      a.appendChild(text);
      row.appendChild(a);

      let hr = document.createElement("hr");
      result.appendChild(hr);
    }
  })
  document.getElementById("myModalLabel").innerHTML = "Kết quả tìm kiếm: " + total;
  return false;
}
