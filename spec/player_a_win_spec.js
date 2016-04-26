describe("Player A win", function () {
    it("Say score 'Love All' when begin the game", function () {
        var tennis = new Tennis();
        expect(tennis.currentScore).toEqual("Love All");
    });

    it("Say score 'Fifteen Love'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Love All";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Fifteen Love");
    });

    it("Say score 'Thirty Love'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Fifteen Love";
        tennis.playerAWin();

        expect(tennis.currentScore).toEqual("Thirty Love");
    });

    it("Say score 'Forty Love'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Thirty Love";
        tennis.playerAWin();

        expect(tennis.currentScore).toEqual("Forty Love");
    });

    it("Say score 'Player A WIN'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Forty Love";
        tennis.playerAWin();

        expect(tennis.currentScore).toEqual("Player A WIN");
    });

    it("Say score 'Fifteen All'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Love Fifteen";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Fifteen All");
    });

    it("Say score 'Thirty Fifteen'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Fifteen All";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Thirty Fifteen");
    });

    it("Say score 'Fifteen Thirty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Love Thirty";
        tennis.playerAWin();

        expect(tennis.currentScore).toEqual("Fifteen Thirty");
    });

    it("Say score 'Forty Fifteen'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Thirty Fifteen";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Forty Fifteen");
    });

    it("Say score 'Thirty All'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Fifteen Thirty";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Thirty All");
    });

    it("Say score 'Fifteen Forty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Love Forty";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Fifteen Forty");
    });

    it("Say score 'Player A WIN'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Forty Fifteen";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Player A WIN");
    });

    it("Say score 'Forty Thirty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Thirty All";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Forty Thirty");
    });

    it("Say score 'Thirty Forty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Fifteen Forty";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Thirty Forty");
    });

    it("Say score 'Player A WIN'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Forty Thirty";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Player A WIN");
    });

    it("Say score 'DUECE'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Thirty Forty";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("DUECE");
    });

    it("Say score 'Advantage A'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "DUECE";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Advantage A");
    });

    it("Say score 'Player A WIN'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Advantage A";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("Player A WIN");
    });

    it("Say score 'DUECE'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Advantage B";
        tennis.playerAWin();
        expect(tennis.currentScore).toEqual("DUECE");
    });
});
