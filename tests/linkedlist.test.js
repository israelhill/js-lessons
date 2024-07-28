import { expect, test } from 'vitest'
import { LinkedList } from "../linkedlist/linkedlist";

test('successfully instantiates a LinkedList', () => {
  const list = new LinkedList()
  expect(true)
})

/**
 * getLength() and add()
 */
test('getLength when list contains no elements', () => {
  const list = new LinkedList()
  const length = list.getLength()
  expect(length).toBe(0)
})

test('getLength when list contains 1 element', () => {
  const list = new LinkedList()
  expect(list.getLength()).toBe(0)
})

test('getLength/add when list contains multiple elements', () => {
  const list = new LinkedList()
  list.add(1)
  list.add(1)
  list.add(1)
  list.add(1)
  const length = list.getLength()
  expect(length).toBe(4)
})

test('getLength/add when list contains many elements', () => {
  const numElements = 10000
  const list = new LinkedList()
  for(let i = 0; i < numElements; i++) {
    list.add(i)
  }
  expect(list.getLength()).toBe(numElements)
})

/**
 * print()
 */
test('print an empty list', () => {
  const list = new LinkedList()
  expect(list.print()).toBe('null')
})

test('print a list with a single element', () => {
  const list = new LinkedList()
  list.add(25)
  const expectation = '25 -> null'
})

test('print a list with multiple elements', () => {
  const list = new LinkedList()
  list.add(1)
  list.add(1)
  list.add(2)
  list.add(3)

  const expectation = '1 -> 1 -> 2 -> 3 -> null'
  expect(list.print()).toBe(expectation)
})

/**
 * pop()
 */
test('pop when the list is empty', () => {
  const list = new LinkedList()
  expect(list.pop()).toBe(null)
})

test('pop when list only contains a single item', () => {
  const list = new LinkedList()
  list.add(100)
  expect(list.pop()).toBe(100)
})

test('pop when list contains many items', () => {
  const list = new LinkedList()
  const numElements = 1000
  for(let i = 0; i < numElements; i++) {
    list.add(i)
  }
  expect(list.pop()).toBe(numElements - 1)
  expect(list.pop()).toBe(numElements - 2)
  expect(list.pop()).toBe(numElements - 3)
})

test('pop until list is empty', () => {
  const list = new LinkedList()
  const numElements = 1000
  for(let i = 0; i < numElements; i++) {
    list.add(i)
  }
  for(let i = numElements - 1; i >= 0; i--) {
    expect(list.pop()).toBe(i)
  }
  expect(list.pop()).toBe(null)
})