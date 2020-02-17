/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
      cy.visit('https://merelymccool.github.io/portfolio/')
    })

    it('Welcome block', () => {
        //Validate descedants
        cy.get('#welcome')
        .should('have.descendants','p')
        .and('have.descendants','img')
        //Validate no Back to Top link
        .and('not.have.descendants','div.btt');
        //Validate title
        cy.get('#welcome-h1')
        .should('have.text','Welcome');

    })

    it('Nav block', () => {
        //Validate ID
        cy.get('nav')
        .should('have.attr', 'id')
        .and('include', 'site-nav')
        //Validate no Back to Top link
        .and('not.have.descendants','div.btt');
        //Validate nav items
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
        //Validate title
        cy.get('#about-h1').should('have.text','About');
        //Validate Back to Top link
        cy.get('#about')
        .should('have.descendants','div.btt');

    })

    it('Projects block', () => {
        //Validate title
        cy.get('#projects-h1').should('have.text','Projects');
        //Validate Back to Top link
        cy.get('#about')
        .should('have.descendants','div.btt');

    })

    it('Skills block', () => {
        //Validate title
        cy.get('#skills-h1').should('have.text','Skills');
        //Validate Back to Top link
        cy.get('#about')
        .should('have.descendants','div.btt');

    })

    it('Achievements block', () => {
        //Validate titles
        cy.get('#achievements-h1').should('have.text','Achievements');
        cy.get('#achievements > h3').should(($h3) => {
            expect($h3).to.have.length(4)
            expect($h3.eq(0)).to.contain('Test Automation University certificates')
            expect($h3.eq(1)).to.contain('SoloLearn certificates')
            expect($h3.eq(2)).to.contain('FreeCodeCamp certificates')
            expect($h3.eq(3)).to.contain('GrassHopper certificates')
          })
        //Validate nav items
        cy.get('#achievements')
        .find('a:first-child')
        .should('contain','TestAutomationU')
        .and('have.attr', 'href')
        .and('include', '#tau');
        cy.get('#achievements')
        .find('a:nth-child(2)')
        .should('contain','SoloLearn')
        .and('have.attr', 'href')
        .and('include', '#sololearn');
        cy.get('#achievements')
        .find('a:nth-child(3)')
        .should('contain','FreeCodeCamp')
        .and('have.attr', 'href')
        .and('include', '#fcc');
        cy.get('#achievements')
        .find('a:last-child')
        .should('contain','GrassHopper')
        .and('have.attr', 'href')
        .and('include', '#grasshopper');
        //Validate certificate blocks
        cy.get('#achievements-flex > div').should(($ach) => {
            expect($ach).to.have.length(19)
            expect($ach.eq(0)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(1)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(2)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(3)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(4)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(5)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(6)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(7)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(8)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(9)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(10)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(11)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(12)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(13)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(14)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(15)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(16)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(17)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
            expect($ach.eq(18)).to.have.class('ach-flex-box')
            .and.to.have.descendants('a')
            .and.to.have.descendants('img');
        })
        //Validate Back to Top link
        cy.get('#about')
        .should('have.descendants','div.btt');



    })

    it('Contact block', () => {
        //Validate title
        cy.get('#contact-h1').should('have.text','Social');
        //Validate social items
        cy.get('.social > a').should(($a) => {
            expect($a).to.have.length(7)
            expect($a.eq(0)).to.contain('GitHub')
            .and.have.attr('href','https://github.com/merelymccool')
            .and.have.attr('title','GitHub')
            .and.have.attr('target','_blank')
            expect($a.eq(1)).to.contain('Twitter')
            .and.have.attr('href','https://www.twitter.com/BugHunterQA')
            .and.have.attr('title','Twitter')
            .and.have.attr('target','_blank')
            expect($a.eq(2)).to.contain('LinkedIn')
            .and.have.attr('href','https://www.linkedin.com/in/mccooldm/')
            .and.have.attr('title','LinkedIn')
            .and.have.attr('target','_blank')
            expect($a.eq(3)).to.contain('DEV.to')
            .and.have.attr('href','https://dev.to/merelymccool')
            .and.have.attr('title','DEV.to')
            .and.have.attr('target','_blank')
            expect($a.eq(4)).to.contain('TestAutomation University')
            .and.have.attr('href','https://testautomationu.applitools.com/me.html#BugHunterQA')
            .and.have.attr('title','Test Automation University')
            .and.have.attr('target','_blank')
            expect($a.eq(5)).to.contain('FreeCodeCamp')
            .and.have.attr('href','https://www.freecodecamp.org/bughunterqa')
            .and.have.attr('title','Free Code Camp')
            .and.have.attr('target','_blank')
            expect($a.eq(6)).to.contain('SoloLearn')
            .and.have.attr('href','https://www.sololearn.com/Profile/12411250')
            .and.have.attr('title','Solo Learn')
            .and.have.attr('target','_blank')
        })
        //Validate Back to Top link
        cy.get('#about')
        .should('have.descendants','div.btt');


    })

})