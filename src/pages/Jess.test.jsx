import React from "react"
import { render } from "@testing-library/react"
import Jess from "./Jess"

test("renders learn react link", () => {
  const { getByText } = render(<Jess />)
  const heading = getByText(/Jess Page/i)
  expect(heading).toBeInTheDocument()
})
