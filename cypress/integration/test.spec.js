/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
      cy.visit('https://merelymccool.github.io/portfolio/')
    })

    it('Welcome block', () => {
        cy.get('#welcome-h1')
        .should('have.text','Welcome');

    })

    it('Nav block', () => {
        cy.get('nav')
        .should('have.attr', 'id')
        .and('include', 'site-nav');
        cy.get('#site-nav')
        .find('a:first-child')
        .should('contain','About')
        .and('have.attr', 'href')
        .and('include', '#about');
        cy.get('#site-nav')
        .find('a:nth-child(2)')
        .should('contain','Skills')
        .and('have.attr', 'href')
        .and('include', '#skills');
        cy.get('#site-nav')
        .find('a:nth-child(3)')
        .should('contain','Projects')
        .and('have.attr', 'href')
        .and('include', '#projects');
        cy.get('#site-nav')
        .find('a:nth-child(4)')
        .should('contain','Achievements')
        .and('have.attr', 'href')
        .and('include', '#achievements');
        cy.get('#site-nav')
        .find('a:last-child')
        .should('contain','Social')
        .and('have.attr', 'href')
        .and('include', '#contact');

    })

    it('About block', () => {
        cy.get('#about-h1').should('have.text','About');

    })

    it('Projects block', () => {
        cy.get('#projects-h1').should('have.text','Projects');

    })

    it('Skills block', () => {
        cy.get('#skills-h1').should('have.text','Skills');

    })

    it('Achievements block', () => {
        cy.get('#achievements-h1').should('have.text','Achievements');

    })

    it('Contact block', () => {
        cy.get('#contact-h1').should('have.text','Social');

    })

})