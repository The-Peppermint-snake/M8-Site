"use strict";

window.addEventListener("load", function() {
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;
      model.focus();

      for (let i=0; i<orderForm.elements.length; i++) {
            orderForm.elements[i].addEventListener("change", calcOrder);
      }

      calcOrder();
      function calcOrder() {
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            let modelCost = mValue*quantity;
            orderForm.elements.modelCost.value = modelCost.toLocaleString("en-Us", {style: "currency", currency: "USD"});

            let planValue = document.querySelector('input[name="plan"]:checked').value;

            let planCost = planValue*quantity;
            orderForm.elements.planCost.value = planCost.toLocaleString("en-Us", {style: "currency", currency: "USD"});

            let subtotal = modelCost + planCost;
            orderForm.elements.subtotal.value = subtotal.toLocaleString("en-Us", {style: "currency", currency: "USD"});

            let salesTax = subtotal *  0.05;
            orderForm.elements.salesTax.value = salesTax.toLocaleString("en-Us", {style: "currency", currency: "USD"});

            let totalCost = subtotal+salesTax;
            orderForm.elements.totalCost.value = totalCost.toLocaleString("en-Us", {style: "currency", currency: "USD"});
      }
});




