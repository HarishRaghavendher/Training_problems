const accounts = [
  {
  'name': 'Arun',
  'accountNo': '001',
  },
  {
  'name': 'Babu',
  'accountNo': '002',
  },
  {
  'name': 'Chandra',
  'accountNo': '003',
  },
  ];
  
  let balances = {
  // accountNo: balance
  '001': 5000,
  '002': 2000,
  '003': 0,
  };
  
  const transactions = [
  {
  'accountNo': '001',
  'type': 'withdrawal',
  'amount': 1000,
  },
  {
  'accountNo': '001',
  'type': 'deposit',
  'amount': 500,
  },
  {
  'accountNo': '001',
  'type': 'withdrawal',
  'amount': 1000,
  },
  {
  'accountNo': '002',
  'type': 'deposit',
  'amount': 300,
  },
  {
  'accountNo': '002',
  'type': 'withdrawal',
  'amount': 200,
  },
  {
  'accountNo': '003',
  'type': 'deposit',
  'amount': 200,
  },
  ];
  let newBalance = {...balances};
  balances = transactions.map(transaction=>{
  newBalance[transaction.accountNo] += transaction.type === 'deposit' ? transaction.amount : -transaction.amount;
  })
  let bankDetails = {};
  accounts.map(account=>{ 
    bankDetails[account.accountNo] = {
    name:account.name,
    balance:newBalance[account.accountNo]
  };
  return account;
  });
  console.log(bankDetails);
  // console.log(newBalance);
  