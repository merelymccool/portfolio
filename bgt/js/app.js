class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  //submit budget method
  submitBudgetForm(){
    // console.log('submit budget');
    const value = this.budgetInput.value;
    if(value==='' || value <0){
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = `<p>Budget cannot be empty or negative!</p>`;
      const self = this;
      // console.log(this);
      setTimeout(function(){
        // console.log(this);
        // console.log(self);
        self.budgetFeedback.classList.remove('showItem');
      },4000)
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }

  //show balance method
  showBalance(){
    // console.log('show balance!');
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if(total < 0){
      this.balance.classList.remove('showGreen','showBlack');
      this.balance.classList.add('showRed');
    } else if(total > 0){
      this.balance.classList.remove('showRed','showBlack');
      this.balance.classList.add('showGreen');
    } else if(total === 0){
      this.balance.classList.remove('showGreen','showRed');
      this.balance.classList.add('showBlack');
    }
  }

  //submit budget method
  submitExpenseForm(){
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;
    if(expenseValue === '' || amountValue === '' || amountValue < 0){
      this.expenseFeedback.classList.add('showItem');
      this.expenseFeedback.innerHTML = `<p>Expense cannot be empty or negative!</p>`;
      const self = this;
      setTimeout(function(){
        self.expenseFeedback.classList.remove('showItem');
      },4000)
    } else {
      let amount = parseInt(amountValue);

      let expense = {
        id:this.itemID,
        title:this.expenseInput.value,
        amount:amount,
      }
      this.expenseInput.value = '';
      this.amountInput.value = '';

      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
      this.showBalance();
    }
  }

  //add expense method
  addExpense(expense){
    const div = document.createElement('div');
    div.classList.add('expense');
    div.innerHTML = `
      <div class="expense-item d-flex justify-content-between align-items-baseline">
       <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
       <h5 class="expense-amount mb-0 list-item">- ${expense.amount}</h5>
       <div class="expense-icons list-item">
        <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
         <i class="fas fa-pen-square"></i>
        </a>
        <a href="#" class="delete-icon" data-id="${expense.id}">
         <i class="fas fa-trash"></i>
        </a>
       </div>
      </div>
    `;
    this.expenseList.appendChild(div);
  }

  //total expense method
  totalExpense(){
    // console.log('total expense!');
    let total = 0;

    if(this.itemList.length>0){
      total = this.itemList.reduce(function(acc,cur){
        // console.log(`Total is ${acc} and the current value is ${cur}`);
        acc +=cur.amount;
        return acc;
      },0);
    }
    
    this.expenseAmount.textContent = total;
    return total;
  }

  //edit expense method
  editExpense(element){
    let id = parseInt(element.dataset.id);
    //traverse the dom
    let parent = element.parentElement.parentElement.parentElement;
    //remove from dom
    // console.log(parent);
    this.expenseList.removeChild(parent);
    let expense = this.itemList.filter(function(item){
      return item.id === id;
    })
    // console.log(expense);
    //show value in fields
    this.expenseInput.value = expense[0].title;
    this.amountInput.value = expense[0].amount;
    //remove ID from the list
    let tempList = this.itemList.filter(function(item){
      return item.id!== id;
    })
    //make the temp list the main list
    this.itemList = tempList;
    // show new balance without matching ID
    this.showBalance();
  }

  //delete expense method
  deleteExpense(element){
    let id = parseInt(element.dataset.id);
    //traverse the dom
    let parent = element.parentElement.parentElement.parentElement;
    //remove from dom
    this.expenseList.removeChild(parent);
    //remove ID from the list
    let tempList = this.itemList.filter(function(item){
      return item.id!== id;
    })
    //make the temp list the main list
    this.itemList = tempList;
    // show new balance without matching ID
    this.showBalance();
  }
}

function eventListeners(){
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

  //new instance of UI Class
  const ui = new UI();

  //budget form submit
  budgetForm.addEventListener('submit', function(event){
    event.preventDefault();
    ui.submitBudgetForm();
  })
  //expense form submit
  expenseForm.addEventListener('submit', function(event){
    event.preventDefault();
    ui.submitExpenseForm();
  })
  //expense list click
  expenseList.addEventListener('click', function(event){
    // console.log(event.target.parentElement);
    event.preventDefault();
    if(event.target.parentElement.classList.contains('edit-icon')){
      ui.editExpense(event.target.parentElement);
    } else if(event.target.parentElement.classList.contains('delete-icon')){
      ui.deleteExpense(event.target.parentElement);
    }
  })
}

document.addEventListener('DOMContentLoaded', function(){
  eventListeners();
})