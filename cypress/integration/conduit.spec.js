describe('the conduit application',() => {
    it('shows some posts',()=>{
        cy.visit('/')
        cy.get('.article-preview').should('have.length',10)
    })
    it('shows the first post',()=>{
        cy.server()
        cy.route('GET','/activities/*','fixture:posts.json')///api/articles*
        cy.visit('/')
        cy.get(':nth-child(1) > .article-preview').contains('test-moh')
    })
    it('should handle an empty database',()=>{
        cy.server()
        cy.route('GET','/activities/*','fixture:no_posts.json')///api/articles*
        cy.visit('/')
        cy.contains('No articles are here...')
        
    })
})