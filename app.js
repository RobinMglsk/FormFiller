document.getElementById('fillform').addEventListener('click', e => {

    console.log('Running form filler');
    
    let value = '';
    let ids = [];

    faker.locale = "nl"
    
    // Fill first name
    value = faker.name.firstName();
    ids = ['fname', 'firstName', 'first_name'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });

    // Fill last name
    value = faker.name.lastName();
    ids = ['lname', 'lastName', 'last_name'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });

    // Fill company name
    value = faker.company.companyName();
    ids = ['company', 'company_name'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });

    // Fill job title
    value = faker.name.jobTitle();
    ids = ['function', 'job_title'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });

    // Fill e-mail
    value = faker.internet.userName() + '@mglsk.be';
    ids = ['email', 'emailaddress', 'mailaddress','emailadress','emailAddress'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });

    // Fill phone
    value = faker.phone.phoneNumber();
    ids = ['phone', 'phoneNumber', 'phone_number'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });

    // Fill mobile
    value = faker.phone.phoneNumber();
    ids = ['mobile', 'mobileNumber', 'mobile_number'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });


    // Fill street
    value = faker.address.streetName();
    ids = ['street'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });

    // Fill number
    value = faker.random.number({min:1,max:300});
    ids = ['number','houseNumber','house_number'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });

    // Fill zip
    value = faker.address.zipCode();
    ids = ['zip','zipcode','zipCode','zip_code'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });

    // Fill city
    value = faker.address.city();
    ids = ['city'];
    ids.forEach( (element) => {
        chrome.tabs.executeScript({
            code: 'if(document.getElementById(\''+element+'\') !== null){document.getElementById(\''+element+'\').value = "'+value+'";}'
        });
    });
});