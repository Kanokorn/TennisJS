function Tennis(winner) {
    this.currentScore = "Love All";

    this.playerAWin = function () {
        if (this.currentScore === "Love All") {
            this.currentScore = "Fifteen Love";
            return;
        }

        if (this.currentScore === "Love Fifteen") {
            this.currentScore = "Fifteen All";
            return;
        }

        if (this.currentScore === "Fifteen Love") {
            this.currentScore = "Thirty Love";
            return;
        }

        if (this.currentScore === "Thirty Love") {
            this.currentScore = "Forty Love";
            return;
        }

        if (this.currentScore === "Forty Love") {
            this.currentScore = "Player A WIN";
            return;
        }

        if (this.currentScore === "Fifteen All") {
            this.currentScore = "Thirty Fifteen";
            return;
        }

        if (this.currentScore === "Love Thirty") {
            this.currentScore = "Fifteen Thirty";
            return;
        }

        if (this.currentScore === "Thirty Fifteen") {
            this.currentScore = "Forty Fifteen";
            return;
        }

        if (this.currentScore === "Fifteen Thirty") {
            this.currentScore = "Thirty All";
            return;
        }

        if (this.currentScore === "Love Forty") {
            this.currentScore = "Fifteen Forty";
            return;
        }

        if (this.currentScore === "Forty Fifteen") {
            this.currentScore = "Player A WIN";
            return;
        }

        if (this.currentScore === "Thirty All") {
            this.currentScore = "Forty Thirty";
            return;
        }

        if (this.currentScore === "Fifteen Forty") {
            this.currentScore = "Thirty Forty";
            return;
        }

        if (this.currentScore === "Forty Thirty") {
            this.currentScore = "Player A WIN";
            return;
        }

        if (this.currentScore === "Thirty Forty") {
            this.currentScore = "DUECE";
            return;
        }

        if (this.currentScore === "DUECE") {
            this.currentScore = "Advantage A";
            return;
        }

        if (this.currentScore === "Advantage A") {
            this.currentScore = "Player A WIN";
            return;
        }

        if (this.currentScore === "Advantage B") {
            this.currentScore = "DUECE";
            return;
        }
    };

    this.playerBWin = function () {
        if (this.currentScore === "Love All") {
            this.currentScore = "Love Fifteen";
            return;
        }

        if (this.currentScore === "Love Fifteen") {
            this.currentScore = "Love Thirty";
            return;
        }

        if (this.currentScore === "Love Thirty") {
            this.currentScore = "Love Forty";
            return;
        }

        if (this.currentScore === "Love Forty") {
            this.currentScore = "Player B WIN";
            return;
        }

        if (this.currentScore === "Fifteen Love") {
            this.currentScore = "Fifteen All";
            return;
        }

        if (this.currentScore === "Thirty Love") {
            this.currentScore = "Thirty Fifteen";
            return;
        }

        if (this.currentScore === "Fifteen All") {
            this.currentScore = "Fifteen Thirty";
            return;
        }

        if (this.currentScore === "Forty Love") {
            this.currentScore = "Forty Fifteen";
            return;
        }

        if (this.currentScore === "Thirty Fifteen") {
            this.currentScore = "Thirty All";
            return;
        }

        if (this.currentScore === "Fifteen Thirty") {
            this.currentScore = "Fifteen Forty";
            return;
        }

        if (this.currentScore === "Forty Fifteen") {
            this.currentScore = "Forty Thirty";
            return;
        }

        if (this.currentScore === "Thirty All") {
            this.currentScore = "Thirty Forty";
            return;
        }

        if (this.currentScore === "Fifteen Forty") {
            this.currentScore = "Player B WIN";
            return;
        }

        if (this.currentScore === "Forty Thirty") {
            this.currentScore = "DUECE";
            return;
        }

        if (this.currentScore === "Thirty Forty") {
            this.currentScore = "Player B WIN";
            return;
        }

        if (this.currentScore === "DUECE") {
            this.currentScore = "Advantage B";
            return;
        }

        if (this.currentScore === "Advantage A") {
            this.currentScore = "DUECE";
            return;
        }

        if (this.currentScore === "Advantage B") {
            this.currentScore = "Player B WIN";
            return;
        }
    };

}
