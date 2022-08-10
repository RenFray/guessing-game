class GuessingGame {
    constructor() {
        this.array = [];
		this.fistNum = 0;
        this.meanNum = 0;
		this.lastNum = 0;
	}
    setRange(min, max) {
		for (var i = min; i < max; i++) {
			this.array.push(i);
		}
		this.firstNum = 0;
		this.lastNum = this.array.length;
    }
    guess() {
		this.meanNum = Math.ceil((this.firstNum + this.lastNum)/2);
		return this.array[this.meanNum];
    }
    lower() {
		this.lastNum = this.meanNum;
    }
    greater() {
		this.firstNum = this.meanNum;
    }
}

module.exports = GuessingGame;