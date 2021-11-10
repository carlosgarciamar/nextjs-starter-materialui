describe('Hello world page', () => {
    it("should render the text 'Helo World!'", () => {
        const text = 'Hello World!';
        cy.visit('http://localhost:3000/');
        cy.get('h1').contains(text);
    });
});
