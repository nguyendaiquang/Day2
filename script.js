// mo ta
var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 200;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function(){
    var textLength = myText.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength >= limit){
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else{
        myText.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }
});

//min-max
function checkMinMax() {
  var minInput = document.getElementById("minInput");
  var maxInput = document.getElementById("maxInput");
  var error = document.getElementById("error");

  if (parseInt(minInput.value) >= parseInt(maxInput.value)) {
      error.innerHTML = "Giá trị Min không được lớn hơn hoặc bằng giá trị tối đa";
      maxInput.setCustomValidity("Giá trị Min không được lớn hơn giá trị tối đa");
  } else if (parseInt(minInput.value) < 0 || parseInt(maxInput.value) < 0) {
      error.innerHTML = "Giá trị không được âm";
      maxInput.setCustomValidity("Giá trị không được âm");
  } else {
      error.innerHTML = "";
      maxInput.setCustomValidity("");
  }
}


//link meet  
const googleLinkInput = document.getElementById("google-link");
const googleLinkError = document.getElementById("google-link-error");

googleLinkInput.addEventListener("input", function(event) {
  // Lấy giá trị đầu vào và kiểm tra nó có đúng định dạng của link Google hay không
  const input = event.target.value;
  const pattern = /^https:\/\/meet.google.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/;
  const isValid = pattern.test(input);
  // Hiển thị thông báo lỗi nếu đầu vào không hợp lệ
  if (!isValid) {
    googleLinkError.textContent = "Vui lòng nhập một liên kết hợp lệ của Google Meet(https://meet.google.com/..)";
    googleLinkInput.classList.add("invalid");
    googleLinkError.style.color = "red";
  } else {
    googleLinkError.textContent = "";
    googleLinkInput.classList.remove("invalid");
  }
});

//up anh
let uploadButton = document.getElementById("exampleFormControlFile1");
let chosenImage = document.getElementById("chosen-image");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
}

// let uploadButton = document.getElementById("exampleFormControlFile1");
// let chosenImage = document.getElementById("chosen-image");
// const ratio = 1.5; // Tỉ lệ cứng tỉ lệ của ảnh (giả sử là 1.5)

// uploadButton.onchange = () => {
//     let reader = new FileReader();
//     reader.readAsDataURL(uploadButton.files[0]);
//     reader.onload = () => {
//         let image = new Image();
//         image.src = reader.result;
//         image.onload = () => {
//             const imageRatio = image.width / image.height; // Tính toán tỉ lệ chiều rộng và chiều cao của ảnh
//             if (imageRatio === ratio) { // Nếu tỉ lệ của ảnh bằng tỉ lệ cứng tỉ lệ
//                 chosenImage.setAttribute("src", reader.result); // Cho phép ảnh được chọn
//             } else {
//                 alert("Vui lòng chọn ảnh có tỉ lệ 1.5"); // Thông báo cho người dùng biết rằng ảnh không hợp lệ
//             }
//         }
//     }
// }


//xoa anh
var inputFile = document.getElementById("exampleFormControlFile1");
removeFun=()=>{
  chosenImage.src="/images/upload-img.jpg";
  inputFile.value = "";
}

//gia tien
$("input[data-type='currency']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  blur: function() { 
    formatCurrency($(this), "blur");
  }
});

function formatNumber(n) {
return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatCurrency(input, blur) {
  var input_val = input.val();
  
  if (input_val === "") { return; }
  
  var original_len = input_val.length;

  var caret_pos = input.prop("selectionStart");
    
  if (input_val.indexOf(".") >= 0) {

    var decimal_pos = input_val.indexOf(".");

    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    left_side = formatNumber(left_side);

    right_side = formatNumber(right_side);
  
    if (blur === "blur") {
      right_side += "00";
    }
    
    right_side = right_side.substring(0, 2);

    // input_val = "$" + left_side + "." + right_side;

  } 
  else {
    input_val = formatNumber(input_val);
    input_val = input_val + " VND";
    
    // if (blur === "blur") {
    //   input_val += "";
    // }
  }
  input.val(input_val);
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}
$("input[data-type='currency']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  blur: function() { 
    formatCurrency($(this), "blur");
  }
});

function formatNumber(n) {
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(input, blur) {
  var input_val = input.val();
  
  if (input_val === "") { return; }
  
  var original_len = input_val.length;

  var caret_pos = input.prop("selectionStart");
    
  if (input_val.indexOf("VNĐ") >= 0) {
    var vnd_pos = input_val.indexOf("VNĐ");

    // Xóa tất cả các ký tự sau chữ "VNĐ"
    input_val = input_val.substring(0, vnd_pos + 2);
  }

  input_val = formatNumber(input_val);
  input_val = input_val + " VNĐ";
  
  if (blur === "blur") {
    input_val = input_val + "";
  }
  
  input.val(input_val);
  
  // Đặt lại vị trí con trỏ nhập liệu sau khi xử lý
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

// xoay lần icon 1 
const myElementtt = document.getElementById('icons');
let counterrr = 0;

myElementtt.addEventListener('click', () => {
  if (counterrr === 0) {
    myElementtt.style.transform = 'rotate(180deg)';
    myElementtt.style.color = '#358cf0';
    counterrr = 1;
  } else {
    myElementtt.style.transform = 'rotate(0deg)';
    myElementtt.style.color = 'black';
    counterrr = 0;
  }
});
// xoay lần icon 2
const myElementt = document.getElementById('icons1');
let counterr = 0;
myElementt.addEventListener('click', () => {
  if (counterr === 0) {
    myElementt.style.transform = 'rotate(180deg)';
    myElementt.style.color = '#358cf0';
    counterr = 1;
  } else {
    myElementt.style.transform = 'rotate(0deg)';
    myElementt.style.color = 'black';
    counterr= 0;
  }
});
// xoay lần icon 3
const myElement = document.getElementById('icons2');
let counter = 0;
myElement.addEventListener('click', () => {
  if (counter === 0) {
    myElement.style.transform = 'rotate(180deg)';
    myElement.style.color = '#358cf0';
    counter = 1;
  } else {
    myElement.style.transform = 'rotate(0deg)';
    myElement.style.color = 'black';
    counter= 0;
  }
});



// --- giơ

// const startTimeInput = document.getElementById("start-time");
// const endTimeInput = document.getElementById("end-time");

// startTimeInput.addEventListener("input", () => {
//   const startTime = new Date(`1970-01-01T${startTimeInput.value}:00Z`);
//   const endTime = new Date(`1970-01-01T${endTimeInput.value}:00Z`);
//   const twoHoursInMs = 2 * 60 * 60 * 1000;
  
//   if (endTime - startTime < twoHoursInMs) {
//     endTimeInput.value = new Date(startTime.getTime() + twoHoursInMs)
//       .toISOString()
//       .substr(11, 5);
//   }
// });

// endTimeInput.addEventListener("input", () => {
//   const startTime = new Date(`1970-01-01T${startTimeInput.value}:00Z`);
//   const endTime = new Date(`1970-01-01T${endTimeInput.value}:00Z`);
//   const twoHoursInMs = 2 * 60 * 60 * 1000;
  
//   if (endTime - startTime < twoHoursInMs) {
//     startTimeInput.value = new Date(endTime.getTime() - twoHoursInMs)
//       .toISOString()
//       .substr(11, 5);
//   }
// });

// const startTimeInput = document.getElementById("start-time");
// const endTimeInput = document.getElementById("end-time");

// startTimeInput.addEventListener("input", () => {
//   const startTime = new Date(`1970-01-01T${startTimeInput.value}:00Z`);
//   const endTime = new Date(`1970-01-01T${endTimeInput.value}:00Z`);
//   const minStartTime = new Date(`1970-01-01T07:00:00Z`);
//   const maxEndTime = new Date(`1970-01-01T19:00:00Z`);
  
//   if (startTime < minStartTime) {
//     startTimeInput.value = "07:00";
//   }
  
//   if (endTime > maxEndTime) {
//     endTimeInput.value = "19:00";
//   }
  
//   if (endTime - startTime < 0) {
//     endTimeInput.value = startTimeInput.value;
//   }
// });

// endTimeInput.addEventListener("input", () => {
//   const startTime = new Date(`1970-01-01T${startTimeInput.value}:00Z`);
//   const endTime = new Date(`1970-01-01T${endTimeInput.value}:00Z`);
//   const minStartTime = new Date(`1970-01-01T07:00:00Z`);
//   const maxEndTime = new Date(`1970-01-01T19:00:00Z`);
  
//   if (endTime > maxEndTime) {
//     endTimeInput.value = "19:00";
//   }
  
//   if (startTime < minStartTime) {
//     startTimeInput.value = "07:00";
//   }
  
//   if (endTime - startTime < 0) {
//     startTimeInput.value = endTimeInput.value;
//   }
// });

// startTimeInput.addEventListener("input", () => {
//   const startTime = new Date(`1970-01-01T${startTimeInput.value}:00Z`);
//   const endTime = new Date(`1970-01-01T${endTimeInput.value}:00Z`);
//   const minStartTime = new Date(`1970-01-01T07:00:00Z`);
//   const maxEndTime = new Date(`1970-01-01T19:00:00Z`);
  
//   if (startTime < minStartTime) {
//     startTimeInput.value = "07:00";
//     startTimeInput.setCustomValidity("Thời gian bắt đầu phải từ 7 giờ sáng đến 7 giờ tối");
//   } else {
//     startTimeInput.setCustomValidity("");
//   }
  
//   if (endTime > maxEndTime) {
//     endTimeInput.value = "19:00";
//     endTimeInput.setCustomValidity("Thời gian kết thúc phải từ 7 giờ sáng đến 7 giờ tối");
//   } else {
//     endTimeInput.setCustomValidity("");
//   }
  
//   if (endTime - startTime < 0) {
//     endTimeInput.value = startTimeInput.value;
//     endTimeInput.setCustomValidity("Thời gian kết thúc phải sau thời gian bắt đầu");
//   } else {
//     endTimeInput.setCustomValidity("");
//   }
// });

// endTimeInput.addEventListener("input", () => {
//   const startTime = new Date(`1970-01-01T${startTimeInput.value}:00Z`);
//   const endTime = new Date(`1970-01-01T${endTimeInput.value}:00Z`);
//   const minStartTime = new Date(`1970-01-01T07:00:00Z`);
//   const maxEndTime = new Date(`1970-01-01T19:00:00Z`);
  
//   if (endTime > maxEndTime) {
//     endTimeInput.value = "19:00";
//     endTimeInput.setCustomValidity("Thời gian kết thúc phải từ 7 giờ sáng đến 7 giờ tối");
//   } else {
//     endTimeInput.setCustomValidity("");
//   }
  
//   if (startTime < minStartTime) {
//     startTimeInput.value = "07:00";
//     startTimeInput.setCustomValidity("Thời gian bắt đầu phải từ 7 giờ sáng đến 7 giờ tối");
//   } else {
//     startTimeInput.setCustomValidity("");
//   }
  
//   if (endTime - startTime < 0) {
//     startTimeInput.value = endTimeInput.value;
//     startTimeInput.setCustomValidity("Thời gian bắt đầu phải trước thời gian kết thúc");
//   } else {
//     startTimeInput.setCustomValidity("");
//   }
// });

// Sử dụng  để viết
var inputElement = document.getElementById("course-name"); // Lấy thẻ input theo id
var h3Element = document.getElementById("course-name-span"); // Lấy thẻ h3 theo id
inputElement.addEventListener("input", function() { // Xử lý sự kiện "input" trên thẻ input
  h3Element.innerText = inputElement.value; // Gán giá trị của input vào nội dung của thẻ h3
});

//
// function checkEndTime() {
//   var startTime = document.getElementById("start-time").value;
//   var endTime = document.getElementById("end-time").value;

//   // Convert start and end times to minutes
//   var startMinutes = convertToMinutes(startTime);
//   var endMinutes = convertToMinutes(endTime);

//   // Check if end time is at least 2 hours after start time
//   if (endMinutes - startMinutes < 120) {
//     document.getElementById("end-time-error").innerHTML = "Giờ kết thúc Phải cách 2 tiếng";
//     document.getElementById("end-time").value = "";
//   } else {
//     document.getElementById("end-time-error").innerHTML = "";
//   }
// }

// function convertToMinutes(time) {
//   var hoursMinutes = time.split(":");
//   var hours = parseInt(hoursMinutes[0]);
//   var minutes = parseInt(hoursMinutes[1]);
//   return hours * 60 + minutes;
// }
// --------------
// var timePicker = document.getElementById("time-start");

// var errorMessage = document.getElementById("error-messages");

// function validateTimeInput() {
//   var timeValue = timePicker.value;  
//   var timeObject = new Date("2023-04-25T" + timeValue);
  
//   if (timeObject.getHours() < 7 || timeObject.getHours() >= 19) {
//     errorMessage.innerHTML = "Khung giờ cho phép là từ 7h sáng đến 7h tối.";
//     timePicker.value = "";
//   } else {
//     errorMessage.innerHTML = "";
//   }
// }
// timePicker.onchange = validateTimeInput;
// //

var timePicker = document.getElementById("start-time");

var errorMessage = document.getElementById("error-messages");

function validateTimeInput() {
  var timeValue = timePicker.value;  
  var timeObject = new Date("2023-04-25T" + timeValue);
  
  if (timeObject.getHours() < 7 || timeObject.getHours() >= 19) {
    errorMessage.innerHTML = "Khung giờ cho phép là từ 7h sáng đến 7h tối.";
    timePicker.value = "";
  } else {
    errorMessage.innerHTML = "";
  }
}
timePicker.onchange = validateTimeInput;
//
//thoi gian 

var timePicker = document.getElementById("start-time");

var errorMessage = document.getElementById("error-messages");

function validateTimeInput() {
  var timeValue = timePicker.value;  
  var timeObject = new Date("2023-04-25T" + timeValue);
  
  if (timeObject.getHours() < 7 || timeObject.getHours() >= 19) {
    errorMessage.innerHTML = "Khung giờ cho phép là từ 7h sáng đến 7h tối.";
    timePicker.value = "";
  } else {
    errorMessage.innerHTML = "";
  }
}
timePicker.onchange = validateTimeInput;
//


 // lon hon 2 h
 var startTimeInput = document.getElementById("start-time");
  var endTimeInput = document.getElementById("end-time");
  var errorMessageDiv = document.getElementById("error-messages");

  function checkEndTime() {
    var startTime = new Date("2000-01-01T" + startTimeInput.value + ":00");
    var endTime = new Date("2000-01-01T" + endTimeInput.value + ":00");
    var timeDiff = endTime.getTime() - startTime.getTime();
    var diffHours = timeDiff / (1000 * 60 * 60);

    if (diffHours < 2) {
      errorMessageDiv.textContent = "Thời gian kết thúc phải lớn hơn thời gian bắt đầu ít nhất 2 giờ đồng hồ!";
    } else {
      errorMessageDiv.textContent = "";
    }
  }
  
  startTimeInput.addEventListener("input", checkEndTime);
  endTimeInput.addEventListener("input", checkEndTime);
  //date
  var dateInput = document.getElementById("date");

  function checkDateInput() {
    var inputDate = new Date(dateInput.value);
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() ); // cong 1 ngay

    if (inputDate <= todayDate) {
      alert("Ngày phải lớn hơn ngày hiện tại một ngày!");
      dateInput.value = todayDate.toISOString().slice(0, 10);
    }
  }

  dateInput.addEventListener("change", checkDateInput);

  //them sua xoa khoa hoc
const form = document.getElementById('my-form');
const table = document.getElementById('my-table').getElementsByTagName('tbody')[0];
let data = [];

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
  

  
//   const timeStart = document.getElementById('start-time').value;
//   const timeEnd = document.getElementById('end-time').value;
//   const date = document.getElementById('date').value;
//   const slot = document.getElementById('slot').value;

//   const weekdays = [];
//   const weekdayCheckboxes = document.querySelectorAll('#weekdays input[type="checkbox"]');
//   weekdayCheckboxes.forEach((checkbox) => {
//   if (checkbox.checked) {
//   weekdays.push(checkbox.value);
//   }
//   });
  
//   const rowData = {

//   date,
//   timeStart,
//   timeEnd,
//   slot,
//   weekdays,
//   };
  
//   data.push(rowData);
//   renderTable();
//   form.reset();
//   });
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const timeStart = document.getElementById('start-time').value;
  const timeEnd = document.getElementById('end-time').value;
  const date = document.getElementById('date').value;
  const slot = document.getElementById('slot').value;
  const weekdays = [];
  const weekdayCheckboxes = document.querySelectorAll('#weekdays input[type="checkbox"]');
  weekdayCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      weekdays.push(checkbox.value);
    }
  });

  const rowData = {
    date,
    timeStart,
    timeEnd,
    slot,
    weekdays,
  };

  // Check for duplicates
    const isDuplicate = data.some((row) => {
    const sameWeekday = row.weekdays.some((weekday) => rowData.weekdays.includes(weekday));
    const sameTime = rowData.timeStart === row.timeStart;   
    const sameDate = rowData.date === date;
    return sameWeekday && sameTime && sameDate;
  });

  if (isDuplicate) {
    alert('Không thể thêm dữ liệu vì bị trùng lặp với dữ liệu đã có!');
    return;
  }

  data.push(rowData);
  renderTable();
  form.reset();
});
  
  function renderTable() {
  table.innerHTML = '';
  data.forEach((rowData, index) => {
  const row = table.insertRow();

  row.insertCell().innerHTML = rowData.date;
  row.insertCell().innerHTML = rowData.timeStart;
  row.insertCell().innerHTML = rowData.timeEnd;
  row.insertCell().innerHTML = rowData.slot;
  row.insertCell().innerHTML = rowData.weekdays.join(', ');
  const editButton = document.createElement('button-edit');
  editButton.innerHTML = 'Sửa';
  editButton.addEventListener('click', () => {
  editRow(index);
});

const deleteButton = document.createElement('button-delete');
deleteButton.innerHTML = 'Xóa';
deleteButton.addEventListener('click', () => {
  deleteRow(index);
});

const actionCell = row.insertCell();
actionCell.appendChild(editButton);
actionCell.appendChild(deleteButton);
});
}

function editRow(index) {
const rowData = data[index];
document.getElementById('date').value = rowData.date;
document.getElementById('start-time').value = rowData.timeStart;
document.getElementById('end-time').value = rowData.timeEnd;
document.getElementById('slot').value = rowData.slot;


const weekdayCheckboxes = document.querySelectorAll('#weekdays input[type="checkbox"]');
weekdayCheckboxes.forEach((checkbox) => {
checkbox.checked = rowData.weekdays.includes(checkbox.value);
});

data.splice(index, 1);
renderTable();
}

function deleteRow(index) {
data.splice(index, 1);
renderTable();
}
// không cho nhập âm và không lớn hơn 15
var input_element = document.getElementById("quantity");
    var error_element = document.getElementById("error_message");
    input_element.addEventListener("input", function() {
        var value = parseInt(input_element.value);
        if (value < 0) {
            error_element.innerHTML = "Giá trị không hợp lệ. Vui lòng nhập lại.";
            input_element.value = "";
        } else if (value > 15) {
            error_element.innerHTML = "Slot không được vượt quá 15.";
            input_element.value = "";
        } else {
            error_element.innerHTML = "";
        }
    });
// gắn thẻ tags
const tagContainer = document.querySelector('.tag-container');
  const tagInput = document.querySelector('.tag-input');
  
  let tags = [];
  
  function createTag(label) {
    const div = document.createElement('div');
    div.setAttribute('class', 'tag');
    const span = document.createElement('span');
    span.innerHTML = label;
    const closeBtn = document.createElement('i');
    closeBtn.setAttribute('class', 'fa fa-times');
    closeBtn.setAttribute('data-item', label);
    div.appendChild(span);
    div.appendChild(closeBtn);
    return div;
  }
  
  function reset() {
    document.querySelectorAll('.tag').forEach(function(tag) {
      tag.parentElement.removeChild(tag);
    });
  }
  
  function addTags() {
    reset();
    tags.slice().reverse().forEach(function(tag) {
      const input = createTag(tag);
      tagContainer.prepend(input);
    });
  }
  
  tagInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      tags.push(tagInput.value);
      addTags();     
      tagInput.value = '';
    }
  });
  tagInput.addEventListener('blur', function() {
    if (tagInput.value.trim() !== '') {
      tags.push(tagInput.value.trim());
      addTags();     
      tagInput.value = '';
    }
  });
  // tagInput.addEventListener('keyup', function(e) {
  //   const tagInputValue = tagInput.value.trim();
  //   if (tagInputValue !== '' && !tags.includes(tagInputValue)) {
  //     tags.push(tagInputValue);
  //     addTags();     
  //     tagInput.value = '';
  //   }
  // });
  
  
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'I') {
      const tagLabel = e.target.getAttribute('data-item');
      const index = tags.indexOf(tagLabel);
      tags = [...tags.slice(0, index), ...tags.slice(index+1)];
      addTags();
    }
  });