class TicTacToe {
  constructor() {
    this.ttt = [[null, null, null], [null, null, null], [null, null, null]];
    this.currPlayer = "x";
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.currPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    // console.log("-currPlayer " + this.currPlayer);
    if (this.ttt[rowIndex][columnIndex] === null) {
      this.ttt[rowIndex][columnIndex] = this.currPlayer;

      if (this.currPlayer === "x") {
        this.currPlayer = "o";
      } else {
        this.currPlayer = "x";
      }
    }
    // console.log("=currPlayer " + this.currPlayer);
  }

  isFinished() {
    return this.isDraw() || this.getWinner() != null;
  }

  getWinner() {
    this.winner = null;
    // console.log("ttt " + this.ttt);
    const winnerVar1 = this.ttt[0][0] == this.ttt[0][1] && this.ttt[0][0] ==this.ttt[0][2];
    // console.log(
    //   "1 " + winnerVar1 + this.ttt[0][0] + " ==" + this.ttt[0][1] + "==" + this.ttt[0][2]
    // );
    const winnerVar2 = this.ttt[1][0] == this.ttt[1][1] && this.ttt[1][0] == this.ttt[1][2];
    // console.log(
    //   "2 " + winnerVar2 + this.ttt[1][0] + " ==" + this.ttt[1][1] + "==" + this.ttt[1][2]
    // );
    const winnerVar3 = this.ttt[2][0] == this.ttt[2][1] && this.ttt[2][0] == this.ttt[2][2];
    // console.log(
    //   "3 " + winnerVar3 + this.ttt[2][0] + " ==" + this.ttt[2][1] + "==" + this.ttt[2][2]
    // );

    const winnerVar4 = this.ttt[0][0] == this.ttt[1][0] && this.ttt[0][0] == this.ttt[2][0];
    // console.log(
    //   "4 " + winnerVar4 + this.ttt[0][0] + " ==" + this.ttt[1][0] + "==" + this.ttt[2][0]
    // );
    const winnerVar5 = this.ttt[0][1] == this.ttt[1][1] && this.ttt[0][1] == this.ttt[2][1];
    // console.log(
    //   "5 " + winnerVar5 + tthis.tt[0][1] + " ==" + this.ttt[1][1] + "==" + this.ttt[2][1]
    // );
    const winnerVar6 = this.ttt[0][2] == this.ttt[1][2] && this.ttt[0][2] == this.ttt[2][2];
    // console.log(
    //   "6 " + winnerVar6 + this.ttt[0][2] + " ==" + this.ttt[1][2] + "==" + this.ttt[2][2]
    // );

    const winnerVar7 = this.ttt[0][0] == this.ttt[1][1] && this.ttt[0][0] == this.ttt[2][2];
    // console.log(
    //   "7 " + winnerVar7 + this.ttt[0][0] + " ==" + this.ttt[1][1] + "==" + this.ttt[2][2]
    // );
    const winnerVar8 = this.ttt[2][0] == this.ttt[1][1] && this.ttt[2][0] == this.ttt[0][2];
    // console.log(
    //   "8 " + winnerVar8 + this.ttt[2][0] + " ==" + this.ttt[1][1] + "==" + this.ttt[0][2]
    // );

    //   let winnerCum = new Boolean (winnerVar2 || winnerVar2 || winnerVar3 || winnerVar4 || winnerVar5 || winnerVar6 || winnerVar7 || winnerVar8);

    //   console.log (winnerVar1 + " = " + winnerVar2 + " = " + winnerVar3 + " = " + winnerVar4 + " = " + winnerVar5 + " = " + winnerVar6 + " = " + winnerVar7 + " = " + winnerVar8 + " >>> " + winnerCum);

    if (winnerVar1 == true) {
      this.winner = this.ttt[0][0];
    //   console.log("1 " + winnerVar1);
    } else if (winnerVar2 == true) {
      this.winner = this.ttt[1][1];
    //   console.log("2 " + winnerVar2);
    } else if (winnerVar3 == true) {
      this.winner = this.ttt[2][2];
    //   console.log("3 " + winnerVar3);
    } else if (winnerVar4 == true) {
      this.winner = this.ttt[0][0];
    //   console.log("4 " + winnerVar4);
    } else if (winnerVar5 == true) {
      this.winner = this.ttt[1][1];
    //   console.log("5 " + winnerVar5);
    } else if (winnerVar6 == true) {
      this.winner = this.ttt[2][2];
    //   console.log("6 " + winnerVar6);
    } else if (winnerVar7 == true) {
      this.winner = this.ttt[0][0];
    //   console.log("7 " + winnerVar7);
    } else if (winnerVar8 == true) {
      this.winner = this.ttt[1][1];
    //   console.log("8" + winnerVar8);
    }

    return this.winner;
  }

  noMoreTurns() {
    let countCellNoEmpty = 0;
    const ttt_1_level = [...this.ttt[0], ...this.ttt[1], ...this.ttt[2]];
    // console.log ("ttt_1 " + ttt_1_level);
    ttt_1_level.forEach(el => {
      if (el != null) countCellNoEmpty++;
    });
    return countCellNoEmpty === 9 ? true : false;
  }

  isDraw() {
    //   console.log ("noMoreTurns " + this.noMoreTurns() + " getWinner " + this.getWinner());
    return this.noMoreTurns() && (this.getWinner() == null);
  }

  getFieldValue(rowIndex, columnIndex) {
    return this.ttt[rowIndex][columnIndex];
  }
}

module.exports = TicTacToe;
