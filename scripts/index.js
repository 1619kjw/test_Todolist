/* 1. 할일 입력후 추가버튼 클릭 시 할일 리스트에 추가되기 */
/* 2. 값을 입력하지 않고 추가버튼 클릭 시 경고창 띄우기 */
const listInput = document.querySelector('#listAdd');/* 입력칸 */
const addBtn = document.querySelector('#addBtn')/* 추가버튼 */
const todoList = document.querySelector('.list_wrap')/* 리스트 ul */
addBtn.addEventListener('click',()=>{
    if(listInput.value == ''){
        alert('할일을 입력 후 추가해주세요');
    }else{
        let li = document.createElement('li');
        li.innerHTML = `<button type="button"><img src="./images/check_flase.png"></button><span>${listInput.value}</span>`
        console.log(todoList);
        todoList.appendChild(li);
        listInput.value = ''; /* 입력값 초기화 */
    }
});

/* 체크버튼 클릭 시 체크되기 */
// const chkBtn = document.querySelector('#listChk');
// chkBtn.addEventListener("click",()=>{
//     chkBtn.children.src = './images/check_true.png'
// })
