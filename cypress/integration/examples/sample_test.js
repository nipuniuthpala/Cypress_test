
describe('uploadfile' ,function() {
    it ('uplaod image',function(){
      // go to the target web
     cy.visit('https://easyupload.io/');

    // get the selector input type=file (for upload file)
    cy.contains('input[type=file]');
   

    // get the ElementHandle of the selector above

    const fileToUpload = 'Database.jpg';

    // Sets the value of the file input to fileToUpload
   
 
    cy.fixture(fileToUpload).then(fileContent => {
      cy.get('input[type=file]').upload(
        { fileContent, fileName: 'Database.jpg', mimeType: 'image/jpg' },
        { subjectType: 'drag-n-drop' ,force:true},
      );

     
    });

    // doing click on button to trigger upload file
 
   cy.get('#upload').click();

    // wait for selector that contains the uploaded file URL
    cy.get('#upload-link');
    //await page.waitFor(5000);
    cy.wait(3000);
    // get the download URL
    const downloadUrl =cy.get('#upload-link');
    // display the result on console
    Cypress.log(downloadUrl);
   cy.get('.upload-success > :nth-child(1)').then(($msg)=>{
     const text=$msg.text()
    expect(text).to.eq('Your file has been uploaded successfully.')});
    
  
})
it ('sign in and uplaod picture in facebook',function(){
  cy.visit('https://www.facebook.com/login')
  cy.get('input[name=email]').type('0773469181');
  cy.get('input[name=pass]').type('test@123');
  cy.get('button[name=login]').click();
  cy.get('span[class=_1vp5]').click();
  cy.wait(3000);
  cy.get('#u_ps_fetchstream_1_1_1').click();
 
  cy.wait(3000);
  cy.get('._57ns > .img').click();

  cy.wait(3000);

  cy.get(':nth-child(1) > ._54nc > :nth-child(1) > ._54nh').click();
  cy.get(':nth-child(1) > ._j-q > .uiScaledImageContainer > .scaledImageFitWidth',{multiple:false}).click();

  cy.wait(3000);
  cy.get('[data-testid=cover_photo_save_button]',{force:true}).click();

  cy.end();

})

})
