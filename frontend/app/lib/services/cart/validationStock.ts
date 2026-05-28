export async function validateStock(documentId: string, quantity: number) {
  const res = await fetch("/api/cart/validate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      documentId,
      quantity,
    }),
  });

  const data = await res.json();

  return res.ok
    ? { valid: true as const, stock: data.stock }
    : { valid: false as const, message: data.message };
}
