import React from "react"
import { render } from "@testing-library/react"
import Robyn from "./Robyn"

test("renders learn react link", () => {
  const { getByText } = render(<Robyn />)
  const heading = getByText(/Robyn Page/i)
  expect(heading).toBeInTheDocument()
})
