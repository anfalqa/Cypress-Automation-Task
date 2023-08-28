Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
///<reference types= "cypress" /> 
let old_price=[]
let counter_old=0
let new_price=[]
let counter_new=0
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationteststore.com')

       //____________________________ Old Price __________________________________
    cy.get('#special > .container-fluid')
    .find(".priceold")
    .eq(0)
    .invoke("text")
    .then((the_price) => {
       old_price[0]=Math.floor(the_price.replace("$", "")) 
       counter_old=counter_old+old_price[0]
    });

      cy.get('#special > .container-fluid')
      .find(".priceold")
      .eq(1)
      .invoke("text")
      .then((the_price) => {
         old_price[1]=Math.floor(the_price.replace("$", ""))
         counter_old=counter_old+old_price[1]
      });

      cy.get('#special > .container-fluid')
      .find(".priceold")
      .eq(2)
      .invoke("text")
      .then((the_price) => {
         old_price[2]=Math.floor(the_price.replace("$", ""))
         counter_old=counter_old+old_price[2]
      });

      cy.get('#special > .container-fluid')
      .find(".priceold")
      .eq(3)
      .invoke("text")
      .then((the_price) => {
         old_price[3]=Math.floor(the_price.replace("$", ""))
         counter_old=counter_old+old_price[3]
         cy.log(counter_old)
      });
      //____________________________ New Price __________________________________
      cy.get('#special > .container-fluid')
    .find(".pricenew")
    .eq(0)
    .invoke("text")
    .then((the_price) => {
       new_price[0]=Math.floor(the_price.replace("$", "")) 
       counter_new=counter_new+new_price[0]
    });

      cy.get('#special > .container-fluid')
      .find(".pricenew")
      .eq(1)
      .invoke("text")
      .then((the_price) => {
         new_price[1]=Math.floor(the_price.replace("$", ""))
         counter_new=counter_new+new_price[1]
      });

      cy.get('#special > .container-fluid')
      .find(".pricenew")
      .eq(2)
      .invoke("text")
      .then((the_price) => {
         new_price[2]=Math.floor(the_price.replace("$", ""))
         counter_new=counter_new+new_price[2]
      });

      cy.get('#special > .container-fluid')
      .find(".pricenew")
      .eq(3)
      .invoke("text")
      .then((the_price) => {
         new_price[3]=Math.floor(the_price.replace("$", ""))
         counter_new=counter_new+new_price[3]
         cy.log(counter_new)
         
         cy.log("hey the sum of the old prices is "+counter_old+  
      " and the sum of the new prices is "+ counter_new)

         alert(`hey the sum of the old prices is ${counter_old},
        and the sum of the new prices is ${counter_new}`)
      });
  
  });
})