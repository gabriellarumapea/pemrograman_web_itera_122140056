import { renderHook } from "@testing-library/react";
import { useSearchBooks } from "../useSearchBooks";

test("mengembalikan hasil pencarian yang sesuai", () => {
  const books = [
    { title: "React untuk Pemula" },
    { title: "Belajar JavaScript" }
  ];

  const { result } = renderHook(() =>
    useSearchBooks(books, "React")
  );

  expect(result.current).toHaveLength(1);
  expect(result.current[0].title).toBe("React untuk Pemula");
});
