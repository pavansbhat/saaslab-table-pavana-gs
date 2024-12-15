import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomTable } from "../components/CustomTable";
import { describe, it, expect } from "vitest";

describe("CustomTable Component", () => {
  it("renders loading state", () => {
    render(<CustomTable data={[]} loading={true} />);
    expect(screen.getByText(/Loading.../i)).toBeDefined();
  });

  it("renders error message", () => {
    render(
      <CustomTable data={[]} loading={false} error="Error fetching data" />,
    );
    expect(screen.getByText(/Error fetching data/i)).toBeDefined();
  });

  it("renders table with data", () => {
    const data = [{ id: 1, percentage: "50%", amount: "$100" }];
    render(<CustomTable data={data} loading={false} />);
    expect(screen.getByText(/Sl.No/i)).toBeDefined();
    expect(screen.getByText(/Percentage funded/i)).toBeDefined();
    expect(screen.getByText(/Amount pledged/i)).toBeDefined();
  });

  it("handles pagination", async () => {
    const user = userEvent.setup();
    const data = Array.from({ length: 10 }, (_, i) => ({ id: i + 1 }));

    render(<CustomTable data={data} loading={false} />);

    expect(screen.getByText("1")).toBeDefined();

    await user.click(screen.getByRole("button", { name: ">" }));
    expect(screen.getByText("2")).toBeDefined();
  });
});
