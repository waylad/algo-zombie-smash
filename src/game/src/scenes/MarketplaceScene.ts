import { CarToken } from 'state/stateTypes'
import { getCars, mintCar } from '../blockchain/lib'
import { state } from '../state/state'

export class MarketplaceScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Marketplace',
    })
  }

  init(): void {}

  preload(): void {}

  displayCar(this: Phaser.Scene, car: CarToken, i: number, j: number) {
    const carCell = this.add.image(0, 0, 'car-bg')
    const partCar = this.add.image(0, 0, `car${car.carCode[0]}`)
    const partBoost = this.add.image(0, 0, `boost${car.carCode[1]}`)
    const partWeight = this.add.image(0, 0, `weight${car.carCode[2]}`)
    const partGun = this.add.image(0, 0, `gun${car.carCode[3]}`)
    const partGear = this.add.image(0, 0, `gear${car.carCode[4]}`)
    const partArmor = this.add.image(0, 0, `armor${car.carCode[5]}`)
    const partWheel = this.add.image(0, 0, `wheel${car.carCode[6]}`)
    const partFuel = this.add.image(0, 0, `fuel${car.carCode[7]}`)

    
    // Select
    let buttonSelect: any = new Phaser.GameObjects.Text(this, 0, 0, '', {})
    buttonSelect = this.add.image(-80, 160, 'button-small')
    buttonSelect.setInteractive({ cursor: 'pointer' })
    buttonSelect.on('pointerdown', async () => {
      state.currentCar = car
      this.scene.start('Garage')
    })
    let textSelect: any = new Phaser.GameObjects.Text(this, 0, 0, '', {})
 
      textSelect = new Phaser.GameObjects.Text(this, -135, 144, 'SELECT', {
        fontFamily: 'Electrolize',
        align: 'center',
        wordWrap: { width: 140, useAdvancedWrap: true },
      })
        .setFontSize(30)
        .setOrigin(0)
        .setColor('#ECE0C4')

    

    let carContainer = this.add.container(0, 0, [
      partCar,
      partBoost,
      partWeight,
      partGun,
      partGear,
      partArmor,
      partWheel,
      partFuel,
    ])
    carContainer.setScale(0.4)

    this.add.container(
      this.sys.canvas.width / 2 - 580 + (i % 4) * 380,
      this.sys.canvas.height / 2 - 230 + j * 400,
      [carCell, carContainer, buttonSelect, textSelect],
    )
  }

  create(): void {
    this.add.tileSprite(
      this.sys.canvas.width / 2,
      this.sys.canvas.height / 2,
      this.sys.canvas.width,
      this.sys.canvas.height,
      'background',
    )

    this.add.rectangle(
      this.sys.canvas.width / 2,
      this.sys.canvas.height / 2,
      this.sys.canvas.width,
      this.sys.canvas.height,
      0x000000,
      0.7,
    )

    this.add
      .text(50, 65, 'MY SMASHERS', {
        fontFamily: 'Electrolize',
        align: 'center',
        wordWrap: { width: 240, useAdvancedWrap: true },
      })
      .setFontSize(30)
      .setOrigin(0)
      .setColor('#ECE0C4')

    for (let i = 0; i < 4; i++) {
      let car = state.ownedCars[i]
      if (car && car.carCode) {
        this.displayCar(car, i, 0)
      }
    }

    for (let i = 0; i < 4; i++) {
      let car = state.onSaleCars[i]
      if (car && car.carCode) {
        this.displayCar(car, i, 1)
      }
    }

    const buttonBg = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2 + 250, 'button-big')
    buttonBg.setInteractive({cursor: 'pointer'})
    
    const buttonText = this.add
    .text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 + 250, 'MINT SMASHER', {
      fontFamily: 'Electrolize',
      align: 'center',
      wordWrap: { width: 600, useAdvancedWrap: true },
    })
    .setFontSize(34)
    .setOrigin(0.5)

    buttonBg.on('pointerdown', async () => {
      buttonText.setText('LOADING...')
      try {
        await mintCar()
        await getCars()
        this.scene.restart()
      } catch (e: any) {
        console.log(e)
        buttonText.setText('MINT SMASHER')
        alert(e)
      }
    })
  }

  update(): void {}
}
