export const SELECTORS = {
    login: {
        emailField:"#lemail",
        passwordField:"#password",
        loginButton:'.login-actions button[type="submit"]',

    },
    pagetabs:{
        myinfoTab: 'a[data-bi-id="main-nav-my-info-tab"]',
        hiringTab:'a[data-bi-id="main-nav-hiring-tab"]',

    },
    timeoff: {
        timeoffTab:'a[data-bi-id="access-level-TimeOff-header-step"]',
        recordTimeOffButton:'button[aria-label="Record Time Off"]',
        saveButton: 'button[type="submit"]',
        requestTimeOffButton: 'button[data-bi-id="home-request-time-off-button"]',
        startDate: "#time-off-id-start-date",
        endDate: "#time-off-id-end-date",
        category: 'div[aria-label="Time Off Category –Select–"',
        selectCategory: '.fab-MenuOption__row',
        amount: 'input[aria-label="amount"]',
        sendRequest: 'button[type="submit"][data-bi-id="send-time-off-request-button"]'
    },
    registeremployee: {
        newEmployee: 'button[data-menu-id="fab-menu1"]',
        newEmployeeOption: 'a[data-bi-id="home-add-new-employee"]',
        firstnameField:'input[data-fieldid="1"]', 
        lastnameField: 'input[data-fieldid="2"]',
        saveButton: 'button[data-bi-id="employees-add-employee-form-save"]',
        registerToast: '.jade-Alert__left',
        hiredateField: '#field_3-0'
    },
    addjob: {
        addJobButton: 'button[data-bi-id="create-new-job-opening"]',
        postingtitle: 'input[name="name"]',
        jobstatusField:  'div[aria-label="Job Status Draft"]',
        hiringleadField: 'div[aria-label="Hiring Lead –Select–"]',
        employeetypeField: 'div[aria-label="Employment Type –Select–"]',
        joblocationField: 'div[data-bi-id="job-location-select-remote"]',
        jobdescriptionField: '#js-mce-message',
        nextButton: 'button[data-bi-id="job-wizard-navigation-next-button"]',

    },
    addcandidate: {
        newcandidateLink: 'a[href^="/hiring/candidates/add/"]',
        firstnameField: '#FabricTextField-1',
        lastnameField: '#FabricTextField-2',
        saveButton: 'button[data-bi-id="save-candidate"]',
    },
    addasset:{
        assetcategoryField: 'div[aria-label="Asset Category –Select–"]',
        saveButton: 'button[tabindex="0"][type="button"]',

    },
    myinfotabs:{
        assets: 'a[data-bi-id="access-level-Assets-header-step"]',
        notes: 'a[data-bi-id="access-level-Notes-header-step"]',
        benefits: 'a[data-bi-id="access-level-Benefits-header-step"]',
        emergency: 'a[data-bi-id="access-level-Emergency-header-step"]',
    },
    notesTab:{
        addnoteField: '#note',
        postButton: 'button[type="submit"]',
        commentNote:'.commentNote__content',
    },
    benefitsTab: {
        benefitCard: '#js-plan-card-root',
        benefitButton: 'div#js-plan-action-dropdown',
        menuitem: 'div[role="menuitem"]',
        datewaivedField: 'input[placeholder="mm/dd/yyyy"]',
        saveButton: 'button[type="submit"]',
        coverageField: 'div[aria-label=" –Select–"]',
        employeeCoverage: '.fab-MenuOption__row',
    },
    emergencyTab: {
        addContactButton: 'button[data-bi-id="employees-contacts-add-contact"]',
        nameContactField: 'input[aria-label="Name"]',
        relationshipField: 'div[aria-label="aria-label –Select–"]',
        primaryContactCheckbox: 'input[aria-label="Primary Contact"]',
        homephoneField: 'input[aria-label="Home Phone"]',
        savechangesButton: 'button[type="submit"]',
        deleteContactButton: '.Contact__formDelete',
    },
}