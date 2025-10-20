const expenses = [
{ category: 'Food', amount: 20 },
{ category: 'Transport', amount: 15 },
{ category: 'Medical', amount: 75}
];

renderExpenses(expenses)

function renderExpenses(e){
    let tbody = document.querySelector('#expensesTabel tbody')
    tbody.innerHTML = e.map((item , i) =>
      `<tr>
        <td>${i+1}</td>
        <td>${item.category}</td>
        <td>${item.amount}</td>
      </tr>
      
      `).join('')

    document.getElementById('totalCell').textContent = e.reduce((total,i) => total+ i.amount,0)
}

function addExpense(){
  let cate = document.getElementById('cate').value; 
  let amount = parseFloat(document.getElementById('amnt').value);
  if (!cate || isNaN(amount)) {
    alert('Please enter a valid category and amount');
    return;}
  expenses.push({category: cate, amount: amount})
  renderExpenses(expenses)
} 

/*
function getTotalExpenses(expenses){
  // the zero is the intial value of the accumulator aka : total i is the curren item is the list
  let total = expenses.reduce((total,i) => total + i.amount,0)
}

*/
function getCategorySummary(){
  // return early when there are no expenses
  if (!expenses || expenses.length === 0) {
    alert('No expenses to summarize');
    return;
  }

  // build a map of category -> totalAmount, ensuring amounts are numbers
  const summaryMap = expenses.reduce((acc, item) => {
    const amt = Number(item.amount) || 0;
    acc[item.category] = (acc[item.category] || 0) + amt;
    return acc;
  }, {});

  // convert the map to an array of { category, amount } objects
  const summaryArray = Object.entries(summaryMap).map(([category, amount]) => ({ category, amount }));

  renderExpenses(summaryArray);
}


function sortExpenses(){
  // this finds the checked radio button with the name sort : they all have the same name
  let selectedValue = document.querySelector('input[name="sort"]:checked').value;
  if(selectedValue == "Category")
    expenses.sort((a, b) => a.category.localeCompare(b.category));
  else if(selectedValue =='Amount')
    expenses.sort((a, b) => a.amount - b.amount);
  else if(selectedValue == 'both'){
    expenses.sort((a,b)=>{
    if(a.category === b.category){return a.amount-b.amount}
    return a.category.localeCompare(b.category)
    })}
  renderExpenses(expenses)
}


function filterExpenses(){
 let selected =  document.getElementById('categoryDropdown').value;
 let filtered ;

  // filter based on the selected radio value
  if (selected === 'Food') {
    filtered = expenses.filter(e => e.category === 'Food');
  } else if (selected === 'Transport') {
    filtered = expenses.filter(e => e.category === 'Transport');
  } else if (selected === 'Medical') {
    filtered = expenses.filter(e => e.category === 'Medical');
  } else {
    // show all if 'All' selected
    filtered = expenses;
  }

  // re-render only filtered data
  renderExpenses(filtered);
}


