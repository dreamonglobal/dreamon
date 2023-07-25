const assertUrlSlug = (slug) =>
  cy.url().should('equal', `http://localhost:4200/${slug}`)

const links = ['about', 'films', 'events', 'contact']

const uppercaseLink = (link) => link.charAt(0).toUpperCase() + link.slice(1)

const assertNavigationLinkWorks = (link) => {
  cy.get('a.nav-link').contains(uppercaseLink(link)).click()
  assertUrlSlug(link)
}

const sliderOne = () => {
  cy.get('h1').should('contain.text', 'Nights of Praise Presented by Dream On')
  cy.get('[data-cy="sliderOneBtn"]')
    .should('have.attr', 'href', '/events/')
    .should('contain', 'Learn More')
}

const sliderTwo = () => {
  cy.get('h1').contains('Join Us On Our Next Mission Trip')
  cy.get('[data-cy="sliderTwoBtn"]')
    .should('have.attr', 'target', '_blank')
    .should('have.attr', 'href', 'https://dreamon.gomethod.app/')
    .should('contain', 'Sign Up')
}

const sliderThree = () => {
  cy.get('h1').contains('Raise Your Helping Hands')
  cy.get('[data-cy="sliderThreeBtn"]')
    .should('have.attr', 'target', '_blank')
    .should(
      'have.attr',
      'href',
      'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q'
    )
    .should('contain', 'Donate Now')
}

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('all of the navigation links navigate as expected', () => {
    links.map((link) => assertNavigationLinkWorks(link))
  })

  it('all of button links navigate as expected', () => {
    cy.get('[data-cy="joinBucketLink"]')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://dreamon.gomethod.app/')
    cy.get('[data-cy="donateBucketLink"]')
      .should('have.attr', 'target', '_blank')
      .should(
        'have.attr',
        'href',
        'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q'
      )
    cy.get('[data-cy="aboutJoinButton"]').should('have.attr', 'href', '/join')
    cy.get('[data-cy="aboutDonateButton"]')
      .should('have.attr', 'target', '_blank')
      .should(
        'have.attr',
        'href',
        'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q'
      )
    cy.get('[data-cy="aboutPartnerButton"]')
      .should('have.attr', 'target', '_blank')
      .should(
        'have.attr',
        'href',
        'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q'
      )
    cy.get('.video-btn')
      .should('have.attr', 'target', '_blank')
      .should(
        'have.attr',
        'href',
        'https://www.youtube.com/watch?v=4767SJIoVNI'
      )
  })

  it('slider works as expected', () => {
    sliderOne()
    cy.get('.owl-next').click()
    sliderTwo()
    cy.get('.owl-next').click()
    sliderThree()
    cy.get('.owl-next').click()
    cy.get('button.owl-dot').eq(0).click()
    sliderOne()
    cy.get('button.owl-dot').eq(1).click()
    sliderTwo()
    cy.get('button.owl-dot').eq(2).click()
    sliderThree()
    cy.get('.owl-prev').click()
    sliderTwo()
    cy.get('.owl-prev').click()
    sliderOne()
  })

  it('can change the language', () => {
    cy.changeLanguage('english')
    cy.url().should('equal', 'http://localhost:4200/')
    cy.changeLanguage('spanish')
    cy.url().should('equal', 'http://localhost:4200/es')
    cy.changeLanguage('portuguese')
    cy.url().should('equal', 'http://localhost:4200/pt')
  })
})
