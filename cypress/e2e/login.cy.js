/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('h1').should('contain', 'Login');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="button"]').should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('input[type="password"]').type('123456');
    cy.get('button[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Please enter your email!');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[type="email"]').type('test@mail.com');
    cy.get('button[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Please enter your password!');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[type="email"]').type('test@mail.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is incorrect!');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[type="email"]').type('test@mail.com');
    cy.get('input[type="password"]').type('123456');
    cy.get('button[type="button"]').click();
    cy.url().should('include', 'http://localhost:3000/');
  });
});
