import type { Request, Response } from 'express';
import { menuObject } from '../helpers/createMenuObject.js';
import { Pet } from '../models/pet.js';

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll()
  res.render('pages/page', {
    list,
    menu: menuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    }
  })
}
export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog')
  res.render('pages/page', {
    list,
    menu: menuObject('dog'),
    banner: {
      title: 'Cães',
      background: 'banner_dog.jpg'
    }
  })

}
export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat')
  res.render('pages/page', {
    list,
    menu: menuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    }
  })
}
export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish')
  res.render('pages/page', {
    list,
    menu: menuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    }
  })
}
