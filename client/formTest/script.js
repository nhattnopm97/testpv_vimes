const unit = ["Viên", "Vỉ", "Lọ", "Chai", "Thùng", "Xe"];
const medicineReceipt = [
  {
    name: "",
    code: "",
    unit: ["Viên", "Vỉ", "Lọ", "Chai", "Thùng", "Xe"],
    document_quantity: 0,
    reality_quantity: 0,
    money: 0,
  },
];
const loadData = () => {
  let table = document.getElementById("table");
  let result = medicineReceipt
    .map(
      (medicine, index) => `
        <tr>
        <td style="text-align: center">${index + 1}</td>
        <td><textarea name="" id="name_${index}" cols="30" rows="5">${
        medicine.name
      }</textarea></td>
        <td><textarea name="" id="code_${index}" cols="30" rows="5">${
        medicine.code
      }</textarea></td>
        <td>
        <select name="" id="unit_${index}">
        <option value=""></option>
        ${medicine.unit.map(
          (unit) => `
            <option value="${unit}">${unit}</option>
        `
        )}
        </select>
        </td>
        <td><textarea name="" id="document_quantity_${index}" cols="30" rows="5">${
        medicine.document_quantity
      }</textarea></td>
        <td><textarea name="" id="reality_quantity_${index}" cols="30" rows="5">${
        medicine.reality_quantity
      }</textarea></td>
        <td><textarea name="" id="money_${index}" cols="30" rows="5">${
        medicine.money
      }</textarea></td>
        <td style="text-alight: center"></td>
        <td>
        <button onclick="add()" class="add">Thêm</button
        ><button onclick="deleteRow(${index})" class="delete">Xóa</button>
        </td>
        </tr>
    `
    )
    .join("\n");

  table.innerHTML = `
  <table id="table" border="1">
  <tr>
    <th rowspan="2">Số thứ tự</th>
    <th rowspan="2">
      Tên nhãn hiệu, quy cách, phẩn chất vật tư, dụng cụ sản phẩm, hàng
      hóa
    </th>
    <th rowspan="2">Mã số</th>
    <th rowspan="2">Đơn vị tính</th>
    <th colspan="2">Số lượng</th>
    <th rowspan="2">Đơn giá</th>
    <th rowspan="2">Thành tiền</th>
    <th rowspan="2">Chức năng</th>
  </tr>
  <tr>
    <th>Theo chứng từ</th>
    <th>Thực nhập</th>
  </tr>
  <tr>
    <th>A</th>
    <th>B</th>
    <th>C</th>
    <th>D</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
  </tr>
    ${result}
  <tr>
    <td>Cộng(Tạm tính)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
  `;
};
loadData();

const options = (method, data) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
function submitForm() {
  let url = "http://localhost:3456";
  let address = document.getElementById("address").value;
  let deliver = document.getElementById("deliver").value;
  let delivery_time = document.getElementById("delivery_time").value;
  let warehouse_name = document.getElementById("warehouse_name").value;

  const medicine = [
    {
      name: "panadol",
      code: "pnd",
      unit: "Viên",
      document_quantity: 100,
      reality_quantity: 100,
      money: 30000,
    },
  ];
  for (let i = 0; i < medicineReceipt.length; i++) {
    let name = document.getElementById(`name_${i}`).value;
    let code = document.getElementById(`code_${i}`).value;
    let unit = document.getElementById(`unit_${i}`).value;
    let document_quantity = document.getElementById(
      `document_quantity_${i}`
    ).value;
    let reality_quantity = document.getElementById(
      `reality_quantity_${i}`
    ).value;
    let money = document.getElementById(`money_${i}`).value;
    let result = {
      name,
      code,
      unit,
      document_quantity,
      reality_quantity,
      money,
    };
    medicine[i] = result;
  }
  const data = {
    address,
    deliver,
    delivery_time,
    warehouse_name,
    medicine,
  };
  console.log("data", data);
  url += "/goodReceiptNote";
  fetch(url, options("POST", data))
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}

const add = () => {
  for (let i = 0; i < medicineReceipt.length; i++) {
    let name = document.getElementById(`name_${i}`).value;
    let code = document.getElementById(`code_${i}`).value;
    // let unit = document.getElementById(`unit_${i}`).value;
    let document_quantity = document.getElementById(
      `document_quantity_${i}`
    ).value;
    let reality_quantity = document.getElementById(
      `reality_quantity_${i}`
    ).value;
    let money = document.getElementById(`money_${i}`).value;
    let result = {
      name,
      code,
      unit: ["Viên", "Vỉ", "Lọ", "Chai", "Thùng", "Xe"],
      document_quantity,
      reality_quantity,
      money,
    };
    medicineReceipt[i] = result;
  }
  console.log("medicineReceipt", medicineReceipt);
  medicineReceipt.push({
    name: "",
    code: "",
    unit: ["Viên", "Vỉ", "Lọ", "Chai", "Thùng", "Xe"],
    document_quantity: 0,
    reality_quantity: 0,
    money: 0,
  });
  loadData();
};

const deleteRow = (index) => {
  if (index === 0 && medicineReceipt.length < 2) {
    medicineReceipt[0] = {
      name: "",
      code: "",
      unit: ["Viên", "Vỉ", "Lọ", "Chai", "Thùng", "Xe"],
      chungTuQuantity: 0,
      thucNhapQuantity: 0,
      money: 0,
    };
    loadData();
    return;
  }
  medicineReceipt.splice(index, 1);
  loadData();
};
