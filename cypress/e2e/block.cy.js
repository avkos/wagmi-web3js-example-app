describe('Navigation', () => {
	it('should have block data', () => {
		cy.visit('http://localhost:3000/')

		cy.get('div[id="hash"]').contains('0x90c05bb379229080c79fe7031ae5d73ca3d679741f6a01c1d77932a54a256b71')
		cy.get('div[id="extraData"]').contains('0x546974616e2028746974616e6275696c6465722e78797a29')
		cy.get('div[id="miner"]').contains('0xe3c44d4d25172ef2e0cdb9e09189a8ca4ed878f4')
	})
})
