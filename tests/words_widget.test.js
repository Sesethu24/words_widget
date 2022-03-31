describe('words-widget', () => {
    it("should analyze a sentence that has been entered and display it", () => {
        var words = getSentence();
        let sentence = "Create a widget that allows a user to enter a sentence";
        assert.deepEqual('Create a widget that allows a user to enter a sentence',words.get(sentence));
    })
    
    it("should count the number of words in the sentence entered", () => {
        var counter = getSentence();
        let sentence = "Create a widget that allows a user to enter a sentence";
        assert.deepEqual(`The sentence contains ${11} words`, counter.wordsCounter(sentence));
    })

})
