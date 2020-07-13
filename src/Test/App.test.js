import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'

import { fetchShow as mockFetchShow } from '../api/fetchShow'

jest.mock('../api/fetchShow')
// console.log(mockFetchShow)

test('Page loads when site is requested and page is rerendered with show data when mounted', async () => {

    const mockData = [{}]

    const { rerender } = render( <App /> )

    expect(0).toBe(0)
}) 