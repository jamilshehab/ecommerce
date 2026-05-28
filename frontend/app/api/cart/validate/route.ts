import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { documentId, quantity } = await req.json();

    // 1. GET PRODUCT DIRECTLY
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products/${documentId}?populate=*`,
    );

    const json = await res.json();

    const product = json?.data;

    if (!product) {
      return NextResponse.json(
        { valid: false, message: "Product not found" },
        { status: 404 },
      );
    }

    const currentStock = product.stock;

    // 2. CHECK STOCK
    if (quantity > currentStock) {
      return NextResponse.json(
        {
          valid: false,
          message: `Only ${currentStock} items available`,
        },
        { status: 400 },
      );
    }

    // 3. UPDATE STOCK
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products/${documentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            stock: currentStock - quantity,
          },
        }),
      },
    );

    return NextResponse.json({
      valid: true,
      stock: currentStock - quantity,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { valid: false, message: "Validation failed" },
      { status: 500 },
    );
  }
}
