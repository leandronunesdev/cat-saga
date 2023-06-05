import TableRow from ".";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

describe("<TableRow />", () => {
  it("should render", () => {
    render(
      <table>
        <tbody>
          <TableRow
            firstColumnRow="test"
            secondColumnRow="second"
            thirdColumnRow="third"
            index={0}
          />
        </tbody>
      </table>
    );

    const row = screen.getByText(/test/i);
    expect(row).toBeInTheDocument();
  });
});
