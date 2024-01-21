function openPopup() {
    document.getElementById("myPopup").style.display = "block";
}

function checkNumber() {
   var enteredNumber = document.getElementById("number").value;
    var popup = document.getElementById("myPopup");

    

    if (/[1]/.test(enteredNumber)) {
       popup.classList.add("large");
        popup.innerHTML += "<p>Details:Product  1 code: 'P001', description: 'Product A', stock: 100 </p>";
    } else if (/[2]/.test(enteredNumber)) {
        
        popup.innerHTML += "<p>Details:Product  2 code: 'P002', description: 'Product B', stock: 50 </p>";
    }
    else if (/[3]/.test(enteredNumber)) {
       
        popup.innerHTML += "<p>Details:Product  3 code: 'P003', description: 'Product C', stock: 155 </p>";
    }
    else if (/[4]/.test(enteredNumber)) {
       
        popup.innerHTML += "<p>Details:Product  4 code: 'P004', description: 'Product D', stock: 78 </p>";
    }
    else if (/[5]/.test(enteredNumber)) {
        
        popup.innerHTML += "<p>Details:Product  5 code: 'P005', description: 'Product E', stock: 59 </p>";
    }
    else {
        alert("Invalid code.");
    }
}

    function changeStatus() {
        
    
        const newstatus = prompt('Enter new status (Pending or Received):');
        if (newstatus === 'Pending'  || newstatus === 'Received') {
            
            alert(`Status for Product ID ${productId} changed to ${newStatus}`);
        } else {
            alert('Invalid status. Please enter "Pending" or "Received".');
        }  
}
function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}


