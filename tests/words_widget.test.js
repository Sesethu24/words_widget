describe("words-widget", () => {
    it("should analyze a sentence that has been entered", () => {

        const sentence = "Create a widget that allows a user to enter a sentence";
        let instance = getSentence();
        assert.deepEqual(instance.getSentence(), sentence);
    })
    
    it("should count the number of words in the sentence entered", () => {

        const sentence = "Create a widget that allows a user to enter a sentence";
        let instance = getSentence();
        assert.deepEqual(instance.wordsCounter(), 11);
    })

})
