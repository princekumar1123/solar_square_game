import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {
  array: number[] = []
  transform(clickedTiles: number[], tile: number[]): boolean {
    clickedTiles.forEach((e: any) => {
      if (e[0] == tile[0] && e[1] == tile[1]) {
        this.array.push(e)
      }
    })
    return (this.array.length != 0) ? true : false
  }
}