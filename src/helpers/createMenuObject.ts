type Menu = '' | 'dog' | 'cat' | 'fish' | 'all'

export const menuObject = (activeMenu: Menu) => {
  return {
    all: activeMenu === 'all' ? 'active' : '',
    fish: activeMenu === 'fish' ? 'active' : '',
    dog: activeMenu === 'dog' ? 'active' : '',
    cat: activeMenu === 'cat' ? 'active' : '',
  }
}
