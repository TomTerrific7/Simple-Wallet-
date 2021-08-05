// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



contract TomBank{
    

    
      struct Payment {
        uint amount;
        uint timestamps;
    }
    
    struct Balance {
        uint totalBalance;
        uint numPayments;
        mapping(uint => Payment) payments;
    }
    
    mapping(address => Balance) public balanceReceived;
    
    event Sent(address from, address _to, uint _amount);
    event Received(address, uint);
    address owner;
     constructor() {
         owner = msg.sender;
    
    }
       
function sendMoney() public payable {
    
    balanceReceived[msg.sender].totalBalance += msg.value;
    
    Payment memory payment = Payment(msg.value, block.timestamp);
    
    balanceReceived[msg.sender].payments[balanceReceived[msg.sender].numPayments] = payment;
    balanceReceived[msg.sender].numPayments ++;
    emit Received(msg.sender, msg.value);

}
function getBalance() public view returns(uint) {
    return address(this).balance;

}

function withdrawMoney(address payable _to, uint _amount) public {
    require(balanceReceived[msg.sender].totalBalance >= _amount, "Insufficient funds");
    balanceReceived[msg.sender].totalBalance -= _amount;
    _to.transfer(_amount);
    emit Sent(msg.sender, _to, _amount);
}


}