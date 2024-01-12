import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gamePoint: number[][] = []
  cols: number = 4
  startStatus: boolean = true
  showStart: boolean = true
  width1: number = 110
  clickedTiles: any[] = ['']
  row: number = 0
  borderStatus: boolean = true

  add(tile: number[]) {
    this.row = this.gamePoint.length / this.cols
    if (tile[0] == this.row - 1 && tile[1] == this.cols - 1) {
      this.gamePoint.splice(0, this.gamePoint.length)
      this.width1 += 25
      this.cols += 1
      this.clickedTiles.push(tile)

      for (let i = 0; i <= this.row; i++) {
        for (let j = 0; j <= this.cols - 1; j++) {
          this.gamePoint.push([i, j])
        }
      }
    }

    else if (tile[0] == 0 && tile[1] == 0) {
      this.gamePoint.splice(0, this.gamePoint.length)
      this.width1 += 25
      this.cols += 1
      this.clickedTiles.push(tile)
      this.clickedTiles = this.clickedTiles.map((e: number[]) => {
        return [e[0] + 1, e[1] + 1]
      })

      for (let i = 0; i <= this.row; i++) {
        for (let j = 0; j <= this.cols - 1; j++) {
          this.gamePoint.push([i, j])
        }
      }
    }

    else if (tile[0] == 0 && tile[1] == this.cols - 1) {
      this.gamePoint.splice(0, this.gamePoint.length)
      this.width1 += 25
      this.cols += 1
      this.clickedTiles.push(tile)
      this.clickedTiles = this.clickedTiles.map((e: number[]) => {
        return [e[0] + 1, e[1]]
      })

      for (let i = 0; i <= this.row; i++) {
        for (let j = 0; j <= this.cols - 1; j++) {
          this.gamePoint.push([i, j])
        }
      }
    }

    else if (tile[0] == this.row - 1 && tile[1] == 0) {
      this.gamePoint.splice(0, this.gamePoint.length)
      this.width1 += 25
      this.cols += 1
      this.clickedTiles.push(tile)

      this.clickedTiles = this.clickedTiles.map((e: number[]) => {
        return [e[0], e[1] + 1]
      })

      for (let i = 0; i <= this.row; i++) {
        for (let j = 0; j <= this.cols - 1; j++) {
          this.gamePoint.push([i, j])
        }
      }
    }

    else if (tile[0] > 0 && tile[0] < this.row - 1 && tile[1] == this.cols - 1) {
      this.gamePoint.splice(0, this.gamePoint.length)
      this.width1 += 25
      this.cols += 1
      this.clickedTiles.push(tile)
      this.clickedTiles = this.clickedTiles.map((e: number[]) => {
        return [e[0], e[1]]
      })

      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j <= this.cols - 1; j++) {
          this.gamePoint.push([i, j])
        }
      }
    }

    else if (tile[0] > 0 && tile[0] < this.row && tile[1] == 0) {
      this.gamePoint.splice(0, this.gamePoint.length)
      this.width1 += 25
      this.cols += 1
      this.clickedTiles.push(tile)
      this.clickedTiles = this.clickedTiles.map((e: number[]) => {
        return [e[0], e[1] + 1]
      })

      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j <= this.cols - 1; j++) {
          this.gamePoint.push([i, j])
        }
      }
    }

    else if (tile[0] == this.row - 1 && tile[1] > 0 && tile[1] < this.cols - 1) {
      this.gamePoint.splice(0, this.gamePoint.length)
      this.clickedTiles.push(tile)
      this.clickedTiles = this.clickedTiles.map((e: number[]) => {
        return [e[0], e[1]]
      })

      for (let i = 0; i <= this.row; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.gamePoint.push([i, j])
        }
      }
    }

    else if (tile[0] == 0 && tile[1] > 0 && tile[1] < this.cols - 1) {
      this.gamePoint.splice(0, this.gamePoint.length)
      this.clickedTiles.push(tile)
      this.clickedTiles = this.clickedTiles.map((e: number[]) => {
        return [e[0] + 1, e[1]]
      })
      for (let i = 0; i <= this.row; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.gamePoint.push([i, j])
        }
      }
    }

    else {
      let availableData = this.clickedTiles.filter((e: number[], i: number) => {

        if (e[0] == tile[0] && e[1] == tile[1]) {
          this.clickedTiles.splice(i, 1)
          return true
        }
        else {
          return false
        }
      })

      if (availableData.length == 0) {
        this.clickedTiles.push(tile)
      }
      this.gamePoint.splice(0, this.gamePoint.length)
      for (let i = 0; i <= this.row - 1; i++) {
        for (let j = 0; j <= this.cols - 1; j++) {
          this.gamePoint.push([i, j])
        }
      }
    }
  }

  reset() {
    this.cols = 4
    this.width1 = 110
    this.row = 0
    this.clickedTiles.splice(0, this.clickedTiles.length)
    this.gamePoint.splice(0, this.gamePoint.length)
    this.borderStatus = true

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.gamePoint.push([i, j])
      }
    }
    this.startStatus = false
    this.showStart = false
  }

  finalDesign() {
    this.borderStatus = !this.borderStatus
  }

  revert() {
    this.borderStatus = !this.borderStatus
  }

  start() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.gamePoint.push([i, j])
      }
    }
    this.startStatus = false
    this.showStart = false
  }
}