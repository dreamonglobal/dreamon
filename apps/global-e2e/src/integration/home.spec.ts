
const assertUrlSlug = (slug) => cy.url().should('equal', `http://localhost:4200/${slug}`)

const links = ['about', 'missions', 'music', 'speakers', 'films', 'events', 'contact'];

const uppercaseLink = (link) => link.charAt(0).toUpperCase() + link.slice(1)

const assertNavigationLinkWorks = (link) => {
    cy.get('a.nav-link').contains(uppercaseLink(link)).click()
    assertUrlSlug(link)
}

const sliderOne = () => {
    cy.get('h1').contains('Dream On: Honduras 2022')
    cy.get('[data-cy="sliderOneBtn"]').should('have.attr', 'target', '_blank').should('have.attr', 'href', 'https://dreamon.gomethod.app/!/#/23795/honduras-2022').should('contain', 'Sign Up')
}

const sliderTwo = () => {
    cy.get('h1').contains('Dream On: Brazil 2022')
}

const sliderThree = () => {
    cy.get('h1').contains('Listen Today');
    cy.get('[data-cy="sliderThreeBtn"]').should('have.attr', 'target', '_blank').should('have.attr', 'href', 'https://open.spotify.com/album/0GEbkWOSyKMLyH1lvBLLPl?si=O7TMNB5qTtSJlbnNLUGpcg').should('contain', 'Listen On Spotify')
    cy.get('[data-cy="sliderThreeBtnTwo"]').should('have.attr', 'href', '/music/derek-spencer').should('contain', 'View Artist')
}

const sliderFour = () => {
    cy.get('h1').contains('Raise Your Helping Hands')
    cy.get('[data-cy="sliderFourBtn"]').should('have.attr', 'target', '_blank').should('have.attr', 'href', 'https://www.paypal.com/donate/?token=_VV4NX2yorvh4-A4aMbH1VJ75nly1JyZae94238oxw6LESsAA7Mgc7OTDhtY0yn_vCMdwG&country.x=US&locale.x=US').should('contain', 'Donate Now')
}

const changeLanguage = () => {
    cy.get('[data-cy="changeLanguage"]').click();
    cy.get('.ReactModal__Content.ReactModal__Content--after-open').should('be.visible')
    cy.get('[data-cy="updateLanguageTitle"]').contains('Update Language')
}
describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('all of the navigation links navigate as expected', () => {
        links.map(link => assertNavigationLinkWorks(link))
    })

    it('all of button links navigate as expected', () => {
        cy.get('[data-cy="joinBucketLink"]').should('have.attr', 'target', '_blank').should('have.attr', 'href', 'https://dreamon.gomethod.app/!/#/23795/honduras-2022')
        cy.get('[data-cy="donateBucketLink"]').should('have.attr', 'target', '_blank').should('have.attr', 'href', 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q')
        cy.get('[data-cy="aboutJoinButton"]').should('have.attr', 'href', '/join')
        cy.get('[data-cy="aboutDonateButton"]').should('have.attr', 'target', '_blank').should('have.attr', 'href', 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q')
        cy.get('[data-cy="aboutPartnerButton"]').should('have.attr', 'target', '_blank').should('have.attr', 'href', 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q')
        cy.get('.video-btn').should('have.attr', 'target', '_blank').should('have.attr', 'href', 'https://www.youtube.com/watch?v=4767SJIoVNI')
    })

    it('slider works as expected', () => {
        sliderOne();
        cy.get('.owl-next').click();
        sliderTwo();
        cy.get('.owl-next').click();
        sliderThree();
        cy.get('.owl-next').click();
        sliderFour();
        cy.get('button.owl-dot').eq(0).click();
        sliderOne();
        cy.get('button.owl-dot').eq(1).click();
        sliderTwo();
        cy.get('button.owl-dot').eq(2).click();
        sliderThree();
        cy.get('button.owl-dot').eq(3).click();
        sliderFour();
        cy.get('.owl-prev').click();
        sliderThree();
        cy.get('.owl-prev').click();
        sliderTwo();
        cy.get('.owl-prev').click();
        sliderOne();
    })

    it('can change the language', () => {
        changeLanguage();
        cy.get('[data-cy="englishBtn"]').click();
        cy.url().should('equal', 'http://localhost:4200/')
        changeLanguage();
        cy.get('[data-cy="spanishBtn"]').click();
        cy.url().should('equal', 'http://localhost:4200/es/')
        changeLanguage();
        cy.get('[data-cy="portugueseBtn"]').click();
        cy.url().should('equal', 'http://localhost:4200/pt/')
    })
})