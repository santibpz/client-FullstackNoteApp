import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  // const { container } = render(<Note note={note} />)

  render(<Note note = {note} />)

  screen.debug()

  // const div = container.querySelector('.note')
  // expect(div).toHaveTextContent(
  //   'Component testing is done with react-testing-library'
  // )
})

test.only('clicking the button calls event handler once', async () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const mockHandler = jest.fn()

  render(
    <Note note={note} toggleImportance={mockHandler} />
  )

  const button = screen.getByText('make not important')
  // const button = screen.getByRole('button', {name: /make not important/i})

  // screen.debug(button)
  await userEvent.click(button)
  // fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})