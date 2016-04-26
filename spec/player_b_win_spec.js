describe("Player B win", function () {
    it("Say score 'Love Fifteen'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Love All";
        tennis.playerBWin();
        expect(tennis.currentScore).toEqual("Love Fifteen");
    });

    it("Say score 'Love Thirty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Love Fifteen";
        tennis.playerBWin();

        expect(tennis.currentScore).toEqual("Love Thirty");
    });

    it("Say score 'Love Forty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Love Thirty";
        tennis.playerBWin();

        expect(tennis.currentScore).toEqual("Love Forty");
    });

    it("Say score 'Player B WIN'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Love Forty";
        tennis.playerBWin();

        expect(tennis.currentScore).toEqual("Player B WIN");
    });

    it("Say score 'Fifteen All'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Fifteen Love";
        tennis.playerBWin();

        expect(tennis.currentScore).toEqual("Fifteen All");
    });

    it("Say score 'Thirty Fifteen'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Thirty Love";
        tennis.playerBWin();

        expect(tennis.currentScore).toEqual("Thirty Fifteen");
    });

    it("Say score 'Fifteen Thirty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Fifteen All";
        tennis.playerBWin();
        expect(tennis.currentScore).toEqual("Fifteen Thirty");
    });

    it("Say score 'Forty Fifteen'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Forty Love";
        tennis.playerBWin();

        expect(tennis.currentScore).toEqual("Forty Fifteen");
    });

    it("Say score 'Thirty All'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Thirty Fifteen";
        tennis.playerBWin();

        expect(tennis.currentScore).toEqual("Thirty All");
    });

    it("Say score 'Fifteen Forty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Fifteen Thirty";
        tennis.playerBWin();

        expect(tennis.currentScore).toEqual("Fifteen Forty");
    });

    it("Say score 'Forty Thirty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Forty Fifteen";
        tennis.playerBWin();

        expect(tennis.currentScore).toEqual("Forty Thirty");
    });

    it("Say score 'Thirty Forty'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Thirty All";
        tennis.playerBWin();
        expect(tennis.currentScore).toEqual("Thirty Forty");
    });

    it("Say score 'Player B WIN'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Fifteen Forty";
        tennis.playerBWin();
        expect(tennis.currentScore).toEqual("Player B WIN");
    });

    it("Say score 'DUECE'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Forty Thirty";
        tennis.playerBWin();
        expect(tennis.currentScore).toEqual("DUECE");
    });

    it("Say score 'Player B WIN'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Thirty Forty";
        tennis.playerBWin();
        expect(tennis.currentScore).toEqual("Player B WIN");
    });

    it("Say score 'Advantage B'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "DUECE";
        tennis.playerBWin();
        expect(tennis.currentScore).toEqual("Advantage B");
    });

    it("Say score 'DUECE'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Advantage A";
        tennis.playerBWin();
        expect(tennis.currentScore).toEqual("DUECE");
    });

    it("Say score 'Player B WIN'", function () {
        var tennis = new Tennis();
        tennis.currentScore = "Advantage B";
        tennis.playerBWin();
        expect(tennis.currentScore).toEqual("Player B WIN");
    });
});
