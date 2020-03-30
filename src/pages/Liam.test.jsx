import React from "react"
import { render } from "@testing-library/react"
import Liam from "./Liam"

test("renders learn react link", () => {
  const { getByText } = render(<Liam />)
  const heading = getByText(/Liam Page/i)
  expect(heading).toBeInTheDocument()
})
