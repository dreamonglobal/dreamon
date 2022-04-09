const navigateToSpeakersPage = (language: 'english' | 'spanish' | 'portuguese') => 
    cy.get('a.nav-link').contains(language === 'spanish' ? 'Oradoras' : language === 'portuguese' ? 'O Orador' : 'Speakers').click() 
    
const navigateToMusicPage = (language: 'english' | 'spanish' | 'portuguese') => 
    cy.get('a.nav-link').contains(language === 'spanish' ? 'Música' : language === 'portuguese' ? 'Música' : 'Music').click()

const clickOnPerson = (person: 'Ben Swartz' | 'Ty Watson' | 'Zac Howard') => 
    cy.get('article.news-info').contains(person).click()

const assertSpeakerHtmlRendersCorrectLanguage = (value: string) =>
    cy.get('[data-cy="speakerHtml"] > h1').contains(value)

const assertSpeakerBookRendersCorrectLanguage = (value: string) =>
    cy.get('[data-cy="bookDescription"]').contains(value)

const assertMusicianHtmlRendersCorrectLanguage = (value: string) =>
    cy.get('[data-cy="musicianHtml"] > h1').contains(value)

describe('markdown', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Loads Speakers in three languages', () => {
        navigateToSpeakersPage('english')
        clickOnPerson('Ben Swartz')
        assertSpeakerHtmlRendersCorrectLanguage('About Ben Swartz')
        cy.changeLanguage('spanish')
        navigateToSpeakersPage('spanish')
        clickOnPerson('Ben Swartz')
        assertSpeakerHtmlRendersCorrectLanguage('Acerca de Ben Swartz')
        cy.changeLanguage('portuguese')
        navigateToSpeakersPage('portuguese')
        clickOnPerson('Ben Swartz')
        assertSpeakerHtmlRendersCorrectLanguage('Sobre Ben Swartz')
    })

    it('Loads Speakers books in three languages', () => {
        navigateToSpeakersPage('english')
        clickOnPerson('Ty Watson')
        assertSpeakerBookRendersCorrectLanguage('is a book created to inspire')
        cy.changeLanguage('spanish')
        navigateToSpeakersPage('spanish')
        clickOnPerson('Ty Watson')
        assertSpeakerBookRendersCorrectLanguage('es un libro creado para inspirar')
        cy.changeLanguage('portuguese')
        navigateToSpeakersPage('portuguese')
        clickOnPerson('Ty Watson')
        assertSpeakerBookRendersCorrectLanguage('é um livro criado para inspirar')
    })

    it('Loads Musicians page in three languages', () => {
        navigateToMusicPage('english')
        clickOnPerson('Zac Howard')
        assertMusicianHtmlRendersCorrectLanguage('About Zac Howard')
        cy.changeLanguage('spanish')
        navigateToMusicPage('spanish')
        clickOnPerson('Zac Howard')
        assertMusicianHtmlRendersCorrectLanguage('Acerca de Zac Howard')
        cy.changeLanguage('portuguese')
        navigateToMusicPage('portuguese')
        clickOnPerson('Zac Howard')
        assertMusicianHtmlRendersCorrectLanguage('Sobre Zac Howard')
    })
})