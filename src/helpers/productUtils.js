import _ from 'lodash'

export const filterByName = (list, name) => {
  let searchName = _.trim(_.toLower(name))
  return _.filter(list, item => _.toLower(item.name).includes(searchName))
}

export const findItemById = (list, id) => {
  return _.find(list, item => item.id === id)
}

export const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues)
}

export const updateItemInArray = (array, itemId, updateItemCallback) => {
  let updatedItems = array.map(item => {
    if (item.id !== itemId) {
      return item
    }

    const updatedItem = updateItemCallback(item)
    return updatedItem
  })

  return updatedItems
}

export const deleteItemInArray = (array, id) => {
  const index = _.findIndex(array, item => item.id === id)
  return [...array.slice(0, index), ...array.slice(index + 1)]
}
