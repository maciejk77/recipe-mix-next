// describe("User NOT signed in", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });

//   it("should display message to sign in", () => {
//     cy.findByText(/Please sign in above to get access/i);
//   });

//   it("should display sign in button", () => {
//     cy.findByRole("button", { name: /sign in/i });
//   });

//   it("should NOT display navigation options (Home|Recipes|Add Recipe)", () => {});

//   it("should NOT show the list of recipes", () => {});

//   it("should NOT show a chosen recipe information", () => {});
// });

describe('User is signed in', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show welcome message', () => {
    cy.findByText(/welcome/i);
  });

  it('should show logout button', () => {
    cy.findByRole('button', { name: /logout/i });
  });

  it('should display navigation options (Home|Recipes|Add Recipe)', () => {
    cy.get('[data-testid="nav-tabs"]').should('exist');
  });

  it('should show the list of recipes', () => {
    cy.visit('/recipes');
    cy.url().should('include', '/recipes');
    cy.get('[data-testid="recipes"]').should('exist');
  });

  it('should show the add recipes', () => {
    cy.visit('/recipes/add');
    cy.url().should('include', '/recipes/add');
    cy.get('[data-testid="add-recipe"]').should('exist');
  });

  it('should show the edit recipes', () => {
    cy.visit('/recipes/1/edit');
    cy.url().should('include', '/edit');
    cy.get('[data-testid="edit-recipe"]').should('exist');
  });

  it('should show home and redirect to home page on click', () => {
    cy.visit('/recipes');
    cy.url().should('include', '/recipes');
    cy.findByText('Add Recipe').click();
    cy.url().should('include', '/recipes/add');
  });

  it('should allow to logout and then log back in', () => {
    cy.findByRole('button', { name: /logout/i }).click();
    cy.findByRole('button', { name: /sign in/i });
    cy.findByRole('button', { name: /sign in/i }).click();
    cy.findByRole('button', { name: /logout/i });
  });
  // it("should show a chosen recipe information", () => {});

  // it("should show (add|edit) options for user who created the recipe", () => {});

  // it("should add the recipe to recipes on save", () => {});

  // it("should NOT add the recipe to recipes on save, if form not filled properly", () => {});

  // it("should NOT add the recipe on cancel", () => {});

  // it("should allow editing a recipe for user who created it", () => {});

  // it("should NOT allow editing a recipe for user who NOT created it", () => {});

  // it("should allow deleting recipe for user who created it", () => {});

  // it("should NOT allow deleting recipe for user who NOT created it", () => {});
});
