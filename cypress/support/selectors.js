export const SELECTORS = {
    login: {
        emailField:"#lemail",
        passwordField:"#password",
        loginButton:'.login-actions button[type="submit"]',

    },
    timeoff: {
        myinfoTab: 'a[data-bi-id="main-nav-my-info-tab"]',
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
    }
}